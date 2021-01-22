import axios from 'axios'
import { env } from '@/main/config/env'

export const api = axios.create({
  baseURL: env.API_URL
})
