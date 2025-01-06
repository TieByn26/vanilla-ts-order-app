import {
    Product,
    AddProduct,
    ProductDetail,
    Login,
} from "../views";

import { RootLayout } from "../views";
const createRoute = (path:string, component:any) => ({ path, component });

export const routes = [
    {
        path: "",
        component: RootLayout,
        children: [
            createRoute("/", Product),
            createRoute("/login", Login),
            createRoute("/add-product", AddProduct),
            createRoute("/product-detail/:productId", ProductDetail),
        ]
    }
]
