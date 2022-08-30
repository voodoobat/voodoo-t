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
    setUsers(data: User[]) {
      data.forEach(({ id, name }) => {
        this.usersHash[id] = name
      })

      this.users = data
    },
  },
})
