const products = [
  {
    name: 'Stax SR-009S  Over Ear Silver Pro Headphone',
    image: '/images/headphones/stax_sr_009s_silver.jpg',
    description:
      "Multilayer fixed electrode MLER (Multi-Layer-Elect-Rords) established with SR-009 has evolved to MLER 2. The finish and etching process that smoothes the edge of the electrode opening reduces air resistance and further improves sound permeability. Also, the electrodes themselves are gold plated with high specific gravity to minimize the resonance of the ultra-thin electrode.",
    brand: 'Stax',
    category: 'Pro Headphone',
    price: 5799,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Fiio EM5 Black Earbuds',
    image: '/images/headphones/fiio_em5_black.jpg',
    description:
      "The FiiO EM5 is a flute-designed earbud using a beryllium-coated 14.2mm dynamic driver with a twist-lock swappable jack system. ",
    brand: 'Fiio',
    category: 'Earbuds',
    price: 329,
    countInStock: 17,
    rating: 3.5,
    numReviews: 33,
  },
  {
    name: 'Sony WH-1000XM4 Headphones',
    image: '/images/headphones/sony_wh1000xm4.jpg',
    description: 
      'No matter where you go, the black Sony WH-1000XM4 Wireless Noise-Canceling Over-Ear Headphones deliver pristine sound quality while automatically adjusting ambient sound according to your activity and registered locations, leaving your hands and mind free from the hassle of changing settings just to hear what you want to hear',
    brand: 'Sony',
    category: 'Headphones',
    price: 278.0,
    countInStock: 20,
    rating: 4.0,
    numReviews: 12,
  },
  {
    name: 'Audeze Euclid Black and Gold Earphones',
    image: '/images/headphones/Audeze_Euclid.jpg',
    description:
      "Audeze Euclid Closed-Back Planar Magnetic In-Ear - Audeze 18mm planar magnet drive, Highest dynamic range of all in-ears in this category, MMCX Connectros for quick and easy adjustments, Light, precision-milled aluminum housing with ergonomic design, including SpinFit and Comply EarTips in different sizes, 3.5 mm jack, 4.4 mm symmetrical, 6.3 mm jack, MMCX, transmission range 10 - 50,000 Hz, max.SPL 120 dB, impedance 12 ohms, weight without cable 15g",
    brand: 'Audeze',
    category: 'Earphones',
    price: 1325,
    countInStock: 30,
    rating: 4.1,
    numReviews: 18,
  },
  {
    name: 'Audeze LCD-4z Black Pro Headphone',
    image: '/images/headphones/audeze_lcd_4z.jpg',
    description:
      "Multilayer fixed electrode MLER (Multi-Layer-Elect-Rords) established with SR-009 has evolved to MLER 2. The finish and etching process that smoothes the edge of the electrode opening reduces air resistance and further improves sound permeability. Also, the electrodes themselves are gold plated with high specific gravity to minimize the resonance of the ultra-thin electrode.",
    brand: 'Audeze',
    category: 'Pro Headphone',
    price: 4400,
    countInStock: 3,
    rating: 5,
    numReviews: 1,
  },
  {
    name: 'Audio Technica ATH-CKR10 Black Earphones',
    image: '/images/headphones/audio_technica_ath_ckr10.jpg',
    description:
      "Equipped with the world’s first dual phase push-pull driver system, the ATH-CKR10 in-ear earphones deliver high-resolution audio that’s true to the original sound. The unique push-pull system incorporates two facing 13 mm drivers that generate phase-aligned audio signals that are mixed to compensate for each driver’s inefficiencies.",
    brand: 'Audio Technica',
    category: 'Earphones',
    price: 329,
    countInStock: 12,
    rating: 3.9,
    numReviews: 6,
  },  
  {
    name: 'KZ zs10 pro Silver Gold Earbuds',
    image: '/images/headphones/kz_zs10_pro_silver_gold.jpg',
    description:
      "KZ ZS10 ProSilver Gold In Ear Monitor Earbud Headphones HiFi KZ Headphones with 4BA and 1DD Drivers KZ Upgrade ZS10 Pro with Removable 075mm 2Pin 6N OFC Cable (With Microphone Gold) ",
    brand: 'KZ',
    category: 'Earbuds',
    price: 53,
    countInStock: 80,
    rating: 2.8,
    numReviews: 72,
  },
  {
    name: 'Bose QuietComfort 35 Series II Headphones',
    image: '/images/headphones/bose_qc35s2.jpg',
    description:
      'Styled in a sleek black color, the Bose QuietComfort 35 Series II are wireless noise-canceling headphones. These headphones differ from the original QuietComfort 35 headphones with the addition of a button on the left earcup.',
    brand: 'Bose',
    category: 'Headphones',
    price: 269.0,
    countInStock: 200,
    rating: 4.5,
    numReviews: 32,
  },
  {
    name: 'Audio-Technica ANC700BT Headphones',
    image: '/images/headphones/audio_technica_consumer_ath_anc700btbk.jpg',
    description:
      'Enjoy your audio in peace with the ATH-ANC700BT QuietPoint Active Noise-Cancelling Headphones from Audio-Technica. Active noise cancellation is designed to greatly block out distracting ambient noise, giving you the ability to better enjoy your audio regardless of where you might be.',
    brand: 'Audio-Technica',
    category: 'Headphones',
    price: 199.0,
    countInStock: 56,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: 'Beats by Dr. Dre Studio3 Headphones',
    image: '/images/headphones/beats_by_dr_dre.jpg',
    description:
      'Put the world on hold with a pair of Beats by Dr. Dre Studio3 Wireless Bluetooth Headphones in forest green. These over-ear headphones feature Pure Adaptive Noise Canceling for active noise blocking with real-time audio calibration based on fit.',
    brand: 'Beats by Dr. Dre',
    category: 'Headphones',
    price: 349.95,
    countInStock: 20,
    rating: 4.0,
    numReviews: 12,
  },
  {
    name: 'JBL LIVE 650BTNC Headphones',
    image: '/images/headphones/jbl_jbllive650.jpg',
    description:
      'With the white LIVE 650BTNC Wireless Over-Ear Noise-Canceling Headphones from JBL, you have full control over your audio experience. Utilizing the built-in earcup controls, you can switch on active noise cancelling for isolated enjoyment of your favorite music.',
    brand: 'JBL',
    category: 'Headphones',
    price: 129.95,
    countInStock: 6,
    rating: 0.0,
    numReviews: 0,
  },
  {
    name: 'Sennheiser HD 450BT Headphones',
    image: '/images/headphones/sennheiser_508386_hd.jpg',
    description:
      'Enjoy your audio in peace, even outside, with the HD 450BT Noise-Canceling Wireless Over-Ear Headphones from Sennheiser. Thanks to active noise cancellation technology, ambient sounds are filtered out, leaving you alone with your favorite songs, podcasts, and more.',
    brand: 'Sennheiser',
    category: 'Headphones',
    price: 149.95,
    countInStock: 40,
    rating: 4.1,
    numReviews: 56,
  },
  {
    name: 'Marshall Monitor II Headphones',
    image: '/images/headphones/marshall_1005228_monitor_ii.jpg',
    description:
      "Focus on what matters most with the Monitor II Noise Cancelling Wireless Over-Ear Headphones from Marshall. These headphones are engineered with active noise cancellation technology, which cancels out ambient noise and sounds so you're left alone with your favorite audio.",
    brand: 'Marshall',
    category: 'Headphones',
    price: 319.99,
    countInStock: 50,
    rating: 4.2,
    numReviews: 60,
  },     
  {
    name: '64Audio In Ear Tia Fourté Orange Earphones',
    image: '/images/headphones/64audio_tia_fourt_orange.jpg',
    description:
      "Frequency-shaping sound chambers in combination with an internal passive radiator create intense basses, smooth mids and a broad sound stage. Innovative Apex technology reduces the pressure on the eardrum through pneumatic interactive ventilation",
    brand: '64 Audio',
    category: 'Earphones',
    price: 3662,
    countInStock: 50,
    rating: 4.8,
    numReviews: 12,
  },  
  {
    name: 'Sennheiser IE 300 InEar Audiophile Earphones',
    image: '/images/headphones/sennheiser_ie_300_black.jpg',
    description:
      "Created for audio enthusiasts, the new IE 300 in ear headphones from Sennheiser let you enjoy a superior, high fidelity listening experience. Crafted with meticulous attention to detail and powered by a refined version of Sennheiser’s acclaimed 7mm Extra Wide Band (XWB) transducer, they combine exceptional sound with premium, professional audio-inspired design",
    brand: 'Sennheiser',
    category: 'Earphones',
    price: 292,
    countInStock: 70,
    rating: 3.7,
    numReviews: 120,
  },
  {
    name: 'Fianal Audio F7200 Silver Earphones',
    image: '/images/headphones/final_audio_f7200.jpg',
    description:
      "Ultra small lightweight design for the perfect fit and high quality sound insulation. Supersealed fit close to the cardrum for high resolution, wide soundstage and rich bass. Everything you want in your earphones - Realized in a higher dimension Housing: Stainless Steel Drive unit: Balanced armature driver S.P.L.: 106dB Impendance: 42 Ω Lenght of cable: 1,2m Weight: 23g",
    brand: 'Fianal Audio',
    category: 'Earphones',
    price: 499,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Audeze iSINE 20 Black Earphones',
    image: '/images/headphones/audeze_isine_20.jpg',
    description:
      "The iSINE 20 is one step up from the iSINE 10 featuring an even longer Uniforce voice-coil that covers the ultra-thin diaphragm to a greater extent, enabling better control and responsiveness for better bass, clarity, and improved imaging. Zero distortion sound means you’ll feel closer to your music. ",
    brand: 'Audeze',
    category: 'Earphones',
    price: 650,
    countInStock: 9,
    rating: 4.6,
    numReviews: 1,
  },  
  {
    name: 'Final Audio Piano Forte II Brawn Earbuds',
    image: '/images/headphones/final_audio_piano_forte_ii_brown.jpg',
    description:
      "Piano Forte X has achieved the true spatial expression of a live concert hall, something that cannot be achieved with conventional earphones. While Piano Fort Ⅱ is our first lower priced model, it utilizes the same sound-making design concept as its higher priced equivalent. Its unique vent opening fits firmly in your ears without cumbersome earpads, thus opening up a clear, vast sound stage.",
    brand: 'Final Audio',
    category: 'Earbuds',
    price: 36,
    countInStock: 80,
    rating: 3.9,
    numReviews: 48,
  },
  {
    name: 'Sony MDR-AS40EX Black Earbuds',
    image: '/images/headphones/sony_mdr_as40ex.jpg',
    description:
      "Enjoy your music during your workout with the new SONY MDR-AS40EX. They have an ergonomic design for a perfect fit in your ears, durable construction and waterproof protection",
    brand: 'Sony',
    category: 'Earbuds',
    price: 29,
    countInStock: 50,
    rating: 4.4,
    numReviews: 56,
  },
  {
    name: 'Philips SHE1350/00 Black Earbuds',
    image: '/images/headphones/philips_she1350_black.jpg',
    description:
      "Enjoy your music during your workout with the new Philips SHE1350/00. They have an ergonomic design for a perfect fit in your ears, durable construction and waterproof protection",
    brand: 'Philips',
    category: 'Earbuds',
    price: 27,
    countInStock: 39,
    rating: 3.9,
    numReviews: 27,
  },
  {
    name: 'KZ zs10 pro Silver Black Earbuds',
    image: '/images/headphones/fiio_em5_black.jpg',
    description:
      "KZ ZS10 Pro In Ear Monitor Earbud Headphones HiFi KZ Headphones with 4BA and 1DD Drivers KZ Upgrade ZS10 Pro with Removable 075mm 2Pin 6N OFC Cable (NO Microphone Black) ",
    brand: 'KZ',
    category: 'Earbuds',
    price: 71,
    countInStock: 29,
    rating: 2.3,
    numReviews: 68,
  },
  {
    name: 'Final Audio Sonorous X Gold Pro Headphone',
    image: '/images/headphones/final_audio_sonorous_x.jpg',
    description:
      "The 50 mm diameter driver unit with titanium diaphragm is integrated with the front plate and has been machined from pure aluminum. The principal parts are composed of machined aluminum and stainless steel. It was necessary to create the housing from a rigid metal so as to achieve the sense of realism. This is a resolute prestige model, the zenith of the SONOROUS series.",
    brand: 'Final Audio',
    category: 'Pro Headphone',
    price: 4396,
    countInStock: 2,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Focal Utopia Black Pro Headphone',
    image: '/images/headphones/focal_utopia.jpg',
    description:
      "Utopia have already become the world reference high-fidelity headphones manufactured in France by Focal. They are the result of 35 years of innovation, development and manufacturing of high-end speaker drivers and loudspeakers. Equipped with exclusive technology, they offer striking realism, neutrality, dynamics and clarity, for sound with unrivalled purity.",
    brand: 'Focal',
    category: 'Pro Headphone',
    price: 3950,
    countInStock: 4,
    rating: 3,
    numReviews: 2,
  },
  {
    name: 'Veritas Ultrasone Edition 15 Silver-Brawn Pro Headphone',
    image: '/images/headphones/ultrasone_edition_15_veritas.jpg',
    description:
      "Circumaural Dynamic, Closed-back, design GTC driver technology S-Logic EX and ULE technology, MU-metal shielding, 40 mm sound transducer titanium coated with NdFeB magnet, Impedance: 40 ohms, Frequency range: 5 - 48,000 Hz, Sound pressure level: 96 dB, Capsules of American cherry wood, Padding in merino leather, Magnetically fixed leather ear cushions, Weight without cable: 314 g, Incl. 2 detachable premium cables, 4-core with LEMO connectors and 3.5 mm jack plug with a length of 3 m and 1.2 m as well as 6.3 mm adapter and genuine leather case",
    brand: 'Veritas',
    category: 'Pro Headphone',
    price: 3060,
    countInStock: 7,
    rating: 5,
    numReviews: 1,
  },
  {
    name: 'Meze Audio Empyrean Black Copper Pro Headphone',
    image: '/images/headphones/meze_audio_empyrean_black_copper.jpg',
    description:
      "FRAME Fiberglass infused ABS RINARO ISOPLANAR® DIAPHRAGM Weighing only 0.16 g while having 4650 mm² of active area. HYBRID MAGNET ARRAY Symmetrically placed on each side of the diaphragm, our neodymium magnets are specifically arranged into a Hybrid Array to create efficient Isodynamic magnetic field required for a uniform activation across the whole diaphragm surface.",
    brand: 'Meze',
    category: 'ProHeadphone',
    price: 2900,
    countInStock: 2,
    rating: 4.5,
    numReviews: 4,
  },

];

export default products;
