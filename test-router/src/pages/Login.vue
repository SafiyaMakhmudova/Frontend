<template>
    <div class="box">
        <h2>LOGIN</h2>
        <div class="box-input">
            <input class="input" type="text" v-model="username"/>
        </div>
        <div class="box-input">
            <input class="input" type="password" v-model="password"/>
        </div>
        <button class="btn" @click="onLogin">Login</button>
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

<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.box {
    border: 1px solid rgb(65,105,225);
    text-align: center;
    margin: 100px 200px;
    padding: 60px;
    border-radius: 10px;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

h2 {
    margin-bottom: 30px;
    color:rgb(65,105,225);
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif  ;
}

.input{
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    font-size: 18px;
}

.box-input {
    margin-left: 100px;
    width: 70%;
    margin-top: 15px;
    list-style: none;
}

.btn {
    border: 1px solid rgb(65,105,225);
    font-size: 24px;
    background-color: rgb(65,105,225);
    color: azure;
    margin-top: 10px;
    border-radius: 7px;
    width: 70%;
    margin-right: 30px;

}

</style>