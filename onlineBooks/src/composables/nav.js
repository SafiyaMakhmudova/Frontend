import { computed } from "vue";
import { useStore } from "vuex";

export function useCategory() {
  const store = useStore();
  const category = computed(() => store.getters.category);

 
  return {
    category,
  };
}
