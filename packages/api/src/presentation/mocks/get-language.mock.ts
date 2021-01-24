import { GetLanguages } from '@/domain/usecases'

export const mockLanguageResponse = (): GetLanguages.Result[] => [{ name: 'PHP' }, { name: 'JavaScript' }]

export class GetLanguagesSpy implements GetLanguages {
  async search (): Promise<GetLanguages.Result[]> {
    return mockLanguageResponse()
  }
}
