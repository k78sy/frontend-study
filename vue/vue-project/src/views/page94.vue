<!-- 로직 담당 -->
<script setup>
const message = 'There';
const message2 = {
  name: 'Kim',
  age: 20,
};
const isActive = true;
const hasError = true;
</script>

<!-- 화면 View 담당-->
<template>
  <br />
  <br />
  <div :class="{ active: isActive, 'text-danger': hasError }"">Hello {{ message2.name }}</div>
  <br />
  <br />
  <hr />
  <br />
  <br />
  <div>Hello {{ message2 }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message2"></span>
  </div>
  <br />
  <br />
  <hr />
  <br />
  <br />
  <div>Hello {{ message }}</div>
  <div>
    <span>Hello </span>
    <span v-text="message"></span>
  </div>
  <br />
  <br />
  <br />
</template>
<style scoped>
    .active{font-weight: bold;color: red;}
</style>
