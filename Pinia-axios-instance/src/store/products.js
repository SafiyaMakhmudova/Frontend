import { defineStore } from "pinia";
import { getProducts, getProduct } from "@/api/products";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [],
      product: {},
      loading: false,
    };
  },

  getters: {
    getProducts: (state) => state.products,
  },

  actions: {
    async fetchProducts() {
      this.isLoading(true);
      const res = await getProducts();
      if (!res.data?.products && res.status !== 200) {
        return;
      }
      this.isLoading(false);
      this.products = res.data.products;
    },

    async fetchProduct(id) {
      this.isLoading(true);
      const res = await getProduct(id);
      if (!res.data?.products && res.status !== 200) {
        return;
      }
      this.isLoading(false);
      this.product = res.data;
    },

    isLoading(payload) {
      this.loading = payload;
    },
  },
});
