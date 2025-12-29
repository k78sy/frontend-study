<script setup>
let loading = true;

const fruits = ['apple', 'banana', 'pear']
</script>

<template>
    <h3>page 103</h3>
    <template v-if="loading">로딩중</template>
    <div v-else>로딩완료</div>
    <div>{{ loading? '로딩중':'로딩 완료' }}</div>
    <hr>
    <br>
    <div v-show="loading">show 로딩중</div>
    <div v-show="!loading">show 로딩 완료</div>
    <br>
    <hr>
    <br>
    <div v-for="(item,idx) in fruits" :key="idx">{{idx + 1}}. {{ item }}</div>
<!-- {{}} 안에는객체의 속성 혹은 상수, 변수가 들어감 -->
</template>

<style scoped>

</style>