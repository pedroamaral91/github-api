import '@/main/config/env'
import app from '@/main/config/app'
import request from 'supertest'

describe('Find Languages e2e tests', () => {
  it('[GithubApi - /languages] - should return success', async () => {
    const response = await request(app).get('/api/languages')
    expect(response.status).toBe(200)
  })
})
