<template>
    <n-space justify="space-between" style="height: 50px; padding: 10px 15px;  background: #d4d4d4;">
        <n-space justify="space-between">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
        </n-space>
        <router-link class="link" v-if="!isAuth" :to="{ name: 'login' }">Login</router-link>
        <button v-else @click="$emit('logout')">Logout</button>
    </n-space>
</template>

<script setup>
import { NSpace } from 'naive-ui'

defineProps({
    isAuth: {
        type: Boolean,
        default: true
    }
})
</script>
<style scoped>

.link {
    color: black;
    text-decoration: none;
}
.router-link-exact-active {
    color: blue;
}
</style>