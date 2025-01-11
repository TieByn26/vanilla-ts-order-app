import { findData } from "../services";
import { ProductIntro } from "../models";
import { ProductMapper } from "../models";
import { Toast } from "../views/components/elements/toast";
import { localImage } from "../assets/images";

export class FindProduct {
    private products: ProductIntro[] = [];

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
