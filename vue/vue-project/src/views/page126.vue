<script setup>
import { onMounted, reactive } from 'vue'; // {}: 함수/변수/상수 불러오고 싶을때
import axios from 'axios'; // {}없 : 객체 주소값 리턴할 때

const state = reactive({
    imgList:[]
})

onMounted(() => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
        // .then( res => console.log(res.data))
        .then(res => state.imgList = res.data)
})
</script>

<template>
<h3>page126.vue</h3>
    <img v-for="img in state.imgList" 
        :key="img.id"
        :src="img.download_url"
        :width="img.width *0.05"
    />
</template>

<style scoped>

</style>