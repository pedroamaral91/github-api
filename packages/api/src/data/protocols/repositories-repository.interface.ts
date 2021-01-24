import { GetRepositories } from '@/domain/usecases/get-repositories'
export interface RepositoriesRepository {
  searchRepositories: (params: GetRepositories.Params) => Promise<GetRepositories.Result>
}

export namespace RepositoriesRepository {
  export type Params = GetRepositories.Params
  export type Result = GetRepositories.Result
}
