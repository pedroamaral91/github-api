import '@/main/config/env'
import app from '@/main/config/app'
import request from 'supertest'

describe('Find Repositories e2e tests', () => {
  it('[GithubApi - /repositories] - should return success', async () => {
    const response = await request(app).get('/api/repositories?language=javascript')
    expect(response.status).toBe(200)
  })
  it('[GithubApi - /repositories] - should throw error 422 when not pass query param', async () => {
    const response = await request(app).get('/api/repositories?error=error')
    expect(response.status).toBe(422)
  })
})
