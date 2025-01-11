import { axiosApiDeleteData } from ".";

export const deleteProduct = async (id: number) => {
  try {
    await axiosApiDeleteData(`/products/${id}`);
  } catch (err: any) {
    return err.message;
  }
};