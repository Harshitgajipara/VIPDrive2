// ============================================================
// SOT – Special Offers on Trips — Data Layer
// ============================================================

export const destinations = [
  {
    id: 'himachal-pradesh',
    label: 'HP – Himachal Pradesh',
    description: 'Snow-capped peaks, pine forests, river valleys and Himalayan adventures await you.',
    image: 'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'gujarat',
    label: 'Gujarat',
    description: 'The land of the Rann, ancient temples, vibrant culture and the world\'s largest salt desert.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'goa',
    label: 'Goa',
    description: 'Sun-soaked beaches, colonial charm, seafood feasts and the best sunsets in India.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mp',
    label: 'MP – Madhya Pradesh',
    description: 'Royal heritage, wildlife safaris, ancient temples and the heart of incredible India.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
  },
];

// ============================================================
// Trip Listings per Destination
// ============================================================

export const trips = {
  'himachal-pradesh': [
    {
      id: 'kasol-manali',
      title: 'Kasol & Manali',
      duration: '10 Days',
      teaser: 'Trek through Parvati Valley, sip kahwa by the Beas River, witness snowfall in Solang and lose yourself in the Himalayan magic.',
      thumbnail: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'shimla',
      title: 'Shimla',
      duration: '5 Days',
      teaser: 'Stroll on the colonial Mall Road, ride the UNESCO toy train and feel the Queen of Hills in every breath.',
      thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'dharamshala',
      title: 'Dharamshala & McLeod Ganj',
      duration: '4 Days',
      teaser: 'Meditate with monks, trek to Triund and discover the little Lhasa nestled in the Dhauladhar range.',
      thumbnail: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'spiti',
      title: 'Spiti Valley',
      duration: '7 Days',
      teaser: 'Drive through the world\'s highest motorable roads, visit ancient monasteries and sleep under a billion stars.',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    },
  ],
  gujarat: [
    {
      id: 'rann-kutch',
      title: 'Rann of Kutch',
      duration: '4 Days',
      teaser: 'Walk on the white salt desert under a full moon at the Rann Utsav and experience pure magic.',
      thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'somnath-dwarka',
      title: 'Somnath & Dwarka',
      duration: '5 Days',
      teaser: 'Spiritual sojourn across two of the twelve Jyotirlinga temples along the Arabian Sea coast.',
      thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'gir-forest',
      title: 'Gir National Park',
      duration: '3 Days',
      teaser: 'Track the Asiatic lion in its last natural habitat — a wildlife experience found nowhere else on Earth.',
      thumbnail: 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?auto=format&fit=crop&w=700&q=80',
    },
  ],
  goa: [
    {
      id: 'north-goa',
      title: 'North Goa Explorer',
      duration: '4 Days',
      teaser: 'Party beaches, Portuguese forts, spice plantations and the best susegad lifestyle India offers.',
      thumbnail: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'south-goa',
      title: 'South Goa Luxury',
      duration: '5 Days',
      teaser: 'Pristine silent beaches, Palolem\'s bohemian charm and five-star luxury on the Konkan coast.',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'goa-complete',
      title: 'Complete Goa Circuit',
      duration: '7 Days',
      teaser: 'From Arambol in the north to Palolem in the south — the complete Goan experience.',
      thumbnail: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=700&q=80',
    },
  ],
  mp: [
    {
      id: 'khajuraho',
      title: 'Khajuraho Temples',
      duration: '3 Days',
      teaser: 'UNESCO World Heritage temples — breathtaking medieval sculptures and ancient wisdom carved in stone.',
      thumbnail: 'https://images.unsplash.com/photo-1566159374492-5b0fa32e6c97?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'bandhavgarh',
      title: 'Bandhavgarh Tiger Reserve',
      duration: '4 Days',
      teaser: 'Home to India\'s densest tiger population — your best chance of a royal Bengal tiger encounter.',
      thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'orchha-gwalior',
      title: 'Orchha & Gwalior',
      duration: '5 Days',
      teaser: 'Step into Bundelkhand royalty — cenotaphs, riverside temples and the majestic Gwalior Fort.',
      thumbnail: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80',
    },
  ],
};

// ============================================================
// Destination Page Headers
// ============================================================

