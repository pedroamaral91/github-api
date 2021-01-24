import { GetLanguages } from '@/domain/usecases/get-languages'
import { LanguagesRepository } from '../protocols/languages-repository'
export class Languages implements GetLanguages {
  constructor (private readonly languagesRepository: LanguagesRepository) {}

  async search (): Promise<LanguagesRepository.Result[]> {
    return await this.languagesRepository.searchLanguages()
  }
}
