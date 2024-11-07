import AxiosInstance from "@/utils/axios";

class ProductService {
    static fetchProductSold = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/platform/product/report`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static fetchProduct = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/platform/product`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static deleteProduct = async (id: number): Promise<any> => {
        try {
            const response = await AxiosInstance.delete(`/platform/product/${id}`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static getCategoryProduct = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/platform/product/categories`);
            return response;
        } catch (e) {
            return e;
        }
    };

    static handelGetProductDetail = async (id: number): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/platform/product/${id}`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static createProduct = async (payload: any): Promise<any> => {
        try {
            const response = await AxiosInstance.post(`/platform/product`, payload);
            return response;
        } catch (e) {
            return e;
        }
    };
    static updateProduct = async (payload: any, id: number): Promise<any> => {
        try {
            const response = await AxiosInstance.put(`/platform/product/${id}`, payload);
            return response;
        } catch (e) {
            return e;
        }
    };

}

export default ProductService