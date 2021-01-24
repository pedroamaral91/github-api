import { api } from '../../utils/api'
import { mockLanguages } from './languages.mock'
import { LanguagesService } from './languages.service'

describe('Get Languages Services tests', () => {
  it('[getLanguages] - should return languages', async () => {
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: [mockLanguages] })
    const response = await LanguagesService.get()
    expect(response).toMatchObject([mockLanguages])
  })
  it('[getLanguages] - should throw if language services throws', () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(new Error())
    const response = LanguagesService.get()
    expect(response).rejects.toThrowError()
  })
})
