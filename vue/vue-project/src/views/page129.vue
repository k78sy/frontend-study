<script setup>
import { onMounted, onUpdated, onUnmounted, reactive } from 'vue';
//라이프사이클 훅
onMounted(() => { console.log('onMounted'); });
onUpdated(() => { console.log('onUpdated'); });
onUnmounted(() => { console.log('onUnmounted'); });
const state = reactive({
    val: 0
})
const increaseVal = () => state.val++;
</script>

<template>
<h3>Page129</h3>
<div>{{ state.val }}</div>
<div><button @click="increaseVal">증가</button></div>
</template>

<style scoped>

</style>