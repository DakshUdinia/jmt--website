export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  itemCode?: string;
}

// Fridge magnet products (FM-1 to FM-41, prices ₹18-₹25)
function generateFridgeMagnets(): Product[] {
  const magnets: Product[] = [];
  for (let i = 1; i <= 41; i++) {
    const price = i <= 10 ? 18 : i <= 20 ? 20 : i <= 30 ? 22 : i <= 37 ? 24 : 25;
    magnets.push({
      id: i,
      name: `Fridge Magnet FM-${i}`,
      category: 'fridge_magnets',
      price: `₹${price}`,
      image: `/products/fridge-magnets/FM-${i}.jpg`,
      itemCode: `FM-${i}`,
    });
  }
  return magnets;
}

// Table calendar products (TC-1 to TC-38)
function generateTableCalendars(): Product[] {
  const calendars: Product[] = [];
  for (let i = 1; i <= 38; i++) {
    // Pricing as specified:
    // 1-8: ₹100 | 9: ₹170 | 10-13: ₹150 | 14: ₹300 | 15-16: ₹150 | 17: ₹250 | 18-38: ₹270
    let price: number;
    if (i <= 8) price = 100;
    else if (i === 9) price = 170;
    else if (i <= 13) price = 150;
    else if (i === 14) price = 300;
    else if (i <= 16) price = 150;
    else if (i === 17) price = 250;
    else price = 270;

    calendars.push({
      id: 500 + i,
      name: `Table Calendar TC-${i}`,
      category: 'calendars',
      price: `₹${price}`,
      image: `/products/table-calendars/TC-${i}.jpg`,
      itemCode: `TC-${i}`,
    });
  }
  return calendars;
}

function getWallHangingPrice(itemNumber: number): number {
  if (itemNumber >= 12 && itemNumber <= 42) return 160;
  if (itemNumber === 43) return 130;
  if (itemNumber >= 44 && itemNumber <= 45) return 160;
  if (itemNumber >= 46 && itemNumber <= 47) return 130;
  if (itemNumber >= 48 && itemNumber <= 52) return 160;
  if (itemNumber >= 53 && itemNumber <= 55) return 150;
  if (itemNumber >= 56 && itemNumber <= 58) return 140;
  if (itemNumber === 59) return 160;
  if (itemNumber >= 60 && itemNumber <= 61) return 140;
  if (itemNumber >= 62 && itemNumber <= 65) return 150;
  if (itemNumber === 66) return 140;
  if (itemNumber >= 67 && itemNumber <= 68) return 150;

  throw new Error(`Unsupported wall hanging item number: ${itemNumber}`);
}

function generateWallHangings(): Product[] {
  const wallHangings: Product[] = [];

  for (let i = 12; i <= 68; i++) {
    wallHangings.push({
      id: 700 + i,
      name: `Wooden Wall Hanging WH-${i}`,
      category: 'wall_hangings',
      price: `₹${getWallHangingPrice(i)}`,
      image: `/products/wall-hangings/WH-${i}.png`,
      itemCode: `WH-${i}`,
    });
  }

  return wallHangings;
}

const fridgeMagnets = generateFridgeMagnets();
const tableCalendars = generateTableCalendars();
const wallHangings = generateWallHangings();

const otherProducts: Product[] = [
  { id: 100, name: 'Corporate Laptop Bag', category: 'bags', price: '₹450', image: 'https://picsum.photos/seed/jmt-bag1/400/300', itemCode: 'BG-1' },
  { id: 101, name: 'Premium School Bag', category: 'bags', price: '₹380', image: 'https://picsum.photos/seed/jmt-bag2/400/300', itemCode: 'BG-2' },
  { id: 102, name: 'Gift Laptop Bag', category: 'bags', price: '₹520', image: 'https://picsum.photos/seed/jmt-bag3/400/300', itemCode: 'BG-3' },
];

export const products: Product[] = [...fridgeMagnets, ...tableCalendars, ...wallHangings, ...otherProducts];

export const productTabs = [
  { key: 'all', label: 'All Products' },
  { key: 'fridge_magnets', label: 'Fridge Magnets' },
  { key: 'calendars', label: 'Table Calendars' },
  { key: 'bags', label: 'Bags' },
  { key: 'wall_hangings', label: 'Wall Hangings' },
];

// Catalog PDFs per category
export interface CatalogPDF {
  title: string;
  category: string;
  file: string;
  size: string;
  description: string;
  available: boolean;
}

export const catalogPDFs: CatalogPDF[] = [
  {
    title: 'Fridge Magnets Catalog',
    category: 'fridge_magnets',
    file: 'https://drive.google.com/file/d/10kNTPCH8p254FaxpaeduDMdgNpkz9EbX/view?usp=drive_link',
    size: 'Google Drive PDF',
    description: 'Browse the latest fridge magnet collection and open the catalog directly in Google Drive.',
    available: true,
  },
  {
    title: 'Table Calendar Catalog',
    category: 'calendars',
    file: 'https://drive.google.com/file/d/1_gWKkp3C_SD0JYQOP0L3mC1XiMagflMH/view?usp=sharing',
    size: 'Google Drive PDF',
    description: 'View the current table calendar catalog with designs, specifications, and pricing details.',
    available: true,
  },
  {
    title: 'Bags Catalog',
    category: 'bags',
    file: 'https://drive.google.com/file/d/1xs3ex573hTQ4H3MrsSjONXeUc5HzgLNW/view?usp=drive_link',
    size: 'Google Drive PDF',
    description: 'Open the bags catalog to explore current corporate and gifting bag options.',
    available: true,
  },
  {
    title: 'Wall Hangings Catalog',
    category: 'wall_hangings',
    file: 'https://drive.google.com/file/d/1JQtOeGhv5zHtfUrixS-CXJPE8GNA9cqe/view?usp=drive_link',
    size: 'Google Drive PDF',
    description: 'Download or preview the wall hangings catalog directly from Google Drive.',
    available: true,
  },
];
