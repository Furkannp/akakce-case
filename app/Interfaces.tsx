export interface Data {
  nextUrl: string;
  horizontalProducts: HorizontalProduct[];
  products: Product[];
}

export interface HorizontalProduct {
  code: number;
  imageUrl: string;
  name: string;
  dropRatio: number;
  price: number;
  countOfPrices: number;
  followCount: number;
}

export interface Product {
  code: number;
  imageUrl: string;
  name: string;
  dropRatio: number;
  price: number;
  countOfPrices?: number;
  followCount?: number;
}

export interface ProductDetail {
  mkName: string
  productName: string
  badge: string
  rating: number
  imageUrl: string
  storageOptions: string[]
  countOfPrices: number
  price: number
  freeShipping: boolean
  lastUpdate: string
}
