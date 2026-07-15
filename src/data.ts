import { Service, CatalogueItem, LaybyePackage, Testimonial } from './types';

export const MOTTO = "Supplier Of ALL Fruit Tree Varieties, Grafted and Non Grafted Exotic and Indigenous Fruit Trees That Unlock & Unleash Your Financial Freedom Through Generational Wealth";
export const SLOGAN = "Quality Can Never Be Substituted... Compromise Can Never Be A Better Solution.";
export const MISSION = "To help farmers unlock and unleash their financial freedom in creating retirement investment & generational wealth that promote a healthy lifestyle and wellbeing the Eden Lifestyle way (Our Health & Our Wealth In God's Way).";
export const VISION = "To faithfully guide and supply farmers with top-grade grafted and non-grafted exotic and indigenous fruit trees that are ideal for investment in our region in a way that will promote and create regional food and financial self-reliance at retirement.";

export const CONTACT_WHATSAPP = "+263772924948";
export const WHATSAPP_LINK = "https://wa.me/263772924948";
export const YOUTUBE_LINK = "https://www.youtube.com/@Sinala-l9m";
export const LOCATION = "Bulawayo, Zimbabwe";

export const SERVICES: Service[] = [
  {
    id: 'consultancy',
    title: 'Expert Consultancy',
    price: '$25 (Free with tree purchase)',
    description: 'Get professional orchard planning advice, soil matching, and spacing recommendations from our experienced horticulturists.',
    iconName: 'ClipboardCheck',
    details: ['Site suitability analysis', 'Soil preparation recommendations', 'Variety pairing for maximum yield', 'Rebatable upon purchasing your trees']
  },
  {
    id: 'planting_guide',
    title: 'Step-by-Step Planting Guide',
    price: 'Free with tree purchase',
    description: 'A comprehensive guide customized for the Bulawayo climate, ensuring optimal root development and growth acceleration.',
    iconName: 'BookOpen',
    details: ['Digging size and spacing specifications', 'Manure and fertilizer ratios', 'Watering schedule for first 12 months', 'Available for a small fee if trees are bought elsewhere']
  },
  {
    id: 'planting_service',
    title: 'Professional Planting',
    price: 'Affordable Custom Fee',
    description: 'Let our trained nursery team do the heavy lifting. We excavate, enrich, and plant your orchard with perfect alignment and technique.',
    iconName: 'Sprout',
    details: ['Expert pit preparation & enrichment', 'Careful root transplanting', 'Initial growth boosting treatment', 'Post-planting health verification']
  },
  {
    id: 'grafting',
    title: 'Advanced Grafting Service',
    price: 'Affordable Custom Fee',
    description: 'In-situ grafting or nursery grafting of fruit trees to introduce high-yield exotic varieties to sturdy, climate-adapted local rootstocks.',
    iconName: 'Scissors',
    details: ['Grafting exotic varieties on local stock', 'Bridge grafting for injured trees', 'Multi-variety grafting (e.g. multiple citrus on one tree)', 'High success rate guaranteed']
  },
  {
    id: 'germinating',
    title: 'Specialized Germination',
    price: 'Affordable Custom Fee',
    description: 'Bring your seeds or custom botanical specimens, and we will germinate them under state-of-the-art controlled nursery conditions.',
    iconName: 'Flower2',
    details: ['Seed stratification & priming', 'High-germination rate substrates', 'Hardening-off phase for young shoots', 'Bulk seed propagation options']
  },
  {
    id: 'irrigation',
    title: 'Orchard Plumbing & Drip Irrigation',
    price: 'Free Quote & Planning',
    description: 'Efficient, custom-designed water delivery systems. Maximize tree growth while minimizing water waste in arid regional climates.',
    iconName: 'Droplets',
    details: ['Drip irrigation layout and plumbing', 'Water tank integration', 'Zone control and automatic timers', 'Highly efficient Bulawayo-friendly designs']
  }
];

