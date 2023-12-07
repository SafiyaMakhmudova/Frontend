import { computed } from "vue";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export function useBook() {
  const store = useStore();
  const id = ref()

  async function bookDetail(index) {
    console.log(index);
        await store.dispatch("fetchSingleBook",index);  
    }

    const book = computed(() => store.getters.book);

  return {
    bookDetail,
    book,
  };
}
