import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layout/layout.vue'),
        children: [
            { path: '', redirect: 'index' }, // o directamente { path: '', component: Index }
            { path: 'index', component: () => import('@/views/Index.vue') },
            { path: 'ubication', component: () => import('@/views/Ubication.vue') },
            { path: 'dress', component: () => import('@/views/Dress.vue') },
            { path: 'gift', component: () => import('@/views/Gift.vue') },
            { path: 'post', component: () => import('@/views/post.vue') },
            { path: 'recipe', component: () => import('@/views/recipes.vue') },
            { path: 'recipe/:id', component: () => import('@/views/recipe.vue') }
        ]
    },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})