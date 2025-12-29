<script setup>
import { ref } from 'vue';
let pushUp = 0;
let sitUp = 0;

const refPushUp = ref(0);
const refSitUp = ref(0);

const increasePushUp = () => {
    console.log(`pushUp: ${++pushUp} , refPushUp: ${++refPushUp.value}`)
};
const increaseSitUp = () => {
    console.log(`sitUp:${++sitUp}, refSithUp: ${++refSitUp.value}`)
};
</script>

<template>
<h3>page110</h3>
<h3>체력검사</h3>
<br>
<hr>
<br>
<ul>
    <li id="pushUp">팔 굽혀 펴기: {{ pushUp }}</li>
    <li id="sitUp">윗몸 일으키기: {{ sitUp }}</li>
</ul>
<ul>
    <li id="pushUp">ref 팔 굽혀 펴기: {{ refPushUp }}</li>
    <li id="sitUp">ref 윗몸 일으키기: {{ refSitUp }}</li>
</ul>
<br>
<hr>
<br>
<button @click="increasePushUp">팔 굽혀 펴기 증가</button>
<button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>

<style scoped>

</style>