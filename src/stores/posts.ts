import { defineStore } from 'pinia'
import type { Post } from '@/contracts/Post'

export const postsStore = defineStore('posts', {
  state: (): {
    posts: Post[]
    query: string
  } => ({
    posts: [],
    query: '',
  }),
  actions: {
    async setPosts(data: Post[]) {
      this.posts = data
    },
  },
})
