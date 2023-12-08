import { computed } from "vue";
import { useStore } from "vuex";

export function useHome() {
  const store = useStore();

  async function getCategory(name) {
    await store.dispatch("fetchName",name);  
    }

  const loading = computed(() => store.state.loading);
  const categores = computed(() => store.getters.categores);

  const books = computed(() => store.getters.books);


  return {
    books,
    loading,
    getCategory,
    categores
  };
}
