<script setup>
import { reactive } from 'vue';
const state = reactive({
    form: {
        id: '',
        pw: '',
    }
})
// const login = () => alert(`${state.form.id}님 환영합니다!`)
// 아이디, 패스워드에 문자가 하나도 안적혀 있으면 alert('아이디, 패스워드를 작성해주세요')
// 적혀있으면 (`${state.form.id}님 환영합니다!`)

const login = () => {
    // 예외 처리
    // 취향: 부정적인걸 먼저 처리하는 걸 선호..

        // if (state.form.id.length === 0 || !state.form.pw) {
        //     alert('아이디, 패스워드를 작성해주세요');
        //     return
        // }
        // alert(`${state.form.id}님 환영합니다!`)

    if (!state.form.id || !state.form.pw) {
        alert('아이디, 패스워드를 작성해주세요')
    } else {
        alert(`${state.form.id}님 환영합니다!`)
    }
    // state.form.id && state.form.pw ? alert(`${state.form.id}님 환영합니다!`)
    //                                 :alert('아이디, 패스워드를 작성해주세요')
}
</script>

<template>
<h3>page125.vue</h3>
<form @submit.prevent="login" action="#" method="get">
    <input type="text" placeholder="아이디" v-model="state.form.id">
    <input type="password" placeholder="패스워드" v-model="state.form.pw">
    <button>로그인</button>
</form>
</template>

<style scoped>

</style>