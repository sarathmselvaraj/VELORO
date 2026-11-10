/* VELORO — Premium Men's Formalwear Retail Storefront Content.
   Replace demonstration inventory and configurations with verified data before launch. */

window.VELORO_CONFIG = {
  storeName: 'VELORO — Flagship Atelier & Salon',
  country: 'India',
  city: 'Coimbatore',
  state: 'Tamil Nadu',
  currency: 'INR',
  address: '142/1, Race Course Road, Near Thomas Park, Gopalapuram, Coimbatore, Tamil Nadu 641018, India',
  phone: '+91 422 222 8900',
  email: 'concierge@veloro.in',
  whatsapp: '919842218900',
  openingHours: 'Mon – Sat: 10:30 AM – 8:30 PM | Sun: 11:00 AM – 7:00 PM',
  mapCoordinates: {
    lat: 11.0018,
    lng: 76.9744
  }
};

window.VELORO_LEADERSHIP = [
  {
    name: 'Vikramaditya Singhania',
    role: 'Founder & Chief Executive Officer',
    badge: 'LEADERSHIP',
    image: 'leadership-founder.webp',
    bio: "Spearheads VELORO's design ethos, brand philosophy and relentless commitment to sartorial perfection. With fifteen years across European and Indian bespoke menswear, Vikramaditya shapes every silhouette to balance timeless formality with modern comfort.",
    focus: 'Brand Vision · Craftsmanship Standards · Fabric Curation',
    quote: 'True luxury in menswear does not shout; it is whispered in the perfection of the shoulder and the drape of fine wool.'
  },
  {
    name: 'Kabir Mehra',
    role: 'Head of Operations & Retail Experience',
    badge: 'EXPERIENCE',
    image: 'leadership-operations.webp',
    bio: 'Oversees the VELORO showroom experience, concierge operations and personal fitting appointments. Kabir ensures every client receives attentive, unhurried guidance from their initial consultation to final hand-tailored adjustments.',
    focus: 'Showroom Management · Private Fittings · Client Concierge',
    quote: 'A garment only truly comes alive when the wearer feels completely understood and effortlessly comfortable.'
  },
  {
    name: 'Aarav Varma',
    role: 'Head of Styling & Creative Direction',
    badge: 'CREATIVE',
    image: 'leadership-styling.webp',
    bio: 'Leads seasonal collection curation, textile innovation with heritage mills, and bespoke wardrobe styling for celebrations, boardrooms and red carpet occasions. Aarav brings an editorial sensibility to classic formalwear.',
    focus: 'Creative Direction · Occasion Styling · Textile Research',
    quote: 'Modern formalwear is about intentional restraint: choosing one impeccable hero piece and letting every detail support it.'
  }
];

window.VELORO_BRANDS = [
  {
    name: 'Arden Row',
    mark: 'ARDEN <span>ROW</span>',
    tag: 'Modern structure. Timeless ease.',
    detail: 'A confident interpretation of the professional wardrobe — tailored separates, versatile suiting and crisp shirts built to work together effortlessly in the executive boardroom.',
    type: 'MODERN PROFESSIONAL',
    image: 'brand-arden-row.webp',
    heroSubtitle: 'Tailored executive silhouettes and structured elegance for the modern corporate leader.',
    specialty: 'Two-Piece Suiting, Super 120s Trousers & French-Cuff Shirts'
  },
  {
    name: 'Montvale',
    mark: 'MONTVALE',
    tag: 'The art of understated distinction.',
    detail: 'Discreet textures, grounded colours and confident cuts that make each workday a little more considered. Crafted with lightweight breathable weaves for all-day composure.',
    type: 'TAILORED ESSENTIALS',
    image: 'brand-montvale.webp',
    heroSubtitle: 'Understated luxury, textured blazers, and long-staple cotton shirting.',
    specialty: 'Textured Linen Blazers, Giza Cotton Shirts & Fine Trousers'
  },
  {
    name: 'Atelier IX',
    mark: 'ATELIER <span>IX</span>',
    tag: 'Dressing for the exceptional.',
    detail: 'A celebratory take on formal dressing — expressive silhouettes, rich silk-blend jacquards and refined finishing touches for weddings, galas and milestone occasions.',
    type: 'OCCASION DRESSING',
    image: 'brand-atelier-ix.webp',
    heroSubtitle: 'Grand wedding ensembles, bespoke dinner jackets, and ceremony tailoring.',
    specialty: 'Peak-Lapel Tuxedos, Double-Breasted Suiting & Ceremony Wear'
  },
  {
    name: 'North & Form',
    mark: 'NORTH <span>& FORM</span>',
    tag: 'Considered, every single day.',
    detail: 'Elevated staples, wearable fits and quiet versatility for the many sides of a modern working life. Engineered with subtle stretch and crease-resistant weaves.',
    type: 'EVERYDAY ELEVATED',
    image: 'brand-north-form.webp',
    heroSubtitle: 'Clean-cut poplins, Oxford weaves, and adaptable weekday essentials.',
    specialty: 'Everyday Poplins, Oxford Cloth & Smart Weekday Trousers'
  },
  {
    name: 'Caldera',
    mark: 'CALDERA',
    tag: 'Details that finish the look.',
    detail: 'Refined accessory essentials, from the finishing knot of a hand-rolled mulberry silk tie to gold-plated mother-of-pearl cufflinks and polished burnished leather accents.',
    type: 'REFINED FINISHING',
    image: 'brand-caldera.webp',
    heroSubtitle: 'Handmade silk neckwear, pocket squares, dress watches and bespoke cufflinks.',
    specialty: 'Pure Silk Ties, Mother-of-Pearl Cufflinks & Leather Sets'
  }
];

const createProduct = (item) => ({
  id: item.id,
  name: item.name,
  category: item.category,
  brand: item.brand,
  price: item.price,
  image: item.image,
  gallery: item.gallery || [item.image, 'about-tailoring.webp', 'fitting-room.webp'],
  colour: item.colour,
  hex: item.hex,
  availableColours: item.availableColours || [{ name: item.colour, hex: item.hex, image: item.image }],
  material: item.material,
  fit: item.fit,
  sizes: item.sizes,
  collection: item.collection || 'Everyday Edit',
  label: item.label || '',
  description: item.description || `${item.material}, shaped in an impeccable ${item.fit.toLowerCase()} silhouette. A considered piece for confident modern dressing.`,
  care: item.care || 'Dry clean recommended. Gentle warm iron under cloth barrier. Store on shaped wooden hanger.',
  occasions: item.occasions || 'Boardroom meetings, executive conferences, formal dinners, celebrations.',
  specs: item.specs || [
    { label: 'Material', value: item.material },
    { label: 'Fit Profile', value: item.fit },
    { label: 'Weave / Construction', value: 'Hand-finished, reinforced stitching' },
    { label: 'Care', value: 'Dry Clean Only' }
  ]
});

