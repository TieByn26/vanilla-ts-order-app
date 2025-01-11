import { findData } from "../services";
import { ProductIntro } from "../models";
import { ProductMapper } from "../models";

export class FindProduct {
    private products: ProductIntro[] = [];

    public async init(url = ""): Promise<void> {
        try {
            const data = await findData<any[]>(`/products${url}`);
            data.map((product) => {
                this.products.push(ProductMapper.toProductIntro(product));
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    public getProducts(): ProductIntro[] {
        return this.products;
    }
}
