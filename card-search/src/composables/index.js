import { onMounted, ref } from 'vue';

export function useProduct() {
  const limitSize = ref(null);
  const categorySize = ref("");
  const searchWord = ref("");
  const products = ref([]);

  async function fetchProducts(limit) {
    try {
      const res = await fetch(`http://localhost:3000/products?${limit ? `_limit=${limit}` : ''}`);
      const data = await res.json();
      products.value = data;
      console.log(products.value); // Fix: Assign data.products to products.value
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async function searchProduct() {
    try {
      if (searchWord.value) {
        console.log(searchWord.value);
        const res = await fetch(`http://localhost:3000/products/search?q=${searchWord.value}`);
        const data = await res.json();
        console.log("salom", data);
        products.value = data; // Fix: Assign data.products to products.value
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  }

  async function category() {
    try {
      const res = await fetch(`http://localhost:3000/products`);
      const data = await res.json();
      products.value = data;
      //console.log(products.value);
      for (const i of products.value) {
          if(i.category==searchWord) {
            console.log("true");
          }
      } // Fix: Assign data.products to products.value
    } catch (error) {
      console.error('Error fetching category products:', error);
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
    category,
    categorySize,
  };
}
