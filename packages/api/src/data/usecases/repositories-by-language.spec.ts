import { RepositoriesByLanguage } from './repositories-by-language'
import { mockRepositoriesResponse, RepositorieisRepositorySpy } from '../mocks'

type MakeRepositoriesByLanguage = {
  repoByLanguage: RepositoriesByLanguage
  repository: RepositorieisRepositorySpy
}
const makeRepositoriesByLanguage = (): MakeRepositoriesByLanguage => {
  const repository = new RepositorieisRepositorySpy()
  const repoByLanguage = new RepositoriesByLanguage(repository)
  return { repoByLanguage, repository }
}

describe('Repositories By Language tests', () => {
  it('should return correct values and axios called with correct value', async () => {
    const { repoByLanguage, repository } = makeRepositoriesByLanguage()
    jest.spyOn(repository, 'searchRepositories').mockResolvedValueOnce(mockRepositoriesResponse)
    const response = await repoByLanguage.find({ language: 'any_language' })
    expect(response).toMatchObject({
      total_count: mockRepositoriesResponse.total_count,
      items: [{
        id: mockRepositoriesResponse.items[0].id,
        name: mockRepositoriesResponse.items[0].name,
        full_name: mockRepositoriesResponse.items[0].full_name,
        description: mockRepositoriesResponse.items[0].description,
        html_url: mockRepositoriesResponse.items[0].html_url,
        avatar_url: mockRepositoriesResponse.items[0].avatar_url
      }]
    })
    expect(repository.searchRepositories).toHaveBeenCalledWith({ language: 'any_language' })
  })
  it('should throws if API throw', () => {
    const { repoByLanguage, repository } = makeRepositoriesByLanguage()
    jest.spyOn(repository, 'searchRepositories').mockRejectedValueOnce(new Error('off'))
    expect(repoByLanguage.find({ language: 'any_languaage' })).rejects.toThrow(Error)
  })
})
