import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { renderHook, RenderHookResult } from '@testing-library/react-hooks'
import { ReactElement, FC, ReactNode } from 'react'
import { SWRConfig } from 'swr'

export const renderWithProviders = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  const wrapper: FC = ({ children }) => <ChakraProvider>{children}</ChakraProvider>

  return render(ui, { wrapper, ...options })
}

export const renderHookWithProviders = <P, R>(callback: (props: P) => R): RenderHookResult<P, R> => {
  const wrapper = ({ children }: { children?: ReactNode }) => (
    <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
  )
  return renderHook(callback, { wrapper })
}
