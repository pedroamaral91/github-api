import { AxiosInstance } from 'axios'
import { FindRepositoriesByLanguage } from '../protocols/find-repositories-by-language.interface'

type OwnerRepository = {
  id: number
  login: string
  avatar_url: string
}

type GithubRepositoryResponse = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  owner: OwnerRepository
}

type GithubResponse = {
  total_count: number
  incomplete_results: boolean
  items: GithubRepositoryResponse[]
}

export class RepositoriesByLanguage implements FindRepositoriesByLanguage {
  constructor (private readonly axios: AxiosInstance) {}

  async search (language: string, page = '1', per_page = '10'): Promise<FindRepositoriesByLanguage.Result[]> {
    const { data } = await this.axios.get<GithubResponse>('/search/repositories', {
      params: { q: `language:${language}`, page, per_page }
    })

    return this.normalizeData(data.items)
  }

  private normalizeData (githubResponse: GithubRepositoryResponse[]): FindRepositoriesByLanguage.Result[] {
    return githubResponse.map(data => ({
      id: data.id,
      name: data.name,
      full_name: data.full_name,
      description: data.description,
      html_url: data.html_url,
      avatar: data.owner.avatar_url
    }))
  }
}
