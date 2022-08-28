import { defineStore } from 'pinia'
import type { User } from '@/contracts/User'

interface UsersState {
  users: User[]
  usersHash: {
    [key: number]: string
  }
}
export const usersStore = defineStore('users', {
  state: (): UsersState => ({
    users: [],
    usersHash: {},
  }),
  actions: {
    async setUsers(data: User[]) {
      const hash: { [key: number]: string } = {}

      data.forEach(({ id, name }) => {
        hash[id] = name
      })

      this.users = data
      this.usersHash = hash
    },
  },
})
