import { axiosApiDeleteData } from ".";

export const deleteProduct = async (id: number) => {
  try {
    await axiosApiDeleteData(`/products/${id}`);
  } catch (err: any) {
    console.log(">>> Message error:", err.message);
  }
};