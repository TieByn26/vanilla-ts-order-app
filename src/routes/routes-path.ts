import { Router } from "./router";

/**
 * Enum for route paths
 * @readonly
 * @enum {String}
 */
export enum RoutesPath {
    Home = "/",
    Product = "/product",
    AddProduct = "/add-product",
    ProductDetail = "/product-detail/:productId",
    Categories = "/categories",
    AddCategory = "/add-category",
    CategoryDetail = "/category-detail/:categoryId",
    Order = "/order",
    OrderDetail = "/order-detail/:orderId",
    Customer = "/customer", 
    CustomerDetail = "/customer-detail/:customerId",
    Seller = "/seller"
}
/**
 * Replace param in path with actual value from URL
 * @returns {string} - Route path with param replaced
 */
const replaceParamInPath = (path: string, paramKey: string): string => {
    const params: Record<string, string> = Router.extractParams(location.pathname, path);
    if (!params[paramKey]) {
        throw new Error(`Param "${paramKey}" not found in path.`);
    }
    return path.replace(`:${paramKey}`, params[paramKey]);
};

export const getPath = {
    [RoutesPath.Home]: () => RoutesPath.Home,
    [RoutesPath.Product]: () => RoutesPath.Product,
    [RoutesPath.AddProduct]: () => RoutesPath.AddProduct,
    [RoutesPath.ProductDetail]: () => replaceParamInPath(RoutesPath.ProductDetail, "productId"),
    [RoutesPath.Categories]: () => RoutesPath.Categories,
    [RoutesPath.AddCategory]: () => RoutesPath.AddCategory,
    [RoutesPath.CategoryDetail]: () => replaceParamInPath(RoutesPath.CategoryDetail, "categoryId"),
    [RoutesPath.Order]: () => RoutesPath.Order,
    [RoutesPath.OrderDetail]: () => replaceParamInPath(RoutesPath.OrderDetail, "orderId"),
    [RoutesPath.Customer]: () => RoutesPath.Customer,
    [RoutesPath.CustomerDetail]: () => replaceParamInPath(RoutesPath.CustomerDetail, "customerId"),
    [RoutesPath.Seller]: () => RoutesPath.Seller
};

/**
 * Breadcrumb mappings for route paths
 * @type {Record<RoutesPath, string>}
 * @readonly
 */
export const breadcrumbs: Record<RoutesPath, string> = {
    [RoutesPath.Home]: "Dashboard",
    [RoutesPath.Product]: "Product List",
    [RoutesPath.AddProduct]: "Add Product",
    [RoutesPath.ProductDetail]: "Product Details",
    [RoutesPath.Categories]: "Categories",
    [RoutesPath.AddCategory]: "Add Category",
    [RoutesPath.CategoryDetail]: "Category Details",
    [RoutesPath.Order]: "Order List",
    [RoutesPath.OrderDetail]: "Order Details",
    [RoutesPath.Customer]: "Customer List",
    [RoutesPath.CustomerDetail]: "Customer Details",
    [RoutesPath.Seller]: "Seller Dashboard",
};
