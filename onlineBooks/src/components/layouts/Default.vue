<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useBook } from "../../composables/book";
const {id} = useBook()

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchCategory");
});

onMounted(async () => {
  await store.dispatch("fetchBooks");
});



</script>

<style lang="scss" scoped></style>
