<template>
  <form
    class="w-[50%] mx-auto bg-gray-400 shadow-lg p-4 rounded-md"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-2xl text-center mt-3 mb-5 font-semibold">{{ t("login.Login") }}</h2>
    <div class="mb-4">
      <Input
        :label="t('login.username')"
        id="username"
        placeholder="Type username..."
        required
        v-model="username"
      />
    </div>
    <Input
      :label="t('login.password')"
      id="password"
      placeholder="Type password..."
      type="password"
      required
      v-model="password"
    />
    <div class="text-center my-5">
      <Button
        type="submit"
        class="btn-primary"
      >
        {{ t("login.login-btn") }}
      </Button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/auth";

import Button from "@/components/base/base-button.vue";
import Input from "@/components/base/base-input.vue";
import { useI18n } from "vue-i18n";

const { login } = useAuth();
const {t} = useI18n()
const username = ref("kminchelle");
const password = ref("0lelplR");

async function onSubmit() {
  if (!username.value.length && !password.value.length) {
    return;
  }
  await login({
    username: username.value,
    password: password.value,
  });
}
</script>

<style lang="scss" scoped></style>
