import axios from 'axios'
import { Languages } from './languages'
import { mockLanguages } from '../mocks/return-repositories.mock'
import { LanguageRepositorySpy } from '../mocks/repositories.mock'

type FactoryLanguages = {
  findLanguages: Languages
  languageRepository: LanguageRepositorySpy
}
const mockLanguagesFactory = (): FactoryLanguages => {
  const languageRepository = new LanguageRepositorySpy()
  const findLanguages = new Languages(languageRepository)
  return { findLanguages, languageRepository }
}

describe('Find Languages tests', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return languages', async () => {
    const { findLanguages } = mockLanguagesFactory()
    const response = await findLanguages.search()
    expect(response).toMatchObject([{ name: 'PHP' }, { name: 'JavaScript' }])
  })

  it('should throw if github API throws', () => {
    const { findLanguages, languageRepository } = mockLanguagesFactory()
    jest.spyOn(languageRepository, 'searchLanguages').mockRejectedValueOnce(new Error())
    expect(findLanguages.search()).rejects.toThrowError()
  })
})
