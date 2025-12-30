<script setup>
import { useRouter } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <router-link 
        v-for="route in routes" 
        :key="route.path" 
        :to="route.path"
      >
      {{ route.meta.menuName || route.path.replace('/', '') }} 
      </router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.router-link-active{
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
}
nav > a{display: inline-block;}
</style>