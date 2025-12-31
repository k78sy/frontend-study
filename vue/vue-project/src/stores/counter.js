import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 첫번째 아규먼트는 스토어 이름
// 두번째 아규먼트는 콜백함수 (스토어 동작)
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++;
    // const decresement = () => {
    //     if (count.value > 0) { count.value--;}
    // }
    const decrement = () => count.value > 0 && count.value--;

    return { count, doubleCount, increment, decrement };
})
/**
ES6 문법
return{
    'count': count,
    'doubleCount': doubleCount,
    'increment': increment
}
 */