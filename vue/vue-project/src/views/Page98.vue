<script setup>
let loading = true;
const parent = ['fruits','abc'];
const child = 'item';

const visible = { fruit: true, abc:true };
const hidden = { fruit: false, abc:true }; 
// 속성명이 같을 뿐 다른 객체임

const rect = {
    backgroundColor: 'red',
    width:'200px',
    height:'100px'
}
</script>

<template>
<h3>page98</h3>
    <input type="text" placeholder="아이디" :readonly="loading">
    <input type="password" placeholder="비밀번호" :readonly="loading">
    <button :disabled="loading">로그인</button>
    <br>
    <hr>
    <br>
    <ul :class="parent" class="fruit">
        <li :class="child">사과</li>
        <li :class="child">바나나</li>
        <li :class="child">딸기</li>
        <li :class="child">배</li>
    </ul>
    <br>
    <hr>
    <br>
    <div :class="visible">사과</div>
    <div :class="hidden">오이</div>
    <div :class="{fruit:true}">배</div>
    <br>
    <hr>
    <br>
    <div :style="rect"></div>
</template>

<style scoped>
.fruit{color: red;}
</style>
