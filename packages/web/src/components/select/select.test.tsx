import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from './select'
import { renderWithProviders } from '../../utils/test-utils'

describe('Select tests', () => {
  it('should be render Loading when menu is open and loading props is true', () => {
    renderWithProviders(<Select onChange={() => {}} options={[]} isLoading />)
    userEvent.click(screen.getByText(/select\.\.\./i))
    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument()
  })
  it('should be render call onChange with correct values', () => {
    const onChange = jest.fn()
    renderWithProviders(
      <Select
        onChange={onChange}
        options={[
          { value: '1', label: 'test' },
          { value: '2', label: 'click' }
        ]}
      />
    )
    userEvent.click(screen.getByText(/select\.\.\./i))
    userEvent.click(screen.getByText(/click/i))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(
      {
        value: '2',
        label: 'click'
      },
      { action: 'select-option', name: undefined, option: undefined }
    )
  })
})
