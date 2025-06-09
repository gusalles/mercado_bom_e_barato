import { Product, ProductsResponse } from '@/services';

export const firstProduct: Product = {
  id: 1,
  title: 'Essence Mascara Lash Princess',
  description:
    'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  category: 'beauty',
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  brand: 'Essence',
  warrantyInformation: '1 month warranty',
  thumbnail:
    'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  images: [
    'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
  ],
};

export const secondProduct: Product = {
  id: 2,
  title: 'Chanel Coco Noir Eau De',
  description:
    'Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.',
  category: 'fragrances',
  price: 129.99,
  discountPercentage: 16.51,
  rating: 4.26,
  stock: 58,
  brand: 'Chanel',
  warrantyInformation: '3 year warranty',
  thumbnail:
    'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp',
  images: [
    'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp',
    'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp',
    'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp',
  ],
};

export const productResponseMock: ProductsResponse = {
  limit: 2,
  total: 2,
  maxItensPerPage: 2,
  skip: 0,
  products: [firstProduct, secondProduct],
};
