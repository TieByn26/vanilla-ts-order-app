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