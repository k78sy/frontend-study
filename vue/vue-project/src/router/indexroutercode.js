import { createRouter, createWebHistory } from 'vue-router';
import { globalState } from '@/globalState';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalState.map((item) => {
    const firstChar = item.charAt(0).toUpperCase(); // item 문자열의 첫번째 글자를 대문자로 바꿔라
    const otherChars = item.slice(1); //1번방부터 끝까지로 문자열을 잘라라
    const filePath = `../views${item.startsWith('mission') ? '/mission' : ''}/${
      //startsWith(문자열) 문자열이 이 글자로 시작한다면 true/아니면 false
      firstChar + otherChars
    }.vue`;
    console.log(filePath);
    return {
      path: `/${item}`,
      component: () => import(filePath),
    };
  }),
});

export default router;
