import { findData } from "../services";
import { ProductIntro } from "../types/product";
import { ProductMapper } from "../models";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";

export class FindProduct {
    private products: ProductIntro[] = [];

    /**
     * Initialize the products
     * @param url 
     */
    public async init(url = ""): Promise<void> {
        try {
            const data = await findData<any[]>(`/products${url}`);
            data.map((product) => {
                this.products.push(ProductMapper.toProductIntro(product));
            });
        } catch (error) {
            Toast.toastShow("toast-error", localImage("icon_error"), "Error", "Error fetching products!");
        }
    }

    public getProducts(): ProductIntro[] {
        return this.products;
    }
}