window.VELORO_PRODUCTS = [
  // 1. FORMAL SHIRTS (4 Products)
  createProduct({
    id: 'VL-101',
    name: 'Essential Poplin Shirt',
    category: 'Formal Shirts',
    brand: 'North & Form',
    price: 2190,
    image: 'ivory-poplin-shirt.webp',
    gallery: ['ivory-poplin-shirt.webp', 'folded-shirt-collection.webp', 'hand-tailored-seam.webp'],
    colour: 'Ivory',
    hex: '#F6F2EA',
    material: '100% Long-staple cotton poplin',
    fit: 'Slim fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    collection: 'Everyday Edit',
    label: 'NEW',
    description: 'Cut from crisp, breathable 100% long-staple cotton poplin, this shirt delivers a clean, smooth drape that stays neat through a full schedule. Features a reinforced semi-spread collar, mother-of-pearl buttons and tailored cuffs.',
    care: 'Machine wash warm (40°C), line dry in shade. Warm steam iron for a crisp finish.',
    occasions: 'Daily office meetings, presentations, semi-formal dinners, smart weekday rotations.',
    specs: [
      { label: 'Fabric Composition', value: '100% Long-Staple Cotton' },
      { label: 'Collar Style', value: 'Semi-Spread Collar with Removable Stays' },
      { label: 'Cuff Style', value: 'Mitered Single Cuff, Dual Button' },
      { label: 'Fabric Weight', value: '125 GSM Lightweight Poplin' }
    ]
  }),
  createProduct({
    id: 'VL-102',
    name: 'Skyline Oxford Shirt',
    category: 'Formal Shirts',
    brand: 'North & Form',
    price: 2490,
    image: 'sky-blue-formal-shirt.webp',
    gallery: ['sky-blue-formal-shirt.webp', 'modern-office-shirt.webp', 'folded-shirt-collection.webp'],
    colour: 'Powder blue',
    hex: '#A3B9D9',
    material: 'Subtle basketweave Oxford cotton',
    fit: 'Regular fit',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Everyday Edit',
    label: 'BESTSELLER',
    description: 'A benchmark in classic menswear. Woven in a refined two-ply basketweave, the Skyline Oxford pairs the reassuring substance of classic Oxford cloth with a soft, supple hand feel that breathes naturally.',
    care: 'Machine wash cold or warm. Hang dry. Medium-hot iron.',
    occasions: 'Client consultations, business luncheons, travel, smart formal ensembles.',
    specs: [
      { label: 'Fabric Composition', value: '100% Two-Ply Combed Cotton' },
      { label: 'Collar Style', value: 'Classic Point Collar' },
      { label: 'Weave', value: 'Fine Royal Oxford' },
      { label: 'Weight', value: '145 GSM All-Season' }
    ]
  }),
  createProduct({
    id: 'VL-121',
    name: 'Royal Twill Dress Shirt',
    category: 'Formal Shirts',
    brand: 'Arden Row',
    price: 3290,
    image: 'royal-twill-formal-shirt.webp',
    gallery: ['royal-twill-formal-shirt.webp', 'ivory-poplin-shirt.webp', 'hand-tailored-seam.webp'],
    colour: 'Pristine White',
    hex: '#FFFFFF',
    material: 'Two-fold 100s royal twill cotton',
    fit: 'Tailored fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Signature',
    label: 'SIGNATURE',
    description: 'Woven with a diagonal twill structure for a luminous sheen and exceptional resistance to creasing. Styled with a cutaway spread collar tailored specifically to frame a Windsor knot or stand proud without a tie.',
    care: 'Dry clean or delicate warm wash. Hot iron whilst slightly damp.',
    occasions: 'Boardroom presentations, black tie galas, evening functions, corporate summits.',
    specs: [
      { label: 'Yarn Count', value: '100/2 Two-Fold Egyptian Cotton' },
      { label: 'Collar Style', value: 'Cutaway Spread with Brass Collar Stiffeners' },
      { label: 'Cuff Options', value: 'Convertible French / Barrel Cuffs' },
      { label: 'Weave', value: 'High-Density Diagonal Twill' }
    ]
  }),
  createProduct({
    id: 'VL-131',
    name: 'Sovereign Herringbone Shirt',
    category: 'Formal Shirts',
    brand: 'Montvale',
    price: 2990,
    image: 'sovereign-herringbone-shirt.webp',
    gallery: ['pale-ice-shirt.webp', 'sky-blue-formal-shirt.webp', 'folded-shirt-collection.webp'],
    colour: 'Pale ice',
    hex: '#C8D5E6',
    material: 'Fine herringbone woven cotton',
    fit: 'Modern fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    collection: 'Signature',
    label: 'NEW',
    description: 'Subtle micro-herringbone patterning gives this pale ice blue shirt depth and dimension. The structured collar holds its shape effortlessly beneath dark suiting or tailored blazers.',
    care: 'Machine wash warm, hang dry, medium steam iron.',
    occasions: 'Executive meetings, formal gatherings, signature dinners.',
    specs: [
      { label: 'Weave', value: 'Micro-Herringbone Weave' },
      { label: 'Collar', value: 'Semi-Spread Formal Collar' },
      { label: 'Buttons', value: 'Natural Trocas Shell' }
    ]
  }),

  // 2. FORMAL TROUSERS (3 Products)
  createProduct({
    id: 'VL-105',
    name: 'Charcoal Tapered Trouser',
    category: 'Formal Trousers',
    brand: 'Montvale',
    price: 3490,
    image: 'charcoal-tailored-trouser.webp',
    gallery: ['charcoal-tailored-trouser.webp', 'black-office-trouser.webp', 'about-fitting.webp'],
    colour: 'Charcoal',
    hex: '#3E4146',
    material: 'Wool-blend performance suiting',
    fit: 'Tapered fit',
    sizes: ['30', '32', '34', '36', '38'],
    collection: 'Signature',
    label: 'POPULAR',
    description: 'Precision-tailored trousers crafted from a resilient wool-viscose blend with natural four-way stretch. Designed with a clean flat front, slanted side pockets and a subtle taper that falls neatly above the shoe.',
    care: 'Dry clean only. Press with a damp pressing cloth on wool setting.',
    occasions: 'Executive meetings, formal ceremonies, smart business travel.',
    specs: [
      { label: 'Composition', value: '60% Merino Wool, 38% Viscose, 2% Elastane' },
      { label: 'Front Styling', value: 'Flat Front with Internal Grip Band' },
      { label: 'Waistband', value: 'Extended Tab Closure with French Fly' },
      { label: 'Hemming', value: 'Unfinished Hem for Custom Tailored Inseam' }
    ]
  }),
  createProduct({
    id: 'VL-106',
    name: 'Midnight City Trouser',
    category: 'Formal Trousers',
    brand: 'Arden Row',
    price: 3190,
    image: 'black-office-trouser.webp',
    gallery: ['black-office-trouser.webp', 'charcoal-tailored-trouser.webp', 'navy-pleated-trouser.webp'],
    colour: 'Black',
    hex: '#25282D',
    material: 'Stretch poly-viscose twill',
    fit: 'Slim fit',
    sizes: ['30', '32', '34', '36', '38'],
    collection: 'Everyday Edit',
    label: '',
    description: 'An indispensable anchor for any professional wardrobe. Sleek and crease-resistant, the Midnight City Trouser retains its sharp center crease throughout rigorous daily commutes and full working days.',
    care: 'Machine wash delicate cycle (30°C) or dry clean. Hang dry away from direct sunlight.',
    occasions: 'Everyday office, corporate events, evening smart-casual wear.',
    specs: [
      { label: 'Material', value: 'Poly-Viscose Comfort Stretch' },
      { label: 'Rise', value: 'Mid-Rise Sits Naturally on Waist' },
      { label: 'Pockets', value: 'Double-Welt Rear Pockets with Horn Buttons' }
    ]
  }),
  createProduct({
    id: 'VL-122',
    name: 'Sartorial Pleated Trouser',
    category: 'Formal Trousers',
    brand: 'Arden Row',
    price: 3890,
    image: 'navy-pleated-trouser.webp',
    gallery: ['navy-pleated-trouser.webp', 'charcoal-tailored-trouser.webp', 'black-office-trouser.webp'],
    colour: 'Deep navy',
    hex: '#1A2332',
    material: 'Super 120s wool blend with side adjusters',
    fit: 'Classic pleated fit',
    sizes: ['30', '32', '34', '36', '38'],
    collection: 'Signature',
    label: 'NEW',
    description: 'Classic British tailoring meets contemporary ease. Crafted with subtle single forward pleats, buckled side adjusters that eliminate the need for a belt, and a generous rise that flatters the male posture.',
    care: 'Professional dry clean only. Steam gently between wears.',
    occasions: 'Diplomatic gatherings, milestone celebrations, heritage suiting combinations.',
    specs: [
      { label: 'Composition', value: 'Super 120s Fine Australian Wool Blend' },
      { label: 'Waist Styling', value: 'Side Buckle Adjusters, Belt-Free Waistband' },
      { label: 'Pleat Detail', value: 'Single Forward Tailored Pleat' },
      { label: 'Lining', value: 'Half-Lined to Knee in Silky Bemberg Viscose' }
    ]
  }),

  // 3. BUSINESS SUITS (3 Products)
  createProduct({
    id: 'VL-107',
    name: 'Midnight Signature Suit',
    category: 'Business Suits',
    brand: 'Arden Row',
    price: 15990,
    image: 'midnight-suit.webp',
    gallery: ['midnight-suit.webp', 'navy-business-suit.webp', 'charcoal-pinstripe-suit.webp'],
    colour: 'Midnight navy',
    hex: '#1B2940',
    material: 'Fine Italian wool blend',
    fit: 'Tailored fit',
    sizes: ['38', '40', '42', '44', '46'],
    collection: 'Signature',
    label: 'SIGNATURE',
    description: 'The defining suit of the VELORO House. Half-canvas chest piece construction guarantees that the jacket molds to your chest over time. Finished with hand-sewn buttonholes, picked lapel stitching and dual side vents.',
    care: 'Specialist dry clean only. Brush after each wear with a natural bristle clothes brush.',
    occasions: 'Executive boardrooms, high-stakes negotiations, formal evening galas, corporate presentations.',
    specs: [
      { label: 'Construction', value: 'Half-Canvas Chest Piece with Soft Shoulder Padding' },
      { label: 'Lapel', value: 'Notch Lapel (8.5 cm) with Hand Picked Stitching' },
      { label: 'Cloth Origin', value: 'Woven with Fine Wool Blended Yarn' },
      { label: 'Includes', value: 'Tailored Two-Piece (Jacket + Flat Front Trousers)' }
    ]
  }),
  createProduct({
    id: 'VL-108',
    name: 'The Boardroom Two-Piece',
    category: 'Business Suits',
    brand: 'Arden Row',
    price: 14990,
    image: 'navy-business-suit.webp',
    gallery: ['navy-business-suit.webp', 'midnight-suit.webp', 'herringbone-fabric.webp'],
    colour: 'Navy',
    hex: '#25344B',
    material: 'All-season wool blend',
    fit: 'Modern fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Signature',
    label: 'NEW',
    description: 'A versatile workhorse suit in an enduring shade of royal navy. Designed for maximum breathability in warm conference rooms without losing an ounce of authority or structure.',
    care: 'Dry clean only. Do not wash or tumble dry.',
    occasions: 'Corporate meetings, client dinners, legal and financial hearings.',
    specs: [
      { label: 'Style', value: 'Two-Button Single-Breasted' },
      { label: 'Vents', value: 'Dual English Rear Vents' },
      { label: 'Pockets', value: 'Flap Pockets with Ticket Pocket Interior' }
    ]
  }),
  createProduct({
    id: 'VL-123',
    name: 'Executive Chalk-Stripe Suit',
    category: 'Business Suits',
    brand: 'Arden Row',
    price: 17490,
    image: 'charcoal-pinstripe-suit.webp',
    gallery: ['charcoal-pinstripe-suit.webp', 'midnight-suit.webp', 'navy-business-suit.webp'],
    colour: 'Charcoal stripe',
    hex: '#34383E',
    material: 'Merino wool blend with chalk pinstripe',
    fit: 'Modern structured fit',
    sizes: ['38', '40', '42', '44', '46'],
    collection: 'Signature',
    label: 'POPULAR',
    description: 'An authoritative classic reimagined. A subtle, muted chalk pinstripe runs through a charcoal wool foundation, creating a commanding presence that elongates the frame while maintaining sartorial refinement.',
    care: 'Professional dry clean only. Store on wide contoured wooden hanger.',
    occasions: 'Annual general meetings, leadership summits, formal banquets, milestone contracts.',
    specs: [
      { label: 'Pattern', value: 'Subtle Chalk Stripe (18mm Spacing)' },
      { label: 'Shoulder', value: 'Light Roped Shoulder for a Sculpted Silhouette' },
      { label: 'Lining', value: 'Full Cupro Bemberg Lining in Matching Charcoal' }
    ]
  }),

  // 4. BLAZERS & JACKETS (4 Products)
  createProduct({
    id: 'VL-110',
    name: 'Sandstone Linen Blazer',
    category: 'Blazers & Jackets',
    brand: 'Montvale',
    price: 7990,
    image: 'sandstone-blazer.webp',
    gallery: ['sandstone-blazer.webp', 'category-blazers-jackets.webp', 'beige-linen-suit.webp'],
    colour: 'Sand',
    hex: '#C8AF91',
    material: 'Linen-cotton breathable weave',
    fit: 'Regular fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Signature',
    label: 'NEW',
    description: 'The effortless solution for warm-weather formal dressing. Softly tailored with an unconstructed shoulder and butterfly half-lining, allowing air to circulate freely while keeping a razor-sharp silhouette.',
    care: 'Dry clean only. Steam to refresh linen texture naturally.',
    occasions: 'Garden parties, daytime conferences, summer weddings, coastal celebrations.',
    specs: [
      { label: 'Material', value: '55% Belgian Linen, 45% Cotton' },
      { label: 'Structure', value: 'Unstructured Shoulder, Butterfly Half-Lining' },
      { label: 'Pockets', value: 'Patch Pockets with Curved Barchetta Breast Pocket' }
    ]
  }),
  createProduct({
    id: 'VL-111',
    name: 'Warm Camel Blazer',
    category: 'Blazers & Jackets',
    brand: 'Montvale',
    price: 8690,
    image: 'warm-camel-blazer.webp',
    gallery: ['warm-camel-blazer.webp', 'category-blazers-jackets.webp', 'herringbone-tweed-jacket.webp'],
    colour: 'Camel',
    hex: '#B89A73',
    material: 'Fine linen-wool blend',
    fit: 'Modern fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Everyday Edit',
    label: '',
    description: 'A distinguished layering piece that bridges weekday business and weekend elegance. Rich camel tones bring warmth to neutral shirts and dark trousers.',
    care: 'Dry clean only.',
    occasions: 'Smart Friday dressing, dinner dates, business casual meetings.',
    specs: [
      { label: 'Cloth', value: 'Textured Linen-Wool Weave' },
      { label: 'Buttons', value: 'Burnished Tortoiseshell Effect' }
    ]
  }),
  createProduct({
    id: 'VL-116',
    name: 'Artisan Herringbone Jacket',
    category: 'Blazers & Jackets',
    brand: 'Atelier IX',
    price: 11490,
    image: 'herringbone-tweed-jacket.webp',
    gallery: ['herringbone-tweed-jacket.webp', 'sandstone-blazer.webp', 'charcoal-tailored-trouser.webp'],
    colour: 'Taupe',
    hex: '#A68F75',
    material: 'Textured herringbone wool weave',
    fit: 'Tailored fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Signature',
    label: '',
    description: 'Masterfully woven in a heritage herringbone pattern. Features genuine horn buttons, functioning sleeve cuffs and an interior ticket pocket.',
    care: 'Dry clean only.',
    occasions: 'Autumn gatherings, academic events, art previews, distinguished dinner parties.',
    specs: [
      { label: 'Weave', value: 'Artisanal Herringbone Twill' },
      { label: 'Weight', value: '320 GSM Mid-Weight' }
    ]
  }),
  createProduct({
    id: 'VL-120',
    name: 'Ceremony Linen Blazer',
    category: 'Blazers & Jackets',
    brand: 'Atelier IX',
    price: 9990,
    image: 'tobacco-linen-jacket.webp',
    gallery: ['tobacco-linen-jacket.webp', 'sandstone-blazer.webp', 'champagne-tuxedo.webp'],
    colour: 'Champagne',
    hex: '#D3C0A5',
    material: 'Pure European flax linen',
    fit: 'Modern fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Seasonal',
    label: '',
    description: 'Celebratory champagne tones woven in pure flax linen. Perfect for destination ceremonies and warm sunset toasts where refined style must remain effortless.',
    care: 'Dry clean only.',
    occasions: 'Sangeet ceremonies, destination weddings, cocktail evenings.',
    specs: [
      { label: 'Fabric', value: '100% Pure Flax Linen' },
      { label: 'Lining', value: 'Breathable Viscose' }
    ]
  }),

  // 5. OFFICE WEAR (3 Products)
  createProduct({
    id: 'VL-104',
    name: 'The Executive Shirt',
    category: 'Office Wear',
    brand: 'Arden Row',
    price: 2590,
    image: 'modern-office-shirt.webp',
    gallery: ['modern-office-shirt.webp', 'ivory-poplin-shirt.webp', 'folded-shirt-collection.webp'],
    colour: 'Off white',
    hex: '#F0E9DE',
    material: 'Cotton stretch comfort weave',
    fit: 'Modern fit',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Everyday Edit',
    label: '',
    description: 'Designed specifically for the demands of the modern executive day. Blended with 3% high-recovery elastane for unhindered mobility at desk, podium and in transit.',
    care: 'Machine wash warm, tumble dry low or line dry.',
    occasions: 'Boardroom presentations, executive meetings, daily corporate duties.',
    specs: [
      { label: 'Composition', value: '97% Pima Cotton, 3% Elastane' },
      { label: 'Collar', value: 'Reinforced English Spread' }
    ]
  }),
  createProduct({
    id: 'VL-117',
    name: 'Everyday Cotton Edit',
    category: 'Office Wear',
    brand: 'North & Form',
    price: 2790,
    image: 'cotton-shirt-edit.webp',
    gallery: ['cotton-shirt-edit.webp', 'sky-blue-formal-shirt.webp', 'modern-office-shirt.webp'],
    colour: 'Stone blue',
    hex: '#879BAC',
    material: 'Combed long-staple cotton',
    fit: 'Classic fit',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Everyday Edit',
    label: '',
    description: 'Understated and immensely dependable. The stone blue tone coordinates naturally with navy, charcoal and sand suiting without overpowering the outfit.',
    care: 'Machine wash warm. Warm steam iron.',
    occasions: 'Day-to-day office wear, client meetings, professional workshops.',
    specs: [
      { label: 'Fabric', value: '100% Combed Compact Cotton' },
      { label: 'Fit', value: 'Relaxed Classic Tailoring' }
    ]
  }),
  createProduct({
    id: 'VL-119',
    name: 'Easy-Friday Essentials',
    category: 'Office Wear',
    brand: 'North & Form',
    price: 3290,
    image: 'pale-ice-shirt.webp',
    gallery: ['pale-ice-shirt.webp', 'cotton-shirt-edit.webp', 'sandstone-blazer.webp'],
    colour: 'Cream',
    hex: '#EEE3D4',
    material: 'Cotton stretch brushed finish',
    fit: 'Relaxed fit',
    sizes: ['M', 'L', 'XL'],
    collection: 'Seasonal',
    label: '',
    description: 'A softly brushed cotton shirt with a camp-inspired hidden spread collar. Bridges the divide between corporate formality and end-of-week ease.',
    care: 'Machine wash cold. Line dry in shade.',
    occasions: 'Casual Fridays, creative agency meetings, travel.',
    specs: [
      { label: 'Finish', value: 'Peach-Soft Micro Brush Finish' },
      { label: 'Buttons', value: 'Chalk White Buttons' }
    ]
  }),

  // 6. WEDDING & OCCASION WEAR (4 Products)
  createProduct({
    id: 'VL-109',
    name: 'Olive Double-Breasted Suit',
    category: 'Wedding & Occasion Wear',
    brand: 'Atelier IX',
    price: 18490,
    image: 'olive-double-breasted-suit.webp',
    gallery: ['olive-double-breasted-suit.webp', 'champagne-tuxedo.webp', 'beige-linen-suit.webp'],
    colour: 'Olive',
    hex: '#565B43',
    material: 'Structured wool-silk blend',
    fit: 'Tailored fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Signature',
    label: 'SIGNATURE',
    description: 'An unforgettable statement in masculine tailoring. Featuring a sharp six-on-two button double-breasted closure, sweeping peak lapels and a rich moss-olive tone that commands admiration at celebrations.',
    care: 'Specialist dry clean only.',
    occasions: 'Weddings, reception dinners, creative galas, award nights.',
    specs: [
      { label: 'Closure', value: '6x2 Double-Breasted with Horn Buttons' },
      { label: 'Lapel', value: 'Wide Peak Lapel (10 cm)' },
      { label: 'Cloth', value: 'Merino Wool and Silk Blend' }
    ]
  }),
  createProduct({
    id: 'VL-112',
    name: 'The Summer Ceremony Suit',
    category: 'Wedding & Occasion Wear',
    brand: 'Atelier IX',
    price: 13990,
    image: 'beige-linen-suit.webp',
    gallery: ['beige-linen-suit.webp', 'sandstone-blazer.webp', 'olive-double-breasted-suit.webp'],
    colour: 'Ecru',
    hex: '#C6B295',
    material: 'Breathable linen-silk blend',
    fit: 'Relaxed fit',
    sizes: ['38', '40', '42', '44', '46'],
    collection: 'Seasonal',
    label: 'NEW',
    description: 'Tailored for day ceremonies, destination vows and warm-weather celebrations. Combines the airy breathability of linen with the subtle lustre and drape of raw silk.',
    care: 'Dry clean only.',
    occasions: 'Day weddings, beach ceremonies, garden celebrations.',
    specs: [
      { label: 'Blend', value: '65% Pure Linen, 35% Silk' },
      { label: 'Jacket Style', value: 'Two-Button Soft Peak Lapel' }
    ]
  }),
  createProduct({
    id: 'VL-118',
    name: 'After-Hours Navy Suit',
    category: 'Wedding & Occasion Wear',
    brand: 'Atelier IX',
    price: 16990,
    image: 'midnight-wedding-suit.webp',
    gallery: ['midnight-wedding-suit.webp', 'midnight-suit.webp', 'champagne-tuxedo.webp'],
    colour: 'Ink navy',
    hex: '#202D42',
    material: 'High-twist wool suiting with satin accents',
    fit: 'Slim fit',
    sizes: ['38', '40', '42', '44'],
    collection: 'Signature',
    label: '',
    description: 'Crafted for receptions and milestone evenings. Deep ink navy wool caught under warm chandelier lights reveals subtle depth, complemented by discreet satin trims.',
    care: 'Dry clean only.',
    occasions: 'Wedding receptions, milestone anniversaries, black-tie optional.',
    specs: [
      { label: 'Fabric', value: 'High-Twist Crease Resistant Wool' },
      { label: 'Accents', value: 'Subtle Duchess Satin Trim on Pockets' }
    ]
  }),
  createProduct({
    id: 'VL-127',
    name: 'The Grand Reception Tuxedo',
    category: 'Wedding & Occasion Wear',
    brand: 'Atelier IX',
    price: 21990,
    image: 'champagne-tuxedo.webp',
    gallery: ['champagne-tuxedo.webp', 'midnight-wedding-suit.webp', 'olive-double-breasted-suit.webp'],
    colour: 'Champagne gold',
    hex: '#D4AF37',
    material: 'Bespoke jacquard with duchess satin peak lapels',
    fit: 'Structured dinner cut',
    sizes: ['38', '40', '42', '44', '46'],
    collection: 'Signature',
    label: 'NEW',
    description: 'The crowning achievement of the Atelier IX occasion collection. A bespoke champagne jacquard dinner jacket trimmed with wide jet-black duchess satin peak lapels and covered satin buttons.',
    care: 'Specialist couture dry clean only.',
    occasions: 'Groom wedding attire, black tie galas, grand receptions, red carpet.',
    specs: [
      { label: 'Lapel', value: 'Wide Satin Peak Lapel (11 cm)' },
      { label: 'Fabric', value: 'Bespoke Champagne Jacquard with Pure Silk Trim' },
      { label: 'Buttons', value: 'Hand-Covered Black Satin Buttons' }
    ]
  }),

  // 7. PREMIUM COTTON SHIRTS (3 Products)
  createProduct({
    id: 'VL-103',
    name: 'Cloud Weave Dress Shirt',
    category: 'Premium Cotton Shirts',
    brand: 'Montvale',
    price: 2890,
    image: 'cloud-weave-dress-shirt.webp',
    gallery: ['pale-ice-shirt.webp', 'sky-blue-formal-shirt.webp', 'giza-cotton-stripe-shirt.webp'],
    colour: 'Light blue',
    hex: '#C8D5E6',
    material: '120s two-ply premium cotton',
    fit: 'Slim fit',
    sizes: ['M', 'L', 'XL', 'XXL'],
    collection: 'Signature',
    label: 'NEW',
    description: 'Woven from hand-harvested cotton fibers, offering an extraordinarily soft hand and silky texture against the skin. Engineered to remain crisp and fresh through long transatlantic flights.',
    care: 'Warm machine wash, line dry, steam iron.',
    occasions: 'Executive conferences, leadership luncheons, formal celebrations.',
    specs: [
      { label: 'Yarn Count', value: '120/2 Combed Compact Yarn' },
      { label: 'Finish', value: 'Silky Soft Luster Finish' }
    ]
  }),
  createProduct({
    id: 'VL-115',
    name: 'Fine Cotton Shirt Set',
    category: 'Premium Cotton Shirts',
    brand: 'North & Form',
    price: 3890,
    image: 'folded-shirt-collection.webp',
    gallery: ['folded-shirt-collection.webp', 'ivory-poplin-shirt.webp', 'sky-blue-formal-shirt.webp'],
    colour: 'Multi',
    hex: '#A9B8C9',
    material: 'Curated 100% fine cotton shirting',
    fit: 'Regular fit',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Seasonal',
    label: '',
    description: 'A curated two-piece rotation of our essential shirting cuts in complementary white and sky-blue hues. Provides the cornerstone of a thoughtful professional wardrobe.',
    care: 'Machine wash warm, hang dry, medium steam iron.',
    occasions: 'Capsule wardrobe building, weekly professional rotation.',
    specs: [
      { label: 'Set Contents', value: 'Two Curated Formal Shirts (White + Sky Blue)' },
      { label: 'Cotton Origin', value: '100% Long-Staple Indian Combed Cotton' }
    ]
  }),
  createProduct({
    id: 'VL-128',
    name: 'Giza Royal Bengal Stripe',
    category: 'Premium Cotton Shirts',
    brand: 'Montvale',
    price: 3490,
    image: 'giza-cotton-stripe-shirt.webp',
    gallery: ['giza-cotton-stripe-shirt.webp', 'pale-ice-shirt.webp', 'royal-twill-formal-shirt.webp'],
    colour: 'Sky blue & white',
    hex: '#B0C8E0',
    material: '100% Egyptian Giza 87 long-staple cotton',
    fit: 'Contemporary slim fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    collection: 'Signature',
    label: 'NEW',
    description: 'Woven exclusively from rare Egyptian Giza 87 extra-long staple cotton. Celebrated worldwide for its butter-soft feel, durability and vibrant color fastness. Styled with a razor-sharp Bengal micro-stripe.',
    care: 'Gentle wash (30°C), hang dry, warm steam iron.',
    occasions: 'Board meetings, keynote addresses, high-level client dinners.',
    specs: [
      { label: 'Cotton Grade', value: 'Egyptian Giza 87 Extra-Long Staple' },
      { label: 'Pattern', value: 'Classic 2mm Bengal Stripe' },
      { label: 'Collar', value: 'Semi-Spread Collar with Removable Metal Stays' }
    ]
  }),

  // 8. FORMAL ACCESSORIES (3 Products)
  createProduct({
    id: 'VL-113',
    name: 'Burgundy Silk Tie',
    category: 'Formal Accessories',
    brand: 'Caldera',
    price: 1990,
    image: 'burgundy-silk-tie.webp',
    gallery: ['burgundy-silk-tie.webp', 'leather-formal-accessories.webp', 'cufflinks-pocket-square-edit.webp'],
    colour: 'Burgundy',
    hex: '#6F2336',
    material: '100% Italian woven mulberry silk',
    fit: 'Classic cut (8cm blade)',
    sizes: ['One Size'],
    collection: 'Signature',
    label: '',
    description: 'Hand-sewn with a rich grenadine jacquard texture that knots with a deep, authoritative dimple. Wool-blend interlining ensures the tie springs back into shape wear after wear.',
    care: 'Dry clean only. Do not iron directly.',
    occasions: 'Formal business, weddings, gala dinners, diplomatic summits.',
    specs: [
      { label: 'Blade Width', value: '8 cm Classic Sartorial Width' },
      { label: 'Silk', value: '100% Pure Mulberry Silk Grenadine' },
      { label: 'Handcrafted', value: 'Self-Tipped with Bar Tack Finishing' }
    ]
  }),
  createProduct({
    id: 'VL-114',
    name: 'The Gentleman Accessories Edit',
    category: 'Formal Accessories',
    brand: 'Caldera',
    price: 4990,
    image: 'leather-formal-accessories.webp',
    gallery: ['leather-formal-accessories.webp', 'burgundy-silk-tie.webp', 'cufflinks-pocket-square-edit.webp'],
    colour: 'Cognac',
    hex: '#7B422B',
    material: 'Full-grain Italian calf leather and silk',
    fit: 'Classic style',
    sizes: ['One Size'],
    collection: 'Signature',
    label: 'POPULAR',
    description: 'A complete gift and finishing set: burnished cognac full-grain leather dress belt with brass buckle, matched silk necktie and hand-finished pocket square.',
    care: 'Leather conditioner for belt; dry clean for silk items.',
    occasions: 'Gift sets, wedding day grooming, complete formal finishing.',
    specs: [
      { label: 'Leather', value: 'Full-Grain Burnished Tuscan Calfskin' },
      { label: 'Buckle', value: 'Solid Brushed Antique Brass' }
    ]
  }),
  createProduct({
    id: 'VL-129',
    name: 'Cufflinks & Pocket Square Edit',
    category: 'Formal Accessories',
    brand: 'Caldera',
    price: 2790,
    image: 'cufflinks-pocket-square-edit.webp',
    gallery: ['cufflinks-pocket-square-edit.webp', 'burgundy-silk-tie.webp', 'leather-formal-accessories.webp'],
    colour: 'Gold & Pearl',
    hex: '#E0C878',
    material: '18K gold-plated brass, iridescent mother-of-pearl, mulberry silk',
    fit: 'Refined accessory',
    sizes: ['One Size'],
    collection: 'Signature',
    label: 'NEW',
    description: 'The definitive finishing touch for French cuff dress shirts. Features hand-cut natural mother-of-pearl cabochons set in 18-karat gold-plated brass, paired with a hand-rolled white mulberry silk pocket square.',
    care: 'Wipe metal with microfiber cloth. Dry clean silk pocket square.',
    occasions: 'Weddings, black tie events, awards galas, bespoke gifting.',
    specs: [
      { label: 'Plating', value: '18K Heavy Gold Electroplate' },
      { label: 'Inlay', value: 'Natural Australian Mother-of-Pearl' },
      { label: 'Pocket Square', value: 'Pure Mulberry Silk with Hand-Rolled Hem' }
    ]
  })
];

/* Enhanced editorial journal articles */
window.VELORO_POSTS = [
  {
    slug: 'how-a-suit-should-fit',
    title: 'How to Choose the Perfect Business Suit',
    category: 'Tailoring',
    readTime: 6,
    image: 'journal-suit-fit.webp',
    imageAlt: 'Gentleman in a tailored midnight-navy two-piece suit',
    tags: ['suit', 'tailoring', 'fit', 'shoulder', 'jacket', 'business'],
    excerpt: 'A clear, practical guide to evaluating shoulders, chest drape, sleeve length and trouser breaks before investing in your next suit.',
    lead: 'A great business suit is not simply the right number on a tag. It should echo your natural posture, stay comfortable during 12-hour days, and project quiet authority from every angle.',
    sections: [
      {
        heading: 'Start with the natural shoulder line',
        paragraphs: [
          'The shoulder seam should sit squarely where your collarbone meets your arm. If you see a divot beneath the shoulder pad or if the seam extends past your natural frame, the jacket is too large across the chest.',
          'Stand relaxed rather than tensing up. The jacket should feel easy across your upper back when you extend your arms naturally.'
        ]
      },
      {
        heading: 'Assess the chest button stance and jacket length',
        paragraphs: [
          'When buttoned at the top button (on a two-button suit), the lapels should lie completely flat against your shirt without bowing outward. If the lapels buckle or you see an "X" crease across the waist button, the jacket is too tight.',
          'For classic business length, the bottom hem of the jacket should comfortably cover the curve of your seat while maintaining an even 50/50 proportion between torso and leg line.'
        ]
      },
      {
        heading: 'Master sleeve length and shirt cuff reveal',
        paragraphs: [
          'A properly tailored jacket sleeve should end just at the wrist bone, allowing approximately one-quarter to one-half inch (6 to 12 mm) of crisp shirt cuff to show. This creates a clean frame for your hands and dress watch.'
        ]
      },
      {
        heading: 'Check the trouser drape and break',
        paragraphs: [
          'The waistband should sit firmly on your natural waist without requiring a cinched belt. For contemporary corporate dressing, a subtle "half break" or clean "slight break" ensures the trouser hem rests gently on the front of your shoe laces without collapsing into messy fabric folds.'
        ]
      }
    ],
    takeaway: 'Fit the shoulders and chest first—they define the silhouette. Length, waist suppression and trouser hems can easily be refined by a skilled tailor.'
  },
  {
    slug: 'formal-shirt-styling-for-professionals',
    title: 'Formal Shirt Styling for Professionals',
    category: 'Style Guides',
    readTime: 5,
    image: 'journal-capsule.webp',
    imageAlt: 'Neatly folded ivory, grey and blue formal shirts',
    tags: ['shirt', 'office', 'collar', 'cuff', 'professional'],
    excerpt: 'How collar styles, fabric weaves and colour pairings form the bedrock of an effortless, commanding executive wardrobe.',
    lead: 'The shirt is the closest layer to your skin and the foundation of your daily silhouette. Choosing the right collar structure and textile weight transforms simple workwear into an intentional statement.',
    sections: [
      {
        heading: 'Choosing the right collar for your face and tie',
        paragraphs: [
          'The semi-spread collar remains the most versatile cut in menswear: it flatters both narrow and broader face shapes and frames four-in-hand and half-Windsor knots equally well.',
          'For black-tie or peak-lapel suiting, a classic cutaway or wide spread collar adds sartorial flair and gives the tie knot ample breathing room.'
        ]
      },
      {
        heading: 'Selecting the weave for the season and setting',
        paragraphs: [
          'Cotton poplin is ultra-smooth, crisp and lightweight, making it the gold standard for hot climates and boardrooms. Royal twill offers subtle diagonal texture, a soft sheen and superior wrinkle resistance for long conference days.',
          'Reserve Oxford basketweave for smart business-casual days or textured sport coats.'
        ]
      },
      {
        heading: 'The executive rotation: white, pale blue and subtle pattern',
        paragraphs: [
          'A high-performing rotation requires three white shirts (twill and poplin), three powder-blue variations, and two micro-patterned pieces such as fine Bengal stripes or discrete micro-checks.'
        ]
      }
    ],
    takeaway: 'Invest in premium long-staple cotton and structured collars that stay sharp through long workdays.'
  },
  {
    slug: 'modern-gentlemans-wedding-outfit-guide',
    title: "A Modern Gentleman's Wedding Outfit Guide",
    category: 'Occasions',
    readTime: 6,
    image: 'journal-occasions.webp',
    imageAlt: 'Elegant olive double-breasted suit styled with an ivory shirt',
    tags: ['wedding', 'groom', 'reception', 'tuxedo', 'occasion'],
    excerpt: 'Navigating day ceremonies, sunset vows and grand receptions with impeccable dress codes, tailored cuts and festive sophistication.',
    lead: 'Celebration formalwear demands harmony between tradition, environment and personal signature. Whether standing as the groom or attending as an honoured guest, dressing well honors the occasion.',
    sections: [
      {
        heading: 'Decoding the celebration timeline and setting',
        paragraphs: [
          'Daytime outdoor ceremonies call for breathable linen blends in ecru, warm champagne or soft sage tones. Evening ballroom receptions warrant the drama of midnight navy, charcoal or a classic peak-lapel tuxedo.',
          'Always respect the host’s stated dress code: when in doubt, leaning slightly more formal is always the mark of a thoughtful gentleman.'
        ]
      },
      {
        heading: 'Double-breasted suiting: the celebration hero',
        paragraphs: [
          'A tailored double-breasted suit in olive, tobacco or ink navy creates an instant air of occasion without needing overly ostentatious accessories. Pair with a crisp ivory poplin shirt and a grenadine silk tie.'
        ]
      },
      {
        heading: 'Footwear and finishing for celebrations that last',
        paragraphs: [
          'Select Goodyear-welted Oxford or Monkstrap shoes in deep burgundy, cognac or polished black. Ensure shoes are broken in well prior to the event, and accessorize with a hand-rolled silk pocket square.'
        ]
      }
    ],
    takeaway: 'Let the venue and lighting determine the tone: breathable neutrals for sunlit vows, rich midnight tailoring and satin lapels for the evening banquet.'
  },
  {
    slug: 'choosing-the-right-blazer',
    title: 'Choosing the Right Blazer for Every Setting',
    category: 'Style Guides',
    readTime: 5,
    image: 'journal-blazers-guide.webp',
    imageAlt: 'Curated tailored blazers styled for luxury menswear',
    tags: ['blazer', 'jacket', 'separates', 'smart-casual', 'styling'],
    excerpt: 'Mastering the art of tailored separates: unconstructed shoulders, textured wools and effortless day-to-evening versatility.',
    lead: 'A standalone blazer is arguably the most adaptable garment a man can own. When cut with intention, it transitions seamlessly from a morning investor pitch to an evening gallery opening.',
    sections: [
      {
        heading: 'Structured vs. Unconstructed tailoring',
        paragraphs: [
          'Traditional British tailoring utilizes canvas interlining and padded shoulders for a formal, commanding silhouette. Neapolitan or unconstructed blazers remove excess canvas and shoulder pads, draping naturally over your frame with Italian ease.',
          'For Indian weather and modern lifestyle, unconstructed linen-wool or cotton-blend blazers provide sharp tailoring without unnecessary weight.'
        ]
      },
      {
        heading: 'The indispensable neutral palette',
        paragraphs: [
          'Before experimenting with bold checks, anchor your wardrobe with three essential hues: navy hopsack, camel sandstone, and textured charcoal herringbone. Each pairs effortlessly with dark denim, tailored trousers and crisp poplins.'
        ]
      },
      {
        heading: 'Pocket styles and lapel details',
        paragraphs: [
          'Patch pockets lean relaxed and continental, whereas flap or jetted pockets lean strictly formal. Picked lapel stitching (AMF stitching) along the lapel edge demonstrates bespoke craftsmanship.'
        ]
      }
    ],
    takeaway: 'Choose an unconstructed silhouette in a textured hopsack or linen blend for maximum versatility.'
  },
  {
    slug: 'understand-formalwear-fabrics',
    title: 'Understanding Premium Suit Fabrics',
    category: 'Tailoring',
    readTime: 7,
    image: 'journal-fabrics.webp',
    imageAlt: 'Detailed close-up of refined beige herringbone suiting fabric',
    tags: ['fabric', 'merino', 'super-120s', 'wool', 'linen', 'twill'],
    excerpt: 'Demystifying Super 100s to 150s merino wools, high-twist travel weaves, linen blends and pure silk linings.',
    lead: 'The soul of any tailored garment is its cloth. Understanding fabric weight, yarn counts and fiber origins empowers you to choose suiting that performs beautifully in every climate.',
    sections: [
      {
        heading: 'Demystifying the "Super" wool scale',
        paragraphs: [
          'The "Super" number (e.g. Super 110s, 120s, 150s) refers to the fineness of the raw wool fibers measured in microns. While Super 150s feels extraordinarily silky, Super 110s to 130s represents the sweet spot for business wear: luxurious yet durable enough to resist friction and wear.',
          'Avoid delicate Super 180s for daily office use; save ultra-fine grades for celebratory eveningwear.'
        ]
      },
      {
        heading: 'Fabric weights and all-season performance',
        paragraphs: [
          'Suiting fabrics between 240 and 280 grams per meter (GSM) are considered "four-season" cloths, ideal for temperate weather and air-conditioned offices. For peak summer, lightweight 210–230 GSM linen-wool or fresco weaves allow cool air to pass through freely.'
        ]
      },
      {
        heading: 'The magic of high-twist fresco weaves',
        paragraphs: [
          'High-twist wools use tightly twisted yarns that naturally spring back into shape, making them virtually immune to creasing. They are the discerning frequent traveler’s greatest ally.'
        ]
      }
    ],
    takeaway: 'Prioritize high-twist Super 110s to 130s wool blends (240–280 GSM) for a suit that combines sumptuous drape with daily resilience.'
  },
  {
    slug: 'essential-formal-accessories-for-men',
    title: 'Essential Formal Accessories for Men',
    category: 'Details',
    readTime: 4,
    image: 'journal-accessories.webp',
    imageAlt: 'Brown leather formal shoes with a belt and patterned navy tie',
    tags: ['accessories', 'cufflinks', 'tie', 'pocket-square', 'leather', 'belt'],
    excerpt: 'The finishing touches that transform a suit into a signature statement: ties, pocket squares, cufflinks and leather harmony.',
    lead: 'In luxury menswear, restraint is true sophistication. The right accessories do not fight for attention; they create an unspoken harmony of texture, tone and deliberate refinement.',
    sections: [
      {
        heading: 'Harmonizing leather tones',
        paragraphs: [
          'Your belt, dress shoes and watch strap should belong to the same tonal family. They do not need to be an exact chemical match, but pairing warm cognac shoes with a black dress belt looks unconsidered.',
          'For formal occasions, opt for a slender 30mm dress belt with a discreet brushed silver or gold buckle.'
        ]
      },
      {
        heading: 'The pocket square rule: coordinate, never clone',
        paragraphs: [
          'Never purchase a pre-packaged matching tie and pocket square set. Your pocket square should echo one subtle accent color from your shirt or jacket rather than copying the tie’s pattern exactly. A crisp white hand-rolled linen square folded straight (presidential fold) is foolproof with every formal suit.'
        ]
      },
      {
        heading: 'Cufflinks that speak of heritage',
        paragraphs: [
          'French cuffs require cufflinks that reflect craftsmanship. Genuine mother-of-pearl, onyx and brushed brass or sterling silver offer classic elegance that outlasts transient trends.'
        ]
      }
    ],
    takeaway: 'Keep accessories intentional and disciplined: coordinate leathers, contrast pocket squares subtly, and let quality metalwork complete the look.'
  }
];

// Helper to support legacy slug paths so old links keep working
window.VELORO_SLUG_MAP = {
  'build-a-five-piece-office-wardrobe': 'formal-shirt-styling-for-professionals',
  'wedding-guest-style-with-confidence': 'modern-gentlemans-wedding-outfit-guide',
  'little-details-big-difference': 'essential-formal-accessories-for-men',
  'wearing-colour-in-the-boardroom': 'choosing-the-right-blazer'
};
