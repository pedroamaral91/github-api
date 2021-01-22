import { FindLanguages } from '../protocols/find-languages.interface'
import { AxiosInstance } from 'axios'

type GithubLanguageResponse = {
  name: string
  aliases: string[]
}

export class Languages implements FindLanguages {
  constructor (private readonly axios: AxiosInstance) {}

  async search (): Promise<FindLanguages.Result[]> {
    const { data } = await this.axios.get<GithubLanguageResponse[]>('/languages')
    return data.map(({ name }) => ({ name }))
  }
}
