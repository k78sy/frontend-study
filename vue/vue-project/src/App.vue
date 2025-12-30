<script setup>
import { globalState } from '@/globalState';
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in globalState" :to="`/${item}`" :key="item">{{ item }}</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.router-link-active{
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
}
nav > a { display: inline-block; }
</style>