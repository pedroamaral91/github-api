import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

const envPath = (file): string => path.join(__dirname, file)

const envs = {
  production: envPath('/envs/.env'),
  dev: envPath('/envs/.dev.env'),
  test: envPath('/envs/.test.env')
}

dotenv.config({ path: envs[process.env.NODE_ENV ?? 'dev'] })

export const env = {
  PORT: process.env.PORT,
  API_URL: process.env.GITHUB_API
}
