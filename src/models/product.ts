import { ProductIntro } from "../types/product";
import { PostProductBody } from "../types/product";
import { UpdateProduct } from "../types/product";

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
      sales: Number(data.sales),
      variant: data.variant,
      quantity: Number(data.quantity),
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
      sales: Number(data.sales),
      variant: data.variant,
      quantity: Number(data.quantity),
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

