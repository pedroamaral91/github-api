import { GetRepositories } from '@/domain/usecases/get-repositories'
import { RepositoriesRepository } from '../protocols/repositories-repository.interface'
export class RepositoriesByLanguage implements GetRepositories {
  constructor (private readonly getRepositories: RepositoriesRepository) {}

  async find (params: GetRepositories.Params): Promise<GetRepositories.Result> {
    return await this.getRepositories.searchRepositories({ language: params.language, page: params.page })
  }
}
