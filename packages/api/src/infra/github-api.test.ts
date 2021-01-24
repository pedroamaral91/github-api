import { api } from '@/utils/api'
import { mockLanguagesGithubResponse, mockRepositoriesGithubResponse } from './github-response.mock'
import { GithubApi } from './github-api'

describe('Github Api [axios] tests', () => {
  afterEach(() => jest.clearAllMocks())
  describe('[searchLanguages] tests', () => {
    it('should return languages', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({ data: [mockLanguagesGithubResponse] })
      const sut = new GithubApi()
      const response = await sut.searchLanguages()
      expect(response).toMatchObject([{ name: mockLanguagesGithubResponse.name }])
    })
    it('should call [get] function from axios with correct values', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({ data: [mockLanguagesGithubResponse] })
      const sut = new GithubApi()
      await sut.searchLanguages()
      expect(api.get).toHaveBeenCalledTimes(1)
      expect(api.get).toHaveBeenCalledWith('/languages')
    })
    it('should throw if github API throws', () => {
      jest.spyOn(api, 'get').mockRejectedValueOnce(new Error())
      const sut = new GithubApi()
      expect(sut.searchLanguages()).rejects.toThrowError()
    })
  })
  describe('[searchRepositories] tests', () => {
    it('should return correct values and axios called with correct value', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({ data: mockRepositoriesGithubResponse })
      const sut = new GithubApi()
      const response = await sut.searchRepositories({ language: 'any_language' })
      expect(response).toMatchObject({
        total_count: 1,
        items: [{
          id: mockRepositoriesGithubResponse.items[0].id,
          name: mockRepositoriesGithubResponse.items[0].name,
          full_name: mockRepositoriesGithubResponse.items[0].full_name,
          description: mockRepositoriesGithubResponse.items[0].description,
          html_url: mockRepositoriesGithubResponse.items[0].html_url,
          avatar_url: mockRepositoriesGithubResponse.items[0].owner.avatar_url
        }]
      })
      expect(api.get).toHaveBeenCalledWith('/search/repositories', { params: { q: 'language:any_language', page: '1' } })
    })
    it('should throws if API throw', () => {
      const sut = new GithubApi()
      jest.spyOn(api, 'get').mockRejectedValueOnce(new Error('off'))
      expect(sut.searchRepositories({ language: 'any_language' })).rejects.toThrow(Error)
    })
  })
})
