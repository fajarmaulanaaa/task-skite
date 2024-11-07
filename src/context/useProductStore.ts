import { CategoryProductModel } from '@/models/categoryModel';
import { } from './../models/productModel';
import { ProductModel, Response } from "@/models/productModel";
import { ProductSoldModel } from "@/models/productSoldModel";
import ProductService from "@/services/productService";
import { showLoading, showMessageError } from "@/utils/reactToastify";
import { toast } from 'react-toastify';
import { create } from "zustand";
import { ProductDetailModel } from '@/models/productDetailModel';

interface FormProduct {
    name: string;
    description: string;
    sku: string;
    stock: number;
    category_id: number;
    price: number;
    image: string;
}

interface ProductState {
    loading: boolean;
    dataProductSold: ProductSoldModel[] | null;
    getDataProductSold: () => void;

    loadingGetProduct: boolean;
    dataProduct: ProductModel | null;
    getProduct: () => void;

    loadingDetail: boolean;
    dataProductDetail: ProductDetailModel | null;
    getProductDetail: (id: any) => void;

    modal: boolean;
    setModal: (value: boolean) => void;
    selectItem: Response | null;
    setSelectItem: (value: Response | null) => void;

    loadingDelete: boolean;
    handleDeleteProduct: (id: number) => void;

    formProduct: FormProduct;
    resetForm: () => void;
    setFormProduct: <K extends keyof FormProduct>(key: K, value: FormProduct[K]) => void;
    resetImage: () => void

    dataCategory: CategoryProductModel | null;
    getDataCategory: () => void;

    loadingCreateorUpdate: boolean;
    handleCreateProduct: () => void;
    handleUpdateProduct: (id: any) => void;

}

const productStore = create<ProductState>((set) => ({
    loading: false,
    dataProductSold: null,
    getDataProductSold: async () => {
        set({ loading: true })
        try {
            const res = await ProductService.fetchProductSold();
            if (res.status === 200) {
                set({ dataProductSold: res.data, loading: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error Get data:', error);
            set({ dataProductSold: null, loading: false, });
        }
    },

    loadingGetProduct: false,
    dataProduct: null,
    getProduct: async () => {
        set({ loadingGetProduct: true })
        try {
            const res = await ProductService.fetchProduct();
            if (res.status === 200) {
                set({ dataProduct: res.data, loadingGetProduct: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error Get data:', error);
            set({ dataProduct: null, loadingGetProduct: false, });
        }
    },

    loadingDetail: false,
    dataProductDetail: null,
    getProductDetail: async (id) => {
        set({ loadingDetail: true })
        try {
            const res = await ProductService.handelGetProductDetail(id);
            if (res.status === 200) {
                console.log(res);

                if (res.data.response !== null) {
                    set({
                        dataProductDetail: res.data, loadingDetail: false,
                        formProduct: {
                            name: res.data.response.name,
                            description: res.data.response.description,
                            sku: res.data.response.sku,
                            stock: res.data.response.stock,
                            category_id: parseInt(res.data.response.category_id),
                            price: res.data.response.price,
                            image: res.data.response.image,
                        }
                    });
                } else {
                    showMessageError(res.response.data.message)
                }
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error Get data:', error);
            set({ dataProductDetail: null, loadingDetail: false, });
        }
    },

    selectItem: null,
    setSelectItem: (value) => {
        set({ selectItem: value })
    },
    modal: false,
    setModal: (value) => {
        if (!value) {
            set({ modal: value, selectItem: null })
        } else {
            set({ modal: value })
        }
    },
    loadingDelete: false,
    handleDeleteProduct: async (id) => {
        const { getProduct } = productStore.getState()
        set({ loadingDelete: true })
        const load = toast.loading("Loading...")
        try {
            const res = await ProductService.deleteProduct(id);
            if (res.status === 200) {
                showLoading(load, 'Delete Success', 'success');
                getProduct()
                set({ modal: false, loadingDelete: false, selectItem: null });
            } else {
                showLoading(load, res.response ? res.response.data.status_message : 'Something went wrong', 'error');
            }
        } catch (error) {
            showLoading(load, 'Something went wrong', 'error');
            console.error('Error Get data:', error);
            set({ loadingDelete: false, });
        }
    },

    formProduct: {
        name: '',
        description: '',
        sku: '',
        stock: 0,
        category_id: 1,
        price: 0,
        image: ''
    },
    resetForm: () => {
        set({
            formProduct: {
                name: '',
                description: '',
                sku: '',
                stock: 0,
                category_id: 1,
                price: 0,
                image: ''
            }
        })
    },
    setFormProduct: (key, value) =>
        set((state) => ({
            formProduct: {
                ...state.formProduct,
                [key]: value,
            },
        })),
    resetImage: () => set((state) => ({
        formProduct: { ...state.formProduct, image: '' }
    })),

    dataCategory: null,
    getDataCategory: async () => {
        try {
            const res = await ProductService.getCategoryProduct();
            if (res.status === 200) {
                set({ dataCategory: res.data, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error Get data:', error);
            set({ dataCategory: null, });
        }
    },
    loadingCreateorUpdate: false,
    handleCreateProduct: async () => {
        const { formProduct } = productStore.getState()
        set({ loadingCreateorUpdate: true })
        const load = toast.loading("Loading...")
        const payload = formProduct;
        try {
            const res = await ProductService.createProduct(payload);
            if (res.status === 200) {
                showLoading(load, 'Create Success', 'success');
                set({ loadingCreateorUpdate: false, });
                setTimeout(() => {
                    window.location.href = "/products";
                }, 1000)
            } else {
                showLoading(load, res.response ? res.response.data.status_message : 'Something went wrong', 'error');
            }
        } catch (error) {
            showLoading(load, 'Something went wrong', 'error');
            console.error('Error Get data:', error);
            set({ loadingCreateorUpdate: false, });
        }
    },
    handleUpdateProduct: async (id) => {
        const { formProduct } = productStore.getState()
        set({ loadingCreateorUpdate: true })
        const load = toast.loading("Loading...")
        const payload = formProduct;
        try {
            const res = await ProductService.updateProduct(payload, id);
            if (res.status === 200) {
                showLoading(load, 'Update Success', 'success');
                set({ loadingCreateorUpdate: false, });
                setTimeout(() => {
                    window.location.href = "/products";
                }, 1000)
            } else {
                showLoading(load, res.response ? res.response.data.status_message : 'Something went wrong', 'error');
            }
        } catch (error) {
            showLoading(load, 'Something went wrong', 'error');
            console.error('Error Get data:', error);
            set({ loadingCreateorUpdate: false, });
        }
    },

}))

export default productStore;