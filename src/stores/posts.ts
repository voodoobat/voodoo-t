import { defineStore } from 'pinia'
import type { Post } from '@/contracts/Post'

export const postsStore = defineStore('posts', {
  state: (): {
    posts: Post[]
  } => ({
    posts: [],
  }),
  actions: {
    async setPosts(data: Post[]) {
      this.posts = data
    },
  },
})
