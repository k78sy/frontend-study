const authDirective = {
    mounted(el, binding) {
        // 실제로는 서버나 Store(Pinia)에서 가져온 사용자 정보라고 가정합니다.
        const userRole = 'editor'; // 현재 로그인한 사용자의 등급 (admin, editor, viewer)

        // binding.value로 허용된 등급 리스트를 전달받음 (예: ['admin'])
        const allowedRoles = binding.value;

        // 사용자의 등급이 허용된 리스트에 없으면 DOM에서 아예 제거해버림
        if (!allowedRoles.includes(userRole)) {
            el.parentNode && el.parentNode.removeChild(el);
            console.log(`[권한부족] ${userRole} 등급은 이 기능을 사용할 수 없습니다.`);
        }
    }
};
export default authDirective;