import type { Company } from '@/contracts/company'

export interface User {
  id: number
  name: string
  username: string
  phone: string
  website: string
  company: Company
}
