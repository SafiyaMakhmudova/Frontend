<template>
    <nav-bar :is-auth="isAuth" @logout="onLogout"/>
    <!-- <KeepAlive> -->
        <div class="flex" v-for="product of products" :key="product.id">
            <ProductCard :product="product"/>
        </div>
    <!-- </KeepAlive> -->
</template>

<script setup>
import { useHome } from '../composables/home';
import { useLogin } from '../composables/login';

import ProductCard from '../components/ProductCard.vue'
import NavBar from '../components/Navbar.vue';

const { products, onLogout } = useHome()
const { isAuth } = useLogin()

</script>

<style>
.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
