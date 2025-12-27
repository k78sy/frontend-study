var smartStyle = {
    mounted(el, binding) {
        // 1. arg 활용: 어떤 스타일 속성을 바꿀지 결정
        // v-smartStyle:background 면 배경색을, v-smartStyle:color 면 글자색을 변경
        const targetProperty = binding.arg || 'background'; // 기본값은 background
        el.style[targetProperty] = binding.value;
        //JavaScript에서 객체의 속성에 접근할 때 점(.) 대신 **대괄호([])**를 사용하면 변수 안에 담긴 문자열을 속성 이름으로 쓸 수 있습니다.

        // 2. modifiers 활용: 부가 기능 제어
        // .bold 수식어가 있으면 글자를 굵게
        if (binding.modifiers.bold) {
            el.style.fontWeight = 'bold';
        }

        // .border 수식어가 있으면 테두리 추가
        if (binding.modifiers.border) {
            el.style.border = '2px solid black';
        }

        // .upper 수식어가 있으면 대문자로 변경
        if (binding.modifiers.upper) {
            el.innerText = el.innerText.toUpperCase();
        }
    }
}

export default smartStyle;