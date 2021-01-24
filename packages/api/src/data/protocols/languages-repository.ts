import { GetLanguages } from '@/domain/usecases/get-languages'

export interface LanguagesRepository {
  searchLanguages: () => Promise<GetLanguages.Result[]>
}

export namespace LanguagesRepository {
  export type Result = GetLanguages.Result
}
