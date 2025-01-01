import { Home,
    Product,
    AddProduct,
    ProductDetail,
    Category,
    AddCategory,
    CategoryDetail,
    Order,
    OrderDetail,
} from "../views";

import { RootLayout } from "../views";
const createRoute = (path:string, component:any) => ({ path, component });

export const routes = [
    {
        path: "",
        component: RootLayout,
        children: [
            createRoute("/", Home),
            createRoute("/product", Product),
            createRoute("/add-product", AddProduct),
            createRoute("/product-detail/:productId", ProductDetail),
            createRoute("/categories", Category),
            createRoute("/add-category", AddCategory),
            createRoute("/category-detail/:categoryId", CategoryDetail),
            createRoute("/order", Order),
            createRoute("/order-detail/:orderId", OrderDetail),
        ]
    }
]
