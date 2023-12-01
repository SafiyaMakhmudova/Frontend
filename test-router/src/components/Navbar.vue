<template>
    <n-space justify="space-between" style="height: 50px; padding: 10px 15px;  background: #d4d4d4;">
        <n-space justify="space-between">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
        </n-space>
        <router-link class="link" v-if="!isAuth" :to="{ name: 'login' }">Login</router-link>
        <button class="logoutBtn" v-else @click="$emit('logout')">Logout</button>
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

.logoutBtn {
    margin-right: 30px;
    width: 100%;
    height: 30px;
    font-size: 18px;
    border: 1px solid rgb(65,105,225);
    border-radius: 7px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(100,149,237);
}

.link {
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.router-link-exact-active {
    color: blue;
}
</style>