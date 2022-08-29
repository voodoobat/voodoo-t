import type { Company } from '@/contracts/Company'
import type { Address } from '@/contracts/Address'

export interface User {
  id: number
  name: string
  username: string
  phone: string
  website: string
  company: Company
  address: Address
}
