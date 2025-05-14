export interface ProductVariant {
  size: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  variants: {
    sizes: string[];
    colors: string[];
  };
}