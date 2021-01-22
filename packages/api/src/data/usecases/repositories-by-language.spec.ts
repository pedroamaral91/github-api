import { RepositoriesByLanguage } from './repositories-by-language'
import axios from 'axios'
import { mockRepositoriesGithubResponse } from '../mocks/repositores-github-response.mock'

jest.mock('axios')

type MakeRepositoriesByLanguage = {
  repoByLanguage: RepositoriesByLanguage
}
const makeRepositoriesByLanguage = (): MakeRepositoriesByLanguage => {
  const repoByLanguage = new RepositoriesByLanguage(axios)
  return { repoByLanguage }
}

describe('Repositories By Language tests', () => {
  it('should return correct values and axios called with correct value', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockRepositoriesGithubResponse })
    const { repoByLanguage } = makeRepositoriesByLanguage()
    const response = await repoByLanguage.search('any_language')
    expect(response).toMatchObject([{
      id: mockRepositoriesGithubResponse.items[0].id,
      name: mockRepositoriesGithubResponse.items[0].name,
      full_name: mockRepositoriesGithubResponse.items[0].full_name,
      description: mockRepositoriesGithubResponse.items[0].description,
      html_url: mockRepositoriesGithubResponse.items[0].html_url,
      avatar: mockRepositoriesGithubResponse.items[0].owner.avatar_url
    }])
    expect(axios.get).toHaveBeenCalledWith('/search/repositories', { params: { q: 'language:any_language', page: '1', per_page: '10' } })
  })
  it('should throws if API throw', () => {
    const { repoByLanguage } = makeRepositoriesByLanguage()
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('off'))
    expect(repoByLanguage.search('any_languaage')).rejects.toThrow(Error)
  })
})
