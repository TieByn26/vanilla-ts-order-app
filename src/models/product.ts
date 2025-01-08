export type Product = {
  id: number;
  sku: string;
  name: string;
  sales: number;
  variant: string;
  quantity: number;
  amount: string;
  price: string;
  status: string;
  added: string;
  description: string;
  category: string;
  imageUrl: string;
  barcode: string;
};
export type ProductIntro = Pick<
  Product,
  | "id" 
  | "name" 
  | "variant"
  | "imageUrl"
  | "sku"
  | "category"
  | "quantity" 
  | "price"
  | "status" 
  | "added"
>;

export type PostProductBody = Pick<
  Product,
  | "sku"
  | "name"
  | "sales"
  | "variant"
  | "quantity"
  | "amount"
  | "price"
  | "status"
  | "added"
  | "description"
  | "category"
  | "imageUrl"
  | "barcode"
>;

export type UpdateProduct = Pick<
  Product,
  | "id"
  | "sku"
  | "name"
  | "sales"
  | "variant"
  | "quantity"
  | "amount"
  | "price"
  | "status"
  | "added"
  | "description"
  | "category"
  | "imageUrl"
  | "barcode"
>;

export class ProductMapper {
  static toProductIntro(data: any): ProductIntro {
    return {
      id: data.id,
      sku: data.sku,
      name: data.name,
      variant: data.variant,
      imageUrl: data.imageUrl,
      category: data.category,
      quantity: data.quantity,
      price: data.price,
      status: data.status,
      added: data.added,
    };
  }

  static toPostProductBody(data: any): PostProductBody {
    return {
      sku: data.sku,
      name: data.name,
      sales: data.sales,
      variant: data.variant,
      quantity: data.quantity,
      amount: data.amount,
      price: data.price,
      status: data.status,
      added: data.added,
      description: data.description,
      category: data.category,
      imageUrl: data.imageUrl,
      barcode: data.barcode,
    };
  }
  static toUpdateProduct(data: any): UpdateProduct {
    return {
      id: data.id,
      sku: data.sku,
      name: data.name,
      sales: data.sales,
      variant: data.variant,
      quantity: data.quantity,
      amount: data.amount,
      price: data.price,
      status: data.status,
      added: data.added,
      description: data.description,
      category: data.category,
      imageUrl: data.imageUrl,
      barcode: data.barcode,
    };
  }
}

