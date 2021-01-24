import { useMediaQuery } from '@chakra-ui/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const breakpointsSizes = {
  xsm: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
}

export const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px'
})

interface IUseResponsive {
  isLargerThanSm?: boolean;
  isLargerThanMd?: boolean;
  isLargerThanLg?: boolean;
  isLargerThanXl?: boolean;
  isLargerThanXxl?: boolean;
}

export const useResponsive = (): IUseResponsive => {
  const [isLargerThanSm, isLargerThanMd, isLargerThanLg, isLargerThanXl, isLargerThanXxl] = useMediaQuery([
    `(min-width: ${breakpoints.sm})`,
    `(min-width: ${breakpoints.md})`,
    `(min-width: ${breakpoints.lg})`,
    `(min-width: ${breakpoints.xl})`,
    `(min-width: ${breakpoints.xxl})`
  ])
  return {
    isLargerThanSm,
    isLargerThanMd,
    isLargerThanLg,
    isLargerThanXl,
    isLargerThanXxl
  }
}
