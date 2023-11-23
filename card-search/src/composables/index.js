import { onMounted, ref } from 'vue';

export function useProduct() {
  const limitSize = ref(null);
  const categorySize = ref(null);
  const searchWord = ref("");
  const products = ref([]);
  const filteredProducts = ref([]);

  async function fetchProducts(limit) {
    try {
      const res = await fetch(`http://localhost:3000/products?${limit ? `_limit=${limit}` : ''}`);
      const data = await res.json();
      products.value = data;
       filteredProducts.value = data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

   async function searchProduct() {
    if (searchWord.value) {
      const res = await fetch(
        `http://localhost:3000/products?q=${searchWord.value}`
      );
      const data = await res.json();
      products.value = data;
    }
  }

  async function category () {
    try {
      if(categorySize.value) {
        const res = await fetch(
          `http://localhost:3000/products?category=${categorySize.value}`
        );
        const data = await res.json();
        products.value = data;
      }
    } catch(error) {
      console.error('Error fetching products:', error);
    }
  }

  function onLimitChange() {
    fetchProducts(limitSize.value);
  }

  onMounted(() => {
    fetchProducts(limitSize.value);
  });

  return {
    products,
    limitSize,
    onLimitChange,
    searchWord,
    searchProduct,
   filteredProducts ,
    categorySize,
    category,
  };
}