import { renderHookWithProviders } from '../../utils/test-utils'
import { useRepositories } from './useRepositories'
import { RepositoriesService } from '../../services/get-repositories/repositories.service'
import { mockRepository } from '../../services/get-repositories/repositories.mock'

describe('[useRepositories] hook tests', () => {
  it('[useRepositories] - should return correct languages', async () => {
    jest.spyOn(RepositoriesService, 'get').mockResolvedValueOnce(mockRepository)
    const { waitForNextUpdate, result } = renderHookWithProviders(() =>
      useRepositories({ language: 'JavaScript', page: '1' })
    )

    await waitForNextUpdate()

    expect(RepositoriesService.get).toHaveBeenCalledWith('/repositories?language=JavaScript&page=1')
    expect(result.current.data).toMatchObject(mockRepository)
    expect(result.current.statusCodeError).toBeUndefined()
  })
  it('[useRepositories] - should return error true', async () => {
    jest.spyOn(RepositoriesService, 'get').mockRejectedValueOnce({ response: { status: 500 } })
    const { waitForNextUpdate, result } = renderHookWithProviders(() =>
      useRepositories({ language: 'golang', page: '1' })
    )

    expect(result.current.isLoading).toBeTruthy()

    await waitForNextUpdate()

    expect(RepositoriesService.get).toHaveBeenCalledWith('/repositories?language=golang&page=1')
    expect(result.current.data).toBeUndefined()
    expect(result.current.statusCodeError).toBe(500)
    expect(result.current.isLoading).toBeFalsy()
  })
})
