import { screen } from '@testing-library/react'
import * as responsiveHook from '../../hooks/useResponsive/useResponsive'
import { renderWithProviders } from '../../utils/test-utils'
import { Pagination } from './pagination'

const mockPagesQuantity = 10

describe('<GPagination />', () => {
  const useResponsiveMock = jest.spyOn(responsiveHook, 'useResponsive')

  it('should render using given labels to previous and next buttons', () => {
    useResponsiveMock.mockImplementation(() => ({ isLargerThanLg: true }))
    const mockNextLabel = 'Next'
    const mockPreviousLabel = 'Previous'

    renderWithProviders(
      <Pagination
        onPageChange={() => null}
        pagesQuantity={mockPagesQuantity}
        nextLabel={mockNextLabel}
        previousLabel={mockPreviousLabel}
      />
    )

    expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument()
    expect(screen.getByText(mockNextLabel)).toBeInTheDocument()
    expect(screen.getByText(mockPreviousLabel)).toBeInTheDocument()
  })
  it('should render using default labels to mobile', () => {
    useResponsiveMock.mockImplementation(() => ({ isLargerThanLg: false }))
    renderWithProviders(<Pagination onPageChange={() => null} pagesQuantity={mockPagesQuantity} />)

    expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument()
    expect(screen.getByText('>')).toBeInTheDocument()
    expect(screen.getByText('<')).toBeInTheDocument()
  })
  it('should render using default labels to desktop', () => {
    useResponsiveMock.mockImplementation(() => ({ isLargerThanLg: true }))

    renderWithProviders(<Pagination onPageChange={() => null} pagesQuantity={mockPagesQuantity} />)

    expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument()
    expect(screen.getByText('Next >')).toBeInTheDocument()
    expect(screen.getByText('< Previous')).toBeInTheDocument()
  })
})
