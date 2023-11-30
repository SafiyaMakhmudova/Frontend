<template>
    <div>
        <div>
            <input type="text" v-model="username"/>
        </div>
        <div>
            <input type="password" v-model="password"/>
        </div>
        <button @click="onLogin">Login</button>
    </div>
</template>

<script setup>
import { useLogin } from '../composables/login';

const {
    username,
    password,
    onLogin
} = useLogin()
</script>