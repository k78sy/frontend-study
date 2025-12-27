<template>
    <div>
        <button v-can="['admin']">서버 데이터 삭제</button>
        <button v-can="['admin', 'editor']">글쓰기</button>
    </div>
</template>

<script>
import authDirective from './myDirective4'
export default {
    data() {
        return {
            color: 'lightgray' // 초기값
        }
    },
    directives: {
        authDirective // 'v-smartStyle'로 사용 가능
    }
}
</script>