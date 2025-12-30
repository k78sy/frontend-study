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
nav > a { display: inline-block; }
</style>