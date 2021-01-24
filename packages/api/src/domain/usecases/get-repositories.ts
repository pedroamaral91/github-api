import { Repository } from '../models/repository'

export interface GetRepositories {
  find: (params: GetRepositories.Params) => Promise<GetRepositories.Result>
}

export namespace GetRepositories {
  export type Params = {
    language: string
    page?: string
  }
  export type Result = {
    total_count: number
    items: Repository[]
  }
}
