import { Router } from "./router";

/**
 * Enum for route paths
 * @readonly
 * @enum {String}
 */
export enum RoutesPath {
    Product = "/",
    AddProduct = "/add-product",
    ProductDetail = "/product-detail/:productId",
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

export const getPath: Record<RoutesPath, any > = {
    [RoutesPath.Product]: () => RoutesPath.Product,
    [RoutesPath.AddProduct]: () => RoutesPath.AddProduct,
    [RoutesPath.ProductDetail]: () => replaceParamInPath(RoutesPath.ProductDetail, "productId"),
};

/**
 * Breadcrumb mappings for route paths
 * @type {Record<RoutesPath, string>}
 * @readonly
 */
export const breadcrumbs: Record<RoutesPath, string> = {
    [RoutesPath.Product]: "Product List",
    [RoutesPath.AddProduct]: "Add Product",
    [RoutesPath.ProductDetail]: "Product Details",
};
