<script setup>
const students = [
  { name: '수영', present: true }, //[0] item
  { name: '준하', present: false },// [1] item
  { name: '가은', present: true },
  { name: '수빈', present: true },
  { name: '예림', present: false },
  { name: '준이', present: true }
];
</script>

<template>
<h3>Mission01.vue</h3>
<!-- v-for로 div태그로 감싸진 학생 이름 출력 -->
<div v-for="(item, idx) in students" :key="idx">{{ item.name }}
    <!-- <template v-if="item.present">출석</template>
    <template v-else>결석</template> -->
    <!-- {{ item.present? '출석':'' }} -->
    <span v-show="item.present">출석</span>
</div>
</template>

<style scoped>

</style>