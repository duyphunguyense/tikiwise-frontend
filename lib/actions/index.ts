"use server";

import { revalidatePath } from "next/cache";
import AxiosInstance from "@/utils/axiosInstance";
import { Product } from "@/types";

export async function scrapeAndStoreProduct(productUrl: string) {
    try {
        const data: any = await AxiosInstance.post('/api/product/scrape', {
            url: productUrl
        });
        console.log(data);
        revalidatePath(`/products/${data._id}`); //clear cached and refresh page on server side (aka hot reload)
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
}

export async function getProductById(productId: string) {
    try {
        const product: Product = await AxiosInstance.get(`/api/product/${productId}`);

        return product;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllProducts() {
    try {
        const products: Product[] = await AxiosInstance.get('/api/product/trending');

        return products;
    } catch (error) {
        console.log(error);
    }
}

export async function getSimilarProducts(id: string) {
    try {
        const products: Product[] = await AxiosInstance.get(`/api/product/${id}/similar`);

        return products;
    } catch (error) {
        console.log(error);
    }
}

export async function addUserEmailToProduct(productId: string, userEmail: string) {
    try {
        const data: any = await AxiosInstance.post('/api/product/email/user', {
            productId,
            userEmail
        });
    } catch (error) {
        console.log(error);
    }
}