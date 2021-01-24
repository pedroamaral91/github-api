import * as ChakraReact from '@chakra-ui/react'
import { renderHookWithProviders } from '../../utils/test-utils'
import { useResponsive } from './useResponsive'

describe('useResponsive Hook', () => {
  it('should return values acording to useMediaQuery return', () => {
    jest.spyOn(ChakraReact, 'useMediaQuery').mockImplementation(() => [true, false, true, false, true])
    const { result } = renderHookWithProviders(() => useResponsive())
    const { isLargerThanSm, isLargerThanMd, isLargerThanLg, isLargerThanXl, isLargerThanXxl } = result.current

    expect(ChakraReact.useMediaQuery).toHaveBeenCalled()

    expect(isLargerThanSm).toBeTruthy()
    expect(isLargerThanMd).toBeFalsy()
    expect(isLargerThanLg).toBeTruthy()
    expect(isLargerThanXl).toBeFalsy()
    expect(isLargerThanXxl).toBeTruthy()
  })
})
