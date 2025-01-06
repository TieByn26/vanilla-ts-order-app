
import { Category } from "./category";
import { ProductImage } from "./product-image";

export type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  regularPrice: number;
  salePrice: number;
  sku: string;
  sales: number;
  categoryId: number;
  brandId: number;
  category: Category;
  productImages: ProductImage[];
};

export type PostProductBody = Pick<
  Product,
  | "name"
  | "description"
  | "quantity"
  | "regularPrice"
  | "salePrice"
  | "sku"
  | "sales"
  | "brandId"
  | "categoryId"
>;
