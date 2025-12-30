import { createRouter, createWebHistory } from 'vue-router';
import { globalState } from '@/globalState';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalState.map((item) => {
    const filePath = `../views${item.startsWith('mission') ? '/mission' : ''}/${item}.vue`;
    return {
      path: `/${item}`,
      component: () => import(filePath),
    };
  }),
});

export default router;
