import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

export function useProducts() {
  const store = useProductsStore();
  const router = useRouter();
  const route = useRoute();
  const { products, product, loading } = storeToRefs(store);
  const { fetchProducts, fetchProduct } = useProductsStore();

  return {
    router,
    route,
    products,
    product,
    fetchProducts,
    fetchProduct,
    loading,
  };
}
