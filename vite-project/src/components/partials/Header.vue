<script setup>
    const menu = ['Home', "Features", "Community", "Blog", "Pricing"]
</script>

<template>
  <nav class="header">
    <div class="navbar-content">
      <img src="../../components/icons/Icon(1).png" alt="" />
      <a class="" href="#">Nexcent</a>
    </div>
    <div class="right">
      <ul class="links">
        <li v-for="(item, index) in menu" :key="index">{{ item }}</li>
      </ul>
      <button class="btn">
        Register Now <img src="../../components/icons/Down.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  padding: 1px;
}

.navbar-content {
  color: #263238;
  font-size: larger;
  width: 107.54px;
  height: 16.71px;
  gap: 5.57px;
  padding-left: 35px;
}

.right {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 50%;
  color: #4d4d4d;
  font-size: small;
  list-style-type: none;
}
</style>
