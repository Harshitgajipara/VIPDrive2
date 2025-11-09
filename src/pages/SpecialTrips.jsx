import React, { useEffect, useRef, useState } from "react";
import "../styles/SpecialTrips.css";

const SpecialTrips = () => {
  const slidesData = [
    {
      name: "Goa",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--1-min-min.jpg",
    },
    {
      name: "Manali",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--2-min-min.jpg",
    },
    {
      name: "Kerala",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--3-min-min.jpg",
    },
    {
      name: "Udaipur",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--4-min-min.jpg",
    },
    {
      name: "Shimla",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city--5-min-min.jpg",
    },
  ];

  const sliderRef = useRef(null);
  const darkRefs = useRef([]);
  const letterRefs = useRef([]);
  const textRefs = useRef([]);
  const curSlide = useRef(1);
  const animating = useRef(false);
  const startX = useRef(0);
  const diff = useRef(0);
  const animSpd = 750;
  const [activeDot, setActiveDot] = useState(1);

  const splitName = (name) => {
    const length = name.length;
    const chunk = Math.max(1, Math.floor(length / 4));
    const re = new RegExp(`.{1,${chunk}}`, "g");
    return name.match(re) || [name];
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const total = slidesData.length;

    darkRefs.current = darkRefs.current.slice(0, total);
    letterRefs.current = letterRefs.current.slice(0, total);
    textRefs.current = textRefs.current.slice(0, total);

    darkRefs.current.forEach((el, i) => {
      if (el) el.style.left = `${-50 * i}%`;
    });

    slider.style.transform = `translate3d(-${
      (curSlide.current - 1) * 100
    }%, 0, 0)`;

    const distOfLetGo = window.innerWidth * 0.2;

    const onPointerDown = (e) => {
      if (animating.current) return;
      startX.current = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      diff.current = 0;
      slider.classList.remove("animation");
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp, { once: true });
      window.addEventListener("pointercancel", onPointerUp, { once: true });
    };

    const onPointerMove = (ev) => {
      const x = ev.clientX ?? (ev.touches && ev.touches[0].clientX) ?? 0;
      diff.current = startX.current - x;

      slider.style.transform = `translate3d(-${
        (curSlide.current - 1) * 100 + diff.current / 30
      }%, 0, 0)`;

      darkRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = `translate3d(${
          (curSlide.current - 1) * 50 + diff.current / 60
        }%, 0, 0)`;
      });

      letterRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = `translate3d(${diff.current / 60}vw, 0, 0)`;
      });

      textRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = `translate3d(${diff.current / 15}px, 0, 0)`;
      });
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);

      if (animating.current) return;
      if (diff.current >= distOfLetGo) {
        goRight();
      } else if (diff.current <= -distOfLetGo) {
        goLeft();
      } else {
        toDefault();
      }
    };

    const slides = slider.querySelectorAll(".slide");
    slides.forEach((s) => s.addEventListener("pointerdown", onPointerDown));

    const onKey = (ev) => {
      if (ev.key === "ArrowRight") goRight();
      if (ev.key === "ArrowLeft") goLeft();
    };
    const onWheel = (ev) => {
      if (animating.current) return;
      if (ev.deltaY > 0) goRight();
      if (ev.deltaY < 0) goLeft();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      slides.forEach((s) =>
        s.removeEventListener("pointerdown", onPointerDown)
      );
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const pagination = (direction) => {
    const slider = sliderRef.current;
    animating.current = true;
    diff.current = 0;
    slider.classList.add("animation");
    slider.style.transform = `translate3d(-${
      (curSlide.current - direction) * 100
    }%, 0, 0)`;

    darkRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = `translate3d(${
        (curSlide.current - direction) * 50
      }%, 0, 0)`;
    });

    letterRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = `translate3d(0, 0, 0)`;
    });

    textRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = `translate3d(0, 0, 0)`;
    });
  };

  const finishAnimation = () => {
    animating.current = false;
  };

  const goRight = () => {
    if (animating.current) return;
    if (curSlide.current >= slidesData.length) return;
    pagination(0);
    setTimeout(finishAnimation, animSpd);
    curSlide.current += 1;
    setActiveDot(curSlide.current);
  };

  const goLeft = () => {
    if (animating.current) return;
    if (curSlide.current <= 1) return;
    pagination(2);
    setTimeout(finishAnimation, animSpd);
    curSlide.current -= 1;
    setActiveDot(curSlide.current);
  };

  const toDefault = () => {
    pagination(1);
    setTimeout(finishAnimation, animSpd);
  };

  const onNavClick = (n) => {
    if (animating.current) return;
    curSlide.current = n;
    setActiveDot(n);
    const slider = sliderRef.current;
    slider.classList.add("animation");
    slider.style.transform = `translate3d(-${
      (curSlide.current - 1) * 100
    }%, 0, 0)`;

    darkRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = `translate3d(${(curSlide.current - 1) * 50}%, 0, 0)`;
    });

    setTimeout(() => {
      animating.current = false;
      slider.classList.remove("animation");
    }, animSpd);
  };

  return (
    <div className="cont">
      <div
        className="slider"
        ref={sliderRef}
        style={{
          transform: `translate3d(-${(curSlide.current - 1) * 100}%, 0, 0)`,
        }}
      >
        {slidesData.map((s, i) => {
          const idx = i + 1;
          const chunks = splitName(s.name);
          const bigLetter = s.name.charAt(0).toUpperCase();

          return (
            <div
              key={s.name + i}
              className={`slide slide--${idx}`}
              data-target={idx}
              style={{ left: `${i * 100}%` }}
            >
              {/* Dark background layer */}
              <div
                className={`slide__darkbg slide--${idx}__darkbg`}
                ref={(el) => (darkRefs.current[i] = el)}
                style={{
                  backgroundImage: `url(${s.image})`,
                }}
              />

              {/* Big alphabetic character */}
              <div
                className={`slide__letter slide--${idx}__letter`}
                ref={(el) => (letterRefs.current[i] = el)}
                style={{
                  backgroundImage: `url(${s.image})`,
                }}
                aria-hidden="true"
              >
                {bigLetter}
              </div>

              {/* City name text */}
              <div
                className={`slide__text-wrapper slide--${idx}__text-wrapper`}
              >
                {chunks.map((chunk, k) => (
                  <div
                    key={k}
                    className={`slide__text slide__text--${k + 1}`}
                    ref={(el) => (textRefs.current[i * 10 + k] = el)}
                  >
                    {chunk}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <ul className="nav">
        {slidesData.map((_, i) => (
          <li
            key={i}
            data-target={i + 1}
            className={`nav__slide nav__slide--${i + 1} ${
              activeDot === i + 1 ? "nav-active" : ""
            }`}
            onClick={() => onNavClick(i + 1)}
          />
        ))}
      </ul>

      {/* Arrows */}
      <div
        data-target="right"
        className="side-nav side-nav--right"
        onClick={goRight}
      />
      <div
        data-target="left"
        className="side-nav side-nav--left"
        onClick={goLeft}
      />
    </div>
  );
};

export default SpecialTrips;
