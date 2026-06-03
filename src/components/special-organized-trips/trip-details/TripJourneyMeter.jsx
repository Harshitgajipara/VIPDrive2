import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../../../styles/special-organized-trips/trip-details/TripJourneyMeter.css';

// ─────────────────────────────────────────────────────────────────────────────
// TripJourneyMeter
//
// Redesigned sticky speedometer-style journey progress bar.
// Matches the reference design from code.html (Harshit_Info).
//
// Visual anatomy (top → bottom):
//   Row 1: Day number labels  (01, 02, … N)
//   Row 2: Speedometer gauge  — ticks (large / medium / small) + gold progress
//   Row 3: KM distance labels (0 KM … totalKm KM)
//   Row 4: Car indicator      — animated gold car SVG slides along the track
//
// Props:
//   totalDays   number  — total days in current itinerary
//   dayRefs     ref     — array of per-day section DOM refs (for scroll tracking)
//   resetKey    number  — increment to re-measure on tab switch
//   totalKm     number  — optional total km for the trip (default 500)
// ─────────────────────────────────────────────────────────────────────────────

// LARGE_TICK_INTERVAL: how many small ticks between each large tick.
// With this, TICK_COUNT = (totalDays-1)*LARGE_TICK_INTERVAL + 1,
// so each large tick falls exactly at i/(totalDays-1) — same as justify-between with totalDays items.
const LARGE_TICK_INTERVAL = 10;

// Pattern: every LARGE_TICK_INTERVAL-th tick is LARGE, every half is MEDIUM, rest SMALL
const getTickSize = (index) => {
  if (index % LARGE_TICK_INTERVAL === 0) return 'large';
  if (index % (LARGE_TICK_INTERVAL / 2) === 0) return 'medium';
  return 'small';
};

