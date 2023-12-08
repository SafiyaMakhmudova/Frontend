import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useCategory() {
  const store = useStore();
  const name = ref('')


  async function searchBtn() {
    if(name.value) {
      await store.dispatch("fetchSearch",name.value);  
    } else {
            
      await store.dispatch("fetchBooks");
    }
  }

  const category = computed(() => store.getters.category);

 
  return {
    category,
    name,
    searchBtn,
  };
}
