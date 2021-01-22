import axios from 'axios'
import { Languages } from './languages'
import { mockGithubLanguages } from '../mocks/repositores-github-response.mock'

jest.mock('axios')

type FactoryLanguages = {
  findLanguages: Languages
}
const mockLanguages = (): FactoryLanguages => {
  const findLanguages = new Languages(axios)
  return { findLanguages }
}

const mockResponseGithubLanguages = { data: [mockGithubLanguages].map(({ name }) => ({ name })) }

describe('Find Languages tests', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return languages', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponseGithubLanguages)
    const { findLanguages } = mockLanguages()
    const response = await findLanguages.search()
    expect(response).toMatchObject([{ name: mockGithubLanguages.name }])
  })
  it('should call [get] function from axios with correct values', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponseGithubLanguages)
    const { findLanguages } = mockLanguages()
    await findLanguages.search()
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/languages')
  })
  it('should throw if github API throws', () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error())
    const { findLanguages } = mockLanguages()
    expect(findLanguages.search()).rejects.toThrowError()
  })
})
