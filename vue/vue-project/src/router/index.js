import { createRouter, createWebHistory } from 'vue-router';
import { globalState } from '@/globalState';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalState.map((item) => {
    const firstChar = item.charAt(0).toUpperCase();
    const otherChars = item.slice(1);
    const filePath = `../views${item.startsWith('mission') ? '/mission' : ''}/${
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
