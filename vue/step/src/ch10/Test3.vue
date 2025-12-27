<template>
    <div>
        <h3>실시간 스타일 변경 테스트</h3>
        
        <input type="color" v-model="color" placeholder="색상 입력 (예: red, blue)">
        
        <br><br>

        <button @click="color = 'yellow'">노란색으로!</button>
        <button @click="color = 'pink'">분홍색으로!</button>

        <hr>

        <div v-smartStyle:background.border="color" style="padding: 20px;">
            이 영역의 배경색은 실시간으로 바뀝니다: {{ color }}
        </div>
    </div>
</template>

<script>
// import smartStyle from './myDirective3'
export default {
    data() {
        return {
            color: 'lightgray' // 초기값
        }
    },
    // directives: {
    //     smartStyle // 'v-smartStyle'로 사용 가능
    // }
    directives: {
        // 지역 등록 시에도 함수 축약형 사용 가능
        smartStyle: (el, binding) => {
            el.style[binding.arg || 'background'] = binding.value;
        }
    }
}
</script>