import { RepositoriesRepository, LanguagesRepository } from '@/data/protocols'
import { api } from '@/utils/api'
import { GetLanguages } from '@/domain/usecases/get-languages'
import { GithubApiResponse, GithubLanguageResponse } from './github-api.types'

export class GithubApi implements RepositoriesRepository, LanguagesRepository {
  async searchRepositories (params: RepositoriesRepository.Params): Promise<RepositoriesRepository.Result> {
    const { language, page = '1' } = params
    const { data } = await api.get<GithubApiResponse>('/search/repositories', {
      params: { q: `language:${language}`, page }
    })
    return {
      total_count: data.total_count,
      items: data.items.map(data => ({
        id: data.id,
        name: data.name,
        full_name: data.full_name,
        description: data.description,
        html_url: data.html_url,
        avatar_url: data.owner.avatar_url
      }))

    }
  }

  async searchLanguages (): Promise<GetLanguages.Result[]> {
    const { data } = await api.get<GithubLanguageResponse[]>('/languages')
    return data.map(({ name }) => ({ name }))
  }
}
