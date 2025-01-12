import { Product, ProductIntro, PostProductBody, UpdateProduct } from "../types/product";

export class ProductMapper {
  static toProductIntro(data: Product): ProductIntro {
    const { id, sku, name, variant, imageUrl, category, quantity, price, status, added } = data;
    return { id, sku, name, variant, imageUrl, category, quantity, price, status, added }  as ProductIntro;
  }
  
  static toPostProductBody(data: PostProductBody): PostProductBody {
    return { ...data, sales: Number(data.sales), quantity: Number(data.quantity) } as PostProductBody;
  }

  static toUpdateProduct(data: UpdateProduct): UpdateProduct {
    return { ...data, sales: Number(data.sales), quantity: Number(data.quantity) } as UpdateProduct;
  }
}


