import { postsStore } from '@/stores/posts'
import { usersStore } from '@/stores/users'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      async beforeEnter() {
        const postsResp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const usersResp = await fetch('https://jsonplaceholder.typicode.com/users')
        const postsData = await postsResp.json()
        const usersData = await usersResp.json()

        postsStore().setPosts(postsData)
        usersStore().setUsers(usersData)
      },
    },
  ],
})