const TripJourneyMeter = ({
  totalDays = 10,
  dayRefs,
  resetKey = 0,
  totalKm = 500,
}) => {
  const [progress, setProgress] = useState(0);       // 0..1
  const [direction, setDirection] = useState('fwd'); // 'fwd' | 'rev'
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [markerPcts, setMarkerPcts] = useState([]);

  const animFrameRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const trackRef = useRef(null);

  // ── Measure day positions relative to scroll range ────────────────────────
  const measureMarkers = useCallback(() => {
    const days = dayRefs?.current?.filter(Boolean) || [];
    if (days.length === 0) { setMarkerPcts([]); return; }
    if (days.length === 1) { setMarkerPcts([0.5]); return; }

    const firstTop = days[0].getBoundingClientRect().top + window.scrollY;
    const lastTop  = days[days.length - 1].getBoundingClientRect().top + window.scrollY;
    const range    = lastTop - firstTop || 1;

    const pcts = days.map(el => {
      const top = el.getBoundingClientRect().top + window.scrollY;
      return Math.max(0, Math.min(1, (top - firstTop) / range));
    });
    setMarkerPcts(pcts);
  }, [dayRefs]);

  useEffect(() => {
    measureMarkers();
    window.addEventListener('resize', measureMarkers, { passive: true });
    const timer = setTimeout(measureMarkers, 500);
    return () => {
      window.removeEventListener('resize', measureMarkers);
      clearTimeout(timer);
    };
  }, [measureMarkers, resetKey]);

  // ── Scroll tracking ───────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (animFrameRef.current) return;
    animFrameRef.current = requestAnimationFrame(() => {
      animFrameRef.current = null;

      const currentScrollY = window.scrollY;
      setDirection(currentScrollY >= lastScrollY.current ? 'fwd' : 'rev');
      lastScrollY.current = currentScrollY;

      const days = dayRefs?.current?.filter(Boolean) || [];
      if (days.length < 2) return;

      const firstTop = days[0].getBoundingClientRect().top + currentScrollY;
      const lastTop  = days[days.length - 1].getBoundingClientRect().top + currentScrollY;
      const range    = lastTop - firstTop || 1;

      const triggerY    = currentScrollY + window.innerHeight / 2;
      const rawProgress = (triggerY - firstTop) / range;

      setProgress(Math.min(1, Math.max(0, rawProgress)));

      // Active day
      let bestDay = 0;
      days.forEach((el, i) => {
        const elTop = el.getBoundingClientRect().top + currentScrollY;
        if (triggerY >= elTop - 100) bestDay = i;
      });
      setActiveDayIndex(bestDay);
    });
  }, [dayRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleScroll]);

  // ── Derived values ────────────────────────────────────────────────────────
  // TICK_COUNT: (N-1)*10+1 ensures large ticks fall at 0, 1/(N-1), 2/(N-1)...1
  // which perfectly matches justify-between spacing for N items.
  const TICK_COUNT    = Math.max(11, (totalDays - 1) * LARGE_TICK_INTERVAL + 1);
  const progressPct   = progress * 100;                 // 0–100
  const activeTicks   = Math.round(progress * (TICK_COUNT - 1));
  const currentKm     = Math.round(progress * totalKm);

  // KM labels: same count as day labels so they align with large ticks
  const kmStep        = totalDays > 1 ? totalKm / (totalDays - 1) : totalKm;

  // Equal-interval dot positions: i/(N-1) matches large tick positions exactly.
  // (DOM-based markerPcts are still used for activeDayIndex detection only.)
  const equalDotPcts  = Array.from({ length: totalDays }, (_, i) =>
    totalDays > 1 ? i / (totalDays - 1) : 0
  );

  // Car horizontal position
  const carLeftPct    = progressPct;

  // Day labels — pad to 2 digits
  const dayLabels = Array.from({ length: totalDays }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );

  return (
    <div
      className="tjm-section"
      aria-label="Journey progress tracker"
      role="region"
    >
      <div className="tjm-inner">

        {/* ── Row 0: "Your Journey" label ── */}
        <div className="tjm-title-row">
          <span className="tjm-title">Your Journey</span>
          <span className="tjm-km-badge">
            {currentKm} / {totalKm} KM
          </span>
        </div>

        {/* ── Row 1: Day number labels — absolutely positioned to match large ticks ── */}
        <div className="tjm-day-labels" aria-hidden="true">
          {dayLabels.map((label, i) => {
            const leftPct = totalDays > 1 ? (i / (totalDays - 1)) * 100 : 50;
            return (
              <div
                key={i}
                className={`tjm-day-num ${i <= activeDayIndex ? 'tjm-day-num--active' : ''}`}
                style={{ left: `${leftPct}%` }}
              >
                {label}
              </div>
            );
          })}
        </div>

        {/* ── Row 2: Gauge track (ticks + progress line + car) ── */}
        <div
          className="tjm-gauge-track"
          ref={trackRef}
          data-dir={direction}
          aria-hidden="true"
        >
          {/* Tick marks */}
          <div className="tjm-ticks-container">
            {Array.from({ length: TICK_COUNT }, (_, i) => {
              const size    = getTickSize(i);
              const isActive = i <= activeTicks;
              return (
                <div
                  key={i}
                  className={`tjm-tick tjm-tick--${size} ${isActive ? 'tjm-tick--active' : ''}`}
                />
              );
            })}
          </div>

          {/* Progress overlay line */}
          <div className="tjm-progress-bg">
            <div
              className="tjm-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Day marker dots — equally spaced to align with large ticks */}
          <div className="tjm-day-dots">
            {equalDotPcts.map((pct, i) => (
              <div
                key={i}
                className={`tjm-day-dot ${i <= activeDayIndex ? 'tjm-day-dot--active' : ''}`}
                style={{ left: `${pct * 100}%` }}
                aria-label={`Day ${i + 1}`}
              />
            ))}
          </div>

          {/* Animated car SVG — detailed reference art from Harshit_Info/code.html */}
          <div
            className="tjm-car"
            style={{ left: `calc(${carLeftPct}% - ${progress * 50}px)` }}
          >
            {/* Exact reference car — 1536×1536 viewBox, gold fill */}
            <svg
              className="tjm-car-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1536 1536"
              width="80"
              height="80"
            >
              <g fill="#f2ca50" stroke="none">
                <path d="M471,895 L468,897 L468,899 L465,902 L465,904 L460,909 L457,914 L447,924 L441,928 L442,932 L445,932 L451,931 L470,932 L472,930 Z" fillRule="evenodd"/>
                <path d="M273,894 L272,899 L273,920 L274,931 L276,933 L298,932 L299,933 L303,932 L303,929 L301,927 L292,920 L289,915 L284,910 L281,906 L280,903 L277,900 L277,898 L276,896 L275,895 Z" fillRule="evenodd"/>
                <path d="M1421,810 L1418,809 L1412,813 L1410,813 L1398,820 L1393,825 L1392,828 L1380,844 L1371,852 L1369,855 L1364,858 L1362,858 L1358,861 L1355,861 L1353,863 L1353,869 L1351,873 L1350,881 L1347,890 L1344,895 L1344,898 L1341,902 L1341,905 L1335,915 L1335,917 L1333,919 L1333,923 L1335,923 L1336,922 L1402,923 L1410,919 L1411,915 L1413,912 L1414,901 L1414,886 L1416,877 L1417,848 L1419,839 Z" fillRule="evenodd"/>
                <path d="M174,802 L153,802 L150,801 L145,796 L143,790 L138,789 L135,792 L133,793 L131,793 L115,804 L113,804 L101,815 L100,818 L99,841 L99,863 L97,873 L97,882 L98,884 L103,888 L103,892 L104,894 L108,896 L114,895 L125,895 L131,896 L141,895 L142,893 L142,869 L143,861 L145,855 L145,849 L148,842 L148,838 L151,831 L157,821 L160,817 L169,808 L172,807 L174,804 Z" fillRule="evenodd"/>
                <path d="M241,758 L240,756 L238,754 L236,753 L222,753 L218,754 L215,756 L210,756 L207,757 L204,759 L201,759 L198,760 L196,762 L186,765 L170,772 L151,782 L148,785 L148,790 L150,794 L152,796 L171,796 L178,797 L184,799 L186,801 L186,802 L203,803 L206,802 L225,783 L232,775 L238,767 L238,765 L240,763 L241,761 Z" fillRule="evenodd"/>
                <path d="M353,747 L326,756 L312,765 L298,777 L282,798 L274,817 L271,830 L270,845 L271,873 L276,886 L288,907 L298,918 L317,933 L330,940 L349,946 L355,946 L361,948 L383,948 L388,946 L395,946 L413,940 L435,927 L448,916 L466,892 L472,878 L471,827 L466,809 L459,794 L450,781 L431,763 L412,753 L392,747 L383,746 Z" fillRule="evenodd"/>
                <path d="M380,870 L383,873 L384,876 L387,879 L393,888 L397,896 L400,899 L399,903 L394,906 L384,907 L381,909 L376,908 L376,885 L377,872 Z" fillRule="evenodd"/>
                <path d="M363,870 L366,871 L367,881 L368,899 L367,909 L363,909 L359,907 L355,907 L351,906 L349,904 L346,904 L344,903 L343,901 L346,898 L348,893 L351,890 L351,888 L354,885 L358,877 L361,874 L361,872 Z" fillRule="evenodd"/>
                <path d="M391,862 L395,863 L397,865 L399,865 L417,874 L420,877 L423,877 L426,881 L420,888 L414,894 L410,897 L406,896 L406,894 L404,892 L403,888 L397,879 L397,877 L391,868 L390,865 Z" fillRule="evenodd"/>
                <path d="M353,863 L353,866 L351,871 L340,890 L339,892 L339,894 L338,896 L334,897 L330,894 L322,886 L319,882 L319,880 L322,877 L326,876 L333,871 L339,868 L343,867 L345,865 L347,865 L350,862 Z" fillRule="evenodd"/>
                <path d="M307,854 L308,848 L339,850 L341,850 L342,849 L345,850 L345,853 L343,855 L340,856 L337,859 L334,861 L332,861 L325,867 L323,867 L320,870 L318,871 L317,872 L314,873 L312,871 L310,866 Z" fillRule="evenodd"/>
                <path d="M432,870 L429,872 L425,870 L415,864 L412,861 L410,861 L404,856 L399,854 L397,851 L399,849 L415,849 L426,847 L431,847 L436,848 L436,856 L435,861 L432,866 Z" fillRule="evenodd"/>
                <path d="M307,833 L310,826 L310,822 L312,818 L315,816 L320,820 L322,820 L336,829 L339,832 L341,832 L344,834 L346,837 L344,839 L332,840 L309,841 L307,839 Z" fillRule="evenodd"/>
                <path d="M432,818 L435,827 L436,833 L435,840 L426,840 L408,839 L397,836 L401,832 L403,832 L410,826 L412,826 L415,823 L426,816 L429,815 Z" fillRule="evenodd"/>
                <path d="M331,793 L335,791 L337,793 L342,801 L343,805 L345,807 L346,811 L351,818 L351,820 L353,822 L353,824 L350,826 L348,825 L346,823 L342,822 L330,816 L319,810 L318,807 L321,803 Z" fillRule="evenodd"/>
                <path d="M409,790 L410,792 L415,795 L421,801 L425,807 L422,810 L417,813 L415,813 L406,819 L402,820 L400,822 L398,822 L395,825 L390,824 L390,822 L391,819 L394,813 L403,798 L405,792 L407,790 Z" fillRule="evenodd"/>
                <path d="M353,781 L359,780 L365,780 L367,782 L367,795 L364,819 L360,815 L358,810 L352,801 L349,798 L343,789 L344,785 L346,784 L351,783 Z" fillRule="evenodd"/>
                <path d="M399,785 L399,788 L398,790 L394,796 L387,808 L384,811 L383,814 L381,816 L381,817 L378,818 L376,816 L375,790 L375,782 L379,779 L384,781 L390,781 L395,783 Z" fillRule="evenodd"/>
                <path d="M1202,741 L1181,747 L1161,758 L1140,777 L1131,789 L1122,807 L1116,833 L1117,863 L1128,894 L1143,914 L1158,928 L1172,937 L1175,937 L1183,942 L1190,943 L1193,945 L1209,948 L1232,948 L1254,943 L1273,934 L1287,924 L1301,910 L1311,895 L1320,875 L1324,856 L1323,825 L1318,807 L1309,789 L1300,777 L1285,762 L1268,751 L1251,744 L1231,740 Z" fillRule="evenodd"/>
                <path d="M1227,870 L1230,871 L1233,876 L1236,880 L1246,897 L1249,900 L1248,903 L1241,906 L1229,908 L1228,909 L1226,909 L1224,907 L1225,872 Z" fillRule="evenodd"/>
                <path d="M1213,870 L1215,872 L1216,890 L1215,909 L1212,909 L1208,907 L1203,907 L1199,906 L1194,904 L1192,902 L1192,900 L1196,895 L1207,876 L1209,873 Z" fillRule="evenodd"/>
                <path d="M1239,862 L1242,862 L1245,865 L1257,871 L1261,872 L1263,874 L1265,874 L1271,877 L1274,881 L1270,886 L1262,894 L1258,897 L1256,897 L1254,895 L1254,893 L1249,886 L1246,880 L1246,878 L1245,876 L1240,869 L1240,867 L1238,865 Z" fillRule="evenodd"/>
                <path d="M1201,863 L1201,867 L1200,869 L1197,873 L1194,879 L1192,885 L1189,889 L1188,891 L1188,893 L1187,895 L1185,897 L1182,897 L1178,894 L1170,886 L1167,882 L1168,879 L1169,879 L1171,877 L1176,874 L1182,871 L1184,871 L1186,870 L1193,865 L1195,865 L1198,862 Z" fillRule="evenodd"/>
                <path d="M1156,858 L1156,850 L1159,848 L1186,850 L1192,849 L1194,851 L1194,853 L1192,855 L1190,855 L1187,858 L1185,858 L1178,864 L1170,868 L1164,873 L1161,872 L1159,868 L1159,864 Z" fillRule="evenodd"/>
                <path d="M1285,849 L1285,851 L1284,858 L1282,861 L1282,865 L1281,868 L1280,870 L1278,872 L1276,872 L1273,870 L1270,867 L1265,864 L1263,864 L1260,861 L1249,855 L1246,852 L1247,849 L1277,847 L1283,847 Z" fillRule="evenodd"/>
                <path d="M1161,817 L1162,817 L1164,816 L1167,819 L1170,820 L1173,823 L1175,823 L1183,828 L1186,831 L1189,832 L1192,834 L1194,836 L1193,839 L1184,840 L1157,841 L1155,838 L1156,830 L1159,824 L1159,821 Z" fillRule="evenodd"/>
                <path d="M1285,836 L1285,838 L1283,840 L1273,840 L1258,838 L1253,839 L1246,837 L1246,835 L1248,833 L1251,832 L1254,829 L1262,825 L1268,820 L1270,820 L1273,817 L1277,815 L1279,817 L1281,820 L1284,830 Z" fillRule="evenodd"/>
                <path d="M1182,791 L1185,792 L1188,797 L1188,799 L1190,801 L1191,805 L1197,814 L1201,822 L1201,824 L1198,826 L1196,825 L1194,823 L1188,820 L1178,816 L1175,813 L1173,813 L1166,808 L1167,806 L1174,798 L1179,793 Z" fillRule="evenodd"/>
                <path d="M1257,790 L1260,793 L1261,793 L1269,801 L1272,805 L1273,808 L1271,810 L1269,810 L1267,811 L1260,816 L1256,817 L1249,822 L1243,825 L1238,824 L1238,822 L1240,820 L1240,818 L1249,800 L1254,791 Z" fillRule="evenodd"/>
                <path d="M1227,779 L1233,781 L1238,781 L1244,784 L1248,785 L1248,787 L1245,791 L1239,802 L1236,807 L1233,810 L1233,812 L1230,815 L1230,816 L1228,818 L1225,817 L1225,800 L1223,784 L1223,782 Z" fillRule="evenodd"/>
                <path d="M1192,785 L1197,784 L1202,781 L1208,781 L1212,779 L1215,780 L1215,816 L1213,818 L1210,817 L1209,814 L1195,793 L1192,790 Z" fillRule="evenodd"/>
                <path d="M1312,765 L1300,753 L1277,738 L1255,730 L1228,726 L1199,727 L1177,732 L1156,741 L1138,754 L1122,772 L1110,792 L1102,814 L1098,835 L1099,874 L1117,937 L1145,933 L1151,929 L1132,910 L1123,896 L1114,874 L1111,859 L1111,828 L1120,798 L1133,777 L1154,756 L1178,742 L1205,735 L1234,735 L1262,742 L1286,756 L1311,782 L1327,818 L1330,841 L1329,860 L1317,896 L1299,919 L1300,922 L1325,922 L1341,890 L1347,870 L1348,855 L1344,830 L1336,804 L1324,781 Z" fillRule="evenodd"/>
                <path d="M64,900 L70,912 L96,921 L202,934 L267,934 L265,833 L274,802 L314,757 L339,745 L374,740 L427,754 L464,792 L477,828 L478,931 L1024,934 L992,912 L960,900 L557,909 L539,865 L640,826 L641,821 L527,837 L499,789 L464,750 L431,733 L384,726 L324,733 L296,747 L274,768 L249,817 L241,901 L235,908 L96,901 L91,889 L74,891 Z" fillRule="evenodd"/>
                <path d="M829,659 L822,648 L815,643 L810,642 L805,639 L795,638 L765,639 L757,640 L752,642 L739,643 L735,645 L729,645 L721,648 L716,648 L709,651 L705,651 L689,657 L685,657 L680,660 L674,661 L647,673 L639,678 L627,688 L621,699 L621,707 L624,710 L654,708 L662,706 L688,705 L696,703 L724,702 L731,700 L758,699 L765,697 L782,697 L801,694 L817,693 L820,694 L824,691 L829,681 L830,675 Z" fillRule="evenodd"/>
                <path d="M1427,768 L1408,752 L1382,679 L1389,648 L1370,643 L1355,606 L1333,597 L1264,598 L1248,608 L1252,637 L1301,649 L1293,678 L1222,672 L986,615 L832,600 L706,600 L647,612 L434,705 L313,715 L231,744 L246,755 L243,769 L210,806 L180,807 L165,820 L151,848 L147,893 L230,901 L241,825 L267,768 L314,731 L362,721 L418,724 L462,742 L498,778 L529,832 L644,816 L643,831 L546,868 L560,903 L964,895 L1034,934 L1111,937 L1092,866 L1099,802 L1117,767 L1158,733 L1199,721 L1239,721 L1291,739 L1331,780 L1354,852 L1392,813 L1422,796 Z" fillRule="evenodd"/>
                <path d="M1033,726 L1029,745 L1002,784 L959,826 L926,846 L876,858 L622,894 L613,891 L615,886 L624,883 L840,853 L925,764 L925,759 L702,758 L705,754 L798,739 L935,724 L1026,721 Z" fillRule="evenodd"/>
                <path d="M842,627 L844,623 L864,625 L1008,649 L1056,661 L1062,664 L1065,671 L1057,675 L1043,678 L873,697 L871,695 L875,686 L881,682 L935,681 L995,676 L1016,672 L1021,669 L1020,666 L1011,661 L970,651 L917,642 L908,642 L904,640 L846,633 Z" fillRule="evenodd"/>
                <path d="M852,693 L851,699 L672,717 L599,721 L527,720 L525,718 L526,715 L541,705 L561,707 L606,706 L610,693 L609,683 L606,677 L600,673 L588,675 L586,672 L625,652 L681,634 L708,628 L750,622 L830,622 L834,628 L846,676 Z" fillRule="evenodd"/>
                <path d="M1361,603 L1361,610 L1362,617 L1365,626 L1369,634 L1375,640 L1379,642 L1386,643 L1423,643 L1430,642 L1434,640 L1440,640 L1444,639 L1447,637 L1450,637 L1453,636 L1455,634 L1459,633 L1468,628 L1472,624 L1473,622 L1474,597 L1473,593 L1469,589 L1376,589 L1369,591 L1367,593 L1366,593 L1363,597 Z" fillRule="evenodd"/>
              </g>
            </svg>

            {/* Gold glow beneath the car */}
            <div className="tjm-car-glow" aria-hidden="true" />
          </div>
        </div>

        {/* ── Row 3: KM distance labels — absolutely positioned to match large ticks ── */}
        <div className="tjm-km-labels" aria-hidden="true">
          {Array.from({ length: totalDays }, (_, i) => {
            const leftPct = totalDays > 1 ? (i / (totalDays - 1)) * 100 : 50;
            return (
              <div key={i} className="tjm-km-label" style={{ left: `${leftPct}%` }}>
                {Math.round(i * kmStep)} KM
              </div>
            );
          })}
        </div>

        {/* ── Status badge ── */}
        <p className="tjm-badge" aria-live="polite">
          {progress < 0.01
            ? 'Scroll to begin your journey'
            : progress >= 0.98
              ? '🎉 Journey Complete!'
              : <>
                  <strong>Day {activeDayIndex + 1}</strong>
                  {' '}of{' '}
                  <strong>{totalDays}</strong>
                  {' — '}
                  <span className="tjm-badge-km">{currentKm} km covered</span>
                </>
          }
        </p>
      </div>
    </div>
  );
};

export default TripJourneyMeter;
