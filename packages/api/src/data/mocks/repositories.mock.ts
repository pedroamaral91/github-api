import { GetLanguages } from '@/domain/usecases/get-languages'
import { LanguagesRepository, RepositoriesRepository } from '../protocols'
import { mockRepositoriesResponse } from './return-repositories.mock'

export class LanguageRepositorySpy implements LanguagesRepository {
  async searchLanguages (): Promise<GetLanguages.Result[]> {
    return [{ name: 'PHP' }, { name: 'JavaScript' }]
  }
}

export class RepositorieisRepositorySpy implements RepositoriesRepository {
  async searchRepositories (params: RepositoriesRepository.Params): Promise<RepositoriesRepository.Result> {
    return mockRepositoriesResponse
  }
}
