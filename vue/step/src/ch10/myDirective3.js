var smartStyle = {
    // 처음 나타날 때
    mounted(el, binding) {
        console.log("mounted 호출됨!");
        applyStyle(el, binding);
    },
    // 데이터(value)가 변경되어 컴포넌트가 업데이트될 때
    updated(el, binding) {
        console.log("updated 호출됨!");
        applyStyle(el, binding);
    }
}

// 중복 코드를 방지하기 위해 스타일 적용 로직을 별도 함수로 분리
function applyStyle(el, binding) {
    const targetProperty = binding.arg || 'background';
    el.style[targetProperty] = binding.value;

    if (binding.modifiers.bold) el.style.fontWeight = 'bold';
    if (binding.modifiers.border) el.style.border = '2px solid black';
}

export default smartStyle;