export const LAYBYE_PACKAGES: LaybyePackage[] = [
  // 12 Months
  { id: '12m_50', trees: 50, durationMonths: 12, pricePerMonth: 45 },
  { id: '12m_75', trees: 75, durationMonths: 12, pricePerMonth: 60, isPopular: true },
  { id: '12m_100', trees: 100, durationMonths: 12, pricePerMonth: 70 },
  // 6 Months
  { id: '6m_25', trees: 25, durationMonths: 6, pricePerMonth: 45 },
  { id: '6m_50', trees: 50, durationMonths: 6, pricePerMonth: 75 },
  { id: '6m_75', trees: 75, durationMonths: 6, pricePerMonth: 100 },
  { id: '6m_100', trees: 100, durationMonths: 6, pricePerMonth: 115 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sibonokuhle Ndlovu',
    role: 'Retirement Planner & Farmer',
    location: 'Lupane / Bulawayo',
    content: 'The Eden Lifestyle way transformed how I view my retirement. I took the 100-tree laybye package last year. Every single grafted mango and avocado is thriving, and their step-by-step planting guide made it fool-proof!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ephraim Sibanda',
    role: 'Commercial Orchard Investor',
    location: 'Matopos Road, Bulawayo',
    content: 'Quality can never be substituted indeed. The Eden team did the drip irrigation plumbing and planted 300 grafted citrus and nut trees for me. Their grafting expertise is the best in Matabeleland.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Thembeka Khumalo',
    role: 'Smallholder Farmer',
    location: 'Gwanda District',
    content: 'Paying for 75 exotic fruit trees over 12 months made it so affordable. Creating generational wealth for my children is now a reality. Excellent consulting and customer care!',
    rating: 5
  }
];

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  // 1. GRAFTED / EXOTIC FRUIT TREES
  { id: 'g1', name: 'Orange', emoji: '🍊', category: 'grafted', grafted: true },
  { id: 'g2', name: 'Nartjie (Tangerine)', emoji: '🍊', category: 'grafted', grafted: true },
  { id: 'g3', name: 'Litchie', emoji: '🍈', category: 'grafted', grafted: true },
  { id: 'g4', name: 'Mango', emoji: '🥭', category: 'grafted', grafted: true },
  { id: 'g5', name: 'Nectarine', emoji: '🍑', category: 'grafted', grafted: true },
  { id: 'g6', name: 'Plum', emoji: '🍒', category: 'grafted', grafted: true },
  { id: 'g7', name: 'Pear', emoji: '🍐', category: 'grafted', grafted: true },
  { id: 'g8', name: 'Peach', emoji: '🍒', category: 'grafted', grafted: true },
  { id: 'g9', name: 'Kiwi', emoji: '🥝', category: 'grafted', grafted: true },
  { id: 'g10', name: 'Grapefruit', emoji: '🍋', category: 'grafted', grafted: true },
  { id: 'g11', name: 'Apple', emoji: '🍎', category: 'grafted', grafted: true },
  { id: 'g12', name: 'Avocado', emoji: '🥑', category: 'grafted', grafted: true },
  { id: 'g13', name: 'Custard Apple', emoji: '🍈', category: 'grafted', grafted: true },
  { id: 'g14', name: 'Cashew Nut', emoji: '🥝', category: 'grafted', grafted: true },
  { id: 'g15', name: 'Almond Nut', emoji: '🥜', category: 'grafted', grafted: true },
  { id: 'g16', name: 'Macadamia Nut', emoji: '🥜', category: 'grafted', grafted: true },
  { id: 'g17', name: 'Pecan Nut', emoji: '🥜', category: 'grafted', grafted: true },
  { id: 'g18', name: 'Chestnut', emoji: '🌰', category: 'grafted', grafted: true },
  { id: 'g19', name: 'Blueberries', emoji: '🫐', category: 'grafted', grafted: true },
  { id: 'g20', name: 'Grapes', emoji: '🍇', category: 'grafted', grafted: true },
  { id: 'g21', name: 'Figs', emoji: '🍒', category: 'grafted', grafted: true },
  { id: 'g22', name: 'Mulberry', emoji: '🍇', category: 'grafted', grafted: true },
  { id: 'g23', name: 'Grafted Lemon', emoji: '🍋', category: 'grafted', grafted: true },
  { id: 'g24', name: 'Dragon Fruit', emoji: '🌵', category: 'grafted', grafted: true },
  { id: 'g25', name: 'Olives', emoji: '🫒', category: 'grafted', grafted: true },
  { id: 'g26', name: 'Pomegranate', emoji: '🍎', category: 'grafted', grafted: true },
  { id: 'g27', name: 'Apricot', emoji: '🍑', category: 'grafted', grafted: true },
  { id: 'g28', name: 'Cherries', emoji: '🍒', category: 'grafted', grafted: true },
  { id: 'g29', name: 'Sweet Potato Vines', emoji: '🌱', category: 'grafted', grafted: false },

  // 2. NON GRAFTED FRUIT TREES
  { id: 'ng1', name: 'Rose Apple', emoji: '🍎', category: 'nongrafted', grafted: false },
  { id: 'ng2', name: 'Lemon (Non-grafted)', emoji: '🍋', category: 'nongrafted', grafted: false },
  { id: 'ng3', name: 'Guava', emoji: '🍈', category: 'nongrafted', grafted: false },
  { id: 'ng4', name: 'Raspberry', emoji: '🍓', category: 'nongrafted', grafted: false },
  { id: 'ng5', name: 'Granadilla (Passion Fruit)', emoji: '🍇', category: 'nongrafted', grafted: false },
  { id: 'ng6', name: 'Banana', emoji: '🍌', category: 'nongrafted', grafted: false },
  { id: 'ng7', name: 'Pawpaw Local', emoji: '🥭', category: 'nongrafted', grafted: false },
  { id: 'ng8', name: 'Pawpaw (Improved)', emoji: '🥭', category: 'nongrafted', grafted: false },
  { id: 'ng9', name: 'Passion Fruit', emoji: '🍇', category: 'nongrafted', grafted: false },
  { id: 'ng10', name: 'Strawberry', emoji: '🍓', category: 'nongrafted', grafted: false },
  { id: 'ng11', name: 'Cassava', emoji: '🍠', category: 'nongrafted', grafted: false },
  { id: 'ng12', name: 'Soursop', emoji: '🍏', category: 'nongrafted', grafted: false },
  { id: 'ng13', name: 'Loquat', emoji: '🍊', category: 'nongrafted', grafted: false },
  { id: 'ng14', name: 'Mexican Apple', emoji: '🍏', category: 'nongrafted', grafted: false },
  { id: 'ng15', name: 'Pecan Nut Standard', emoji: '🥜', category: 'nongrafted', grafted: false },
  { id: 'ng16', name: 'Coconut', emoji: '🥥', category: 'nongrafted', grafted: false },
  { id: 'ng17', name: 'Tree Tomato', emoji: '🍅', category: 'nongrafted', grafted: false },

  // 3. INDIGENOUS FRUIT TREES
  { id: 'ind1', name: 'Tamarind', emoji: '🫘', category: 'indigenous' },
  { id: 'ind2', name: 'Moringa', emoji: '🌿', category: 'indigenous' },
  { id: 'ind3', name: 'Mnyi', emoji: '🍒', category: 'indigenous' },
  { id: 'ind4', name: 'Xakuxaku (Snot Apple)', emoji: '🍎', category: 'indigenous' },
  { id: 'ind5', name: 'Mviyo (Wild Medlar)', emoji: '🫒', category: 'indigenous' },
  { id: 'ind6', name: 'Mqokolo (Kei Apple)', emoji: '🍒', category: 'indigenous' },
  { id: 'ind7', name: 'Mthunduluka (Red Milkwood)', emoji: '🍒', category: 'indigenous' },
  { id: 'ind8', name: 'Mkhemeswane (Sand Apricot-vine)', emoji: '🍑', category: 'indigenous' },
  { id: 'ind9', name: 'Mtshwankela', emoji: '🍇', category: 'indigenous' },
  { id: 'ind10', name: 'Mbumbulu', emoji: '🫒', category: 'indigenous' },
  { id: 'ind11', name: 'Baobab (Umpopo)', emoji: '🌳', category: 'indigenous' },
  { id: 'ind12', name: 'Isagogwana', emoji: '🌱', category: 'indigenous' },
  { id: 'ind13', name: 'Umgugudu', emoji: '🌳', category: 'indigenous' },
  { id: 'ind14', name: 'Umvebe (Sausage Tree)', emoji: '🥒', category: 'indigenous' },
  { id: 'ind15', name: 'Umdlawuzo', emoji: '🍒', category: 'indigenous' },
  { id: 'ind16', name: 'Mgojomba / Umvukhuvukhu', emoji: '🍇', category: 'indigenous' },
  { id: 'ind17', name: 'Bhunzu', emoji: '🫒', category: 'indigenous' },
  { id: 'ind18', name: 'Mhagawuwe', emoji: '🍒', category: 'indigenous' },
  { id: 'ind19', name: 'Amahobohobo (Wild Loquat)', emoji: '🍊', category: 'indigenous' },
  { id: 'ind20', name: 'Iqokolo', emoji: '🍒', category: 'indigenous' },

  // 4. SHADE TREES
  { id: 'sh1', name: 'Siringa', emoji: '🌳', category: 'shade' },
  { id: 'sh2', name: 'Mkhaya', emoji: '🌳', category: 'shade' },
  { id: 'sh3', name: 'Jacaranda', emoji: '🌸', category: 'shade' },
  { id: 'sh4', name: 'Others', emoji: '🌳', category: 'shade' },

  // 5. HERBS
  { id: 'hb1', name: 'Rosemary', emoji: '🌿', category: 'herbs' },
  { id: 'hb2', name: 'Lemon Grass', emoji: '🌱', category: 'herbs' },
  { id: 'hb3', name: 'Basil', emoji: '🌿', category: 'herbs' },
  { id: 'hb4', name: 'Mint', emoji: '🌿', category: 'herbs' },
  { id: 'hb5', name: 'Wormwood', emoji: '🌱', category: 'herbs' },
  { id: 'hb6', name: 'Peppers (Cayenne)', emoji: '🌶️', category: 'herbs' },
  { id: 'hb7', name: 'Stinging Nettle', emoji: '🌿', category: 'herbs' },
  { id: 'hb8', name: 'Bay Leaf', emoji: '🍃', category: 'herbs' },
  { id: 'hb9', name: 'Snake Repellent Plant', emoji: '🐍', category: 'herbs' },
  { id: 'hb10', name: 'Lavender', emoji: '🪻', category: 'herbs' },
  { id: 'hb11', name: 'Turmeric', emoji: '🫚', category: 'herbs' },
  { id: 'hb12', name: 'Black Pepper', emoji: '🫘', category: 'herbs' },
  { id: 'hb13', name: 'Toothache Flower', emoji: '🌼', category: 'herbs' },
  { id: 'hb14', name: 'Cinnamon', emoji: '🪵', category: 'herbs' },
  { id: 'hb15', name: 'Cloves', emoji: '🫘', category: 'herbs' },

  // 6. ORNAMENTAL SHRUBS AND FLOWERS
  { id: 'or1', name: 'Roses', emoji: '🌹', category: 'ornamental' },
  { id: 'or2', name: 'Palms', emoji: '🌴', category: 'ornamental' },
  { id: 'or3', name: 'Crotons', emoji: '🌿', category: 'ornamental' },
  { id: 'or4', name: 'Jurantas (Durantas)', emoji: '🌸', category: 'ornamental' }
];