export const destinationMeta = {
  'himachal-pradesh': {
    label: 'HP – Himachal Pradesh',
    subtitle: 'Explore mountains, valleys, rivers, and unforgettable Himalayan adventures.',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
  },
  gujarat: {
    label: 'Gujarat',
    subtitle: 'Discover the Rann, royal heritage, temple towns and the vibrant spirit of Gujarat.',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80',
  },
  goa: {
    label: 'Goa',
    subtitle: 'Golden beaches, azure waters, Portuguese architecture and blissful Goan living.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80',
  },
  mp: {
    label: 'MP – Madhya Pradesh',
    subtitle: 'The heart of India — wildlife, temples, forts and timeless royal grandeur.',
    heroImage: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1400&q=80',
  },
};

// ============================================================
// Full Trip Details — Kasol & Manali (10 Days)
// ============================================================

export const tripDetails = {
  'kasol-manali': {
    title: 'Kasol & Manali',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85',
    intro: {
      headline: 'A Tale of Two Valleys',
      text: `Nestled deep in the folds of the Parvati Valley and the Kullu highlands, Kasol and Manali offer two very different yet equally enchanting faces of Himachal Pradesh. Kasol — the "Amsterdam of India" — is a tiny riverside village where Israeli cafes, pine forests and the cold rush of the Parvati River create a dreamlike atmosphere. The trails here lead to sacred Kheerganga and the mystical Pin Parvati Pass, drawing trekkers and soul-seekers from across the world.

Manali, perched at 2,050 metres, is where the mountains truly announce themselves. From the snow-dusted peaks of Rohtang to the adrenaline-charged circuits of Solang Valley, from the ancient wooden temples of Old Manali to the thundering Beas River — every moment here feels cinematic. Together, these two destinations form one of India's most iconic travel circuits, a perfect blend of spiritual stillness and mountain adventure.

This journey with VIPDrive takes you through the very soul of the Himalayas — in absolute comfort, style and luxury. Choose the Basic 10-day circuit or the immersive 15-day Discovery package that adds Spiti Valley, Chandratal Lake and the ancient Dhankar Monastery to your Himalayan story.`,
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDH3XpkF98vsSs-wxdMDJVr9p-fTrExemAaK_4P_RH8_TBzJGk4T7pw81x1ewEKxgG5-9k9aL5tPcGwhkCMNYmA1fQDTQERYW3ZXj0b7E14EIQ8A67Y9hI7F_uIJ-_uIOeRj19jGiT5WB_PCUVlcwNVpnZ6jSGnyVT1jNkt-ZXDcethtCfAOv4xwiEU0FdN_9lH7IKwL9D0ziX0iWXACZ1TzWqJ9-kRHE3eunggm5HaBggauVidLrXf8aIshP1G-LGyLFmKC_Vm4K4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBeVSjZuTOIpaMx_WA2ADxvbMW7EK1_xL_r6caGb4qOqeO_rUjOrunr062qpPR5-TzthkWhDiiEKujS6zRKUxvm1p3UpVYtzcxd4jQV45fko-JlVWvqozmlHjTUrXstDIAUw70nrOnY6ObPZwjv45r4LLBx98djSKWKRYdUFgsrPqmuHkYpi2MeMBMBfOJ3rpNPDsXXQRpRJUXXlzOQOp0jnEZM3FvdpINSR1AjL6zZEaE1lBpzy7I7MHwrUT3hIWQHncwPobC-kRg',
        'https://images.pexels.com/photos/2407751/pexels-photo-2407751.jpeg',
      ],
    },

    // ── PACKAGE DEFINITIONS ──────────────────────────────────
    packages: {

      // ── Basic Package — 10 Days ────────────────────────────
      basic: {
        label: 'Basic',
        duration: '10 Days',
        days: [
          {
            day: 1,
            title: 'Departure – Delhi to Kasol',
            mainImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80',
            description: `Your Himalayan adventure begins tonight. Board your overnight Volvo from Delhi's ISBT Kashmiri Gate as the city slowly gives way to the foothills. Our VIPDrive representative will be at the departure point to ensure a smooth start. Sleep under the stars while the bus winds through the mountain passes, and wake up to your first glimpse of pine-covered slopes. This is the journey that transforms ordinary travellers into mountain souls.`,
            gallery: [
              'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 2,
            title: 'Arrival in Kasol – River & Rest',
            mainImage: 'https://images.unsplash.com/photo-1543162862-3afe3f394b26?auto=format&fit=crop&w=900&q=80',
            description: `Arrive in Bhuntar by morning and transfer to Kasol in a premium VIPDrive vehicle winding through the Parvati Valley. Check into your cosy riverside camp or boutique guesthouse, then spend the afternoon exploring Kasol village — the tiny cafes serving Israeli breakfast, the Parvati River rushing ice-cold over smooth boulders, the pine trees that tower overhead. In the evening, enjoy a bonfire, try local chai and simply breathe in the mountain air. Tonight belongs to arriving.`,
            gallery: [
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 3,
            title: 'Kheerganga Trek – Sacred Hot Springs',
            mainImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
            description: `Today is the crown jewel of the Kasol experience — the trek to Kheerganga. A 12km trail through dense forests, meadows dotted with wildflowers, wooden footbridges over roaring streams and open ridges with 360-degree mountain views leads you to the sacred hot springs at 2,950 metres. Soak your tired muscles in the natural geothermal pool with the Himalayas towering around you.`,
            gallery: [
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 4,
            title: 'Trek Down – Manikaran Gurudwara',
            mainImage: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=900&q=80',
            description: `Descend from Kheerganga in the early morning light, when the valley is still wrapped in mist and birdsong. Drive to Manikaran — one of Himachal's holiest sites, where a Sikh Gurudwara and Hindu temple sit beside geothermal hot springs. The langar here serves the most delicious daal and rice you will ever taste, cooked in the boiling natural spring water.`,
            gallery: [
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 5,
            title: 'Kasol to Manali – The Mountain Drive',
            mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
            description: `Transfer day — but what a transfer! Your VIPDrive vehicle takes you from the Parvati Valley back to Bhuntar, then north along the banks of the Beas River to Manali. The road cuts through apple orchards, mountain villages, waterfalls and gorges. Arrive in Manali by evening and step onto your resort balcony to meet the Himalayas up close.`,
            gallery: [
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 6,
            title: 'Old Manali & Hadimba Temple',
            mainImage: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c2d2?auto=format&fit=crop&w=900&q=80',
            description: `Start your Manali exploration gently. Walk through Old Manali's narrow lanes, traditional Kullu houses, and tiny cafes playing jazz. Then visit the iconic Hadimba Devi Temple — a pagoda-style wooden temple set deep in a cedar forest. In the evening, explore the Mall Road for shopping and street food.`,
            gallery: [
              'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 7,
            title: 'Solang Valley – Adventure Day',
            mainImage: 'https://images.unsplash.com/photo-1611324749876-8f4044e7edd7?auto=format&fit=crop&w=900&q=80',
            description: `Drive to Solang Valley, Manali's adventure playground. Ski, snowboard, paraglide or zorb depending on the season. The scenery is jaw-dropping — a wide glacial valley ringed by snow-covered peaks. Return to Manali tired and glowing with happiness.`,
            gallery: [
              'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 8,
            title: 'Rohtang Pass – Top of the World',
            mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
            description: `At 3,978 metres, the Rohtang Pass is the gateway to Lahaul & Spiti and one of the most dramatic drives in the entire Himalayas. Your expert VIPDrive driver navigates the steep switchbacks as the landscape transforms from green valleys to pure white snow. Stand at the top and see both worlds.`,
            gallery: [
              'https://images.unsplash.com/photo-1600091166971-7f9faad6c2d2?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 9,
            title: 'Beas Kund Trek & Leisure Day',
            mainImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
            description: `The Beas Kund Trek (14km return) takes you to the glacial source of the Beas River — a stunning alpine lake at 3,690m where the mountains are raw and the silence is absolute. Or spend the day at the Naggar Castle and local artists' studios. Evening calls for a celebratory mountain dinner.`,
            gallery: [
              'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 10,
            title: 'Departure – Carrying the Mountains Home',
            mainImage: 'https://images.unsplash.com/photo-1543162862-3afe3f394b26?auto=format&fit=crop&w=900&q=80',
            description: `Your last Himalayan morning. Watch the golden alpenglow paint the peaks pink and orange. Buy some local apple jam, Kullu shawls or Himachali honey. Your VIPDrive vehicle drives you back to Bhuntar Airport or Chandigarh. The mountains will call you back. They always do.`,
            gallery: [
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?auto=format&fit=crop&w=400&q=75',
            ],
          },
        ],
      },

      // ── Discovery Package — 15 Days ────────────────────────
      discovery: {
        label: 'Discovery',
        duration: '15 Days',
        days: [
          {
            day: 1,
            title: 'Departure – Delhi to Kasol (Night Bus)',
            mainImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80',
            description: `The Discovery journey starts under the Delhi night sky. Board your luxury Volvo at ISBT Kashmiri Gate, equipped with reclining seats and a VIPDrive care kit — earphones, eye mask, and a welcome letter from your guide. The city recedes as the highway climbs into the Shivalik foothills. First light will find you in the mountains.`,
            gallery: [
              'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 2,
            title: 'Kasol Arrival – Parvati Valley Immersion',
            mainImage: 'https://images.unsplash.com/photo-1543162862-3afe3f394b26?auto=format&fit=crop&w=900&q=80',
            description: `Arrive at Bhuntar and transfer to Kasol through the emerald Parvati Valley. Check into your riverside boutique camp — listen to the river, smell the pine resin, feel the cool altitude air. Afternoon is free for village wandering, Israeli falafel, and your first bonfire. Your guide briefs you on the 15-day adventure ahead.`,
            gallery: [
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 3,
            title: 'Kheerganga Trek – Sacred Springs',
            mainImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
            description: `The legendary 12km Kheerganga trek begins at Barshaini. Dense cedar forests, wildflower meadows, and wooden bridges over the Parvati stream guide you upward. At 2,950m, the geothermal hot springs await — with the Himalayas as your backdrop. Camp overnight under a star-studded sky that city dwellers can only dream of.`,
            gallery: [
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 4,
            title: 'Kheerganga to Manikaran – Spiritual Heart',
            mainImage: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=900&q=80',
            description: `Descend through the mist-wrapped valley at dawn. Visit Manikaran Sahib Gurudwara where langar is cooked in geothermal springs — the most symbolic meal of your journey. Light incense at the Shiva temple by the river. Return to Kasol for a quiet evening of reflection and journaling.`,
            gallery: [
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 5,
            title: 'Kasol to Manali – Scenic Highway',
            mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
            description: `The Discovery package travels the longer NH3 route to Manali — through the Kullu Valley's apple orchards, roadside waterfalls, and traditional Himachali villages. Stop at the Great Himalayan National Park viewpoint for a landscape that redefines "beautiful." Arrive Manali by evening, settle into your mountain retreat.`,
            gallery: [
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 6,
            title: 'Old Manali, Hadimba & Manu Temple',
            mainImage: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c2d2?auto=format&fit=crop&w=900&q=80',
            description: `A morning of culture and architecture. Old Manali's narrow alleys hide brilliant cafes and artisan studios. Hadimba Devi's cedar-forest pagoda-temple is one of Himachal's icons. The Discovery itinerary also visits the ancient Manu Temple — said to mark the spot where Manu, the progenitor of humanity, meditated after the great flood. Sacred and serene.`,
            gallery: [
              'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 7,
            title: 'Solang Valley – Full Adventure Day',
            mainImage: 'https://images.unsplash.com/photo-1611324749876-8f4044e7edd7?auto=format&fit=crop&w=900&q=80',
            description: `Solang Valley is Manali's adventure capital. The Discovery package books private adventure slots — paragliding, zorbing, and snowmobile rides. A packed lunch at a mountain dhaba and an evening bonfire at the valley's edge round out a day of pure adrenaline. No itinerary. Just adventure.`,
            gallery: [
              'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 8,
            title: 'Rohtang Pass – Gateway to the Beyond',
            mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
            description: `Rohtang at 3,978m is the divide between the green Kullu Valley and the stark Trans-Himalayan world. Your expert VIPDrive driver navigates the switchbacks with quiet mastery. Stand at the top — clouds below you, blue sky above, snow in every direction. This is the Discovery journey's turning point: from here, the road leads into Spiti.`,
            gallery: [
              'https://images.unsplash.com/photo-1600091166971-7f9faad6c2d2?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 9,
            title: 'Manali to Kaza – The Spiti Entry',
            mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
            description: `This is the unique Discovery exclusive — crossing into Spiti Valley. The road from Rohtang into Lahaul and then Spiti is one of the world's most extraordinary drives. Barren moonscapes, turquoise Spiti River, crumbling ancient villages. Arrive in Kaza — Spiti's de facto capital — by evening. The altitude hits differently here. Slower pace, deeper silence.`,
            gallery: [
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1583147610148-a42f98e66b6a?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 10,
            title: 'Key Monastery & Pin Valley',
            mainImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80',
            description: `Visit Key Gompa — the thousand-year-old monastery fortress perched on a hilltop above Kaza, with its stunning thangka paintings and resident monks who still practice ancient Tibetan traditions. Then drive to Pin Valley — the only place on Earth where snow leopards and Siberian ibex share territory with flowering meadows. Stop at Pin Valley National Park viewpoint.`,
            gallery: [
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 11,
            title: 'Dhankar Monastery & Tabo Cave Temples',
            mainImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
            description: `Dhankar Gompa — precariously perched atop a 1000m cliff — is possibly the most dramatically positioned monastery on the planet. Its crumbling walls hold 1,000-year-old murals. Then visit Tabo Monastery's cave temples, where 10th-century murals survived untouched for a millennium. Art historians call it the Ajanta of the Himalayas. You will understand why.`,
            gallery: [
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1566159374492-5b0fa32e6c97?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 12,
            title: 'Chandratal Lake – The Moon Lake',
            mainImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
            description: `The highlight of the entire Discovery package — Chandratal Lake at 4,300m. The crescent-shaped glacial lake shimmers in impossibly vivid blues and greens against the stark brown Himalayan landscape. No roads, no villages — just raw wilderness and silence so complete it has its own sound. Camp beside the lake as the Milky Way appears in its full arc overhead.`,
            gallery: [
              'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 13,
            title: 'Kaza to Manali – Return Through the Passes',
            mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
            description: `The return drive from Spiti to Manali via Kunzum Pass (4,590m) is one of the world's great road journeys. Kunzum La's prayer flags and the panoramic view of the Lahaul Valley reward every kilometre of the rough road. Descend back into the green warmth of Kullu and arrive in Manali to a warm shower and a well-deserved feast.`,
            gallery: [
              'https://images.unsplash.com/photo-1583147610148-a42f98e66b6a?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 14,
            title: 'Beas Kund Trek – Final Summit',
            mainImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
            description: `Your final trek of the Discovery journey — Beas Kund. At 3,690m, this glacial lake is the source of the Beas River, one of the great rivers of the Punjab plains. The trek passes through alpine meadows thick with wildflowers and the sound of rushing snowmelt. Sit by the lake and let the mountains speak one final time.`,
            gallery: [
              'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=75',
            ],
          },
          {
            day: 15,
            title: 'Departure – A New Version of You',
            mainImage: 'https://images.unsplash.com/photo-1543162862-3afe3f394b26?auto=format&fit=crop&w=900&q=80',
            description: `Fifteen days of mountains, monasteries, lakes, forests, treks, and starlit camps have fundamentally changed you. The person who returns is not the person who left. Take your last mountain sunrise slowly. Pack your Kullu shawls, yak-wool socks, and saffron from Kaza. Your VIPDrive vehicle takes you back — carrying a traveller who has, in every sense, discovered.`,
            gallery: [
              'https://images.unsplash.com/photo-1598977990672-43cf1875b42e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=75',
              'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?auto=format&fit=crop&w=400&q=75',
            ],
          },
        ],
      },
    },

    // Keep legacy itinerary for backward compatibility
    itinerary: [],
    duration: '10 Days',
  },

  // ── Shimla (stub) ──────────────────────────────────────────
  shimla: {
    title: 'Shimla',
    duration: '5 Days',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
    intro: {
      text: `Shimla, the Queen of Hills, is where colonial history meets mountain splendour. From the iconic Mall Road to the UNESCO toy train, from Christ Church to Jakhu Temple — every corner whispers stories. This 5-day VIPDrive experience takes you through the best of Himachal's capital in absolute comfort.`,
      images: [
        'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
      ],
    },
    itinerary: [
      { day: 1, title: 'Arrival in Shimla', mainImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80', description: 'Arrive in Shimla and soak in the colonial charm of this beloved hill station.', gallery: ['https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75'] },
      { day: 2, title: 'Mall Road & Christ Church', mainImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80', description: 'Explore the iconic Mall Road, visit Christ Church and taste local street food.', gallery: ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=75'] },
      { day: 3, title: 'Toy Train to Kalka', mainImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80', description: 'Board the UNESCO Heritage Kalka-Shimla toy train for the most scenic rail journey in India.', gallery: ['https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75'] },
      { day: 4, title: 'Jakhu Temple & Kufri', mainImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80', description: 'Trek to Jakhu Temple, visit Kufri for snow activities and enjoy panoramic Himalayan views.', gallery: ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=75'] },
      { day: 5, title: 'Departure', mainImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80', description: 'A final morning stroll before your VIPDrive vehicle takes you back, carrying mountain memories.', gallery: ['https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=75', 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=75'] },
    ],
  },
};
