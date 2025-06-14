export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  warrantyInformation: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  maxItensPerPage: number;
};
