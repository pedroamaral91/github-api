import { screen } from '@testing-library/react';
import { mockRepository } from '../../../services/get-repositories/repositories.mock';
import { renderWithProviders } from '../../../utils/test-utils';
import { RepositoriesSection } from './repositories-section';
import * as RepoHooks from '../../../hooks/repositories/useRepositories';

describe('Repositories Section tests', () => {
  it('should render cards in screen', async () => {
    jest.spyOn(RepoHooks, 'useRepositories').mockReturnValueOnce({
      statusCodeError: undefined,
      data: mockRepository,
      isLoading: false,
    });
    renderWithProviders(<RepositoriesSection language="any_language" />);
    const cardText = await screen.findByText(/some_description/i);
    expect(cardText).toBeInTheDocument();
  });
  it('should render loading text in screen', async () => {
    jest.spyOn(RepoHooks, 'useRepositories').mockReturnValueOnce({
      statusCodeError: undefined,
      data: undefined,
      isLoading: true,
    });
    renderWithProviders(<RepositoriesSection language="any_language" />);
    const cardText = await screen.findByText(/loading/i);
    expect(cardText).toBeInTheDocument();
  });
  it('should render error text in screen', async () => {
    jest.spyOn(RepoHooks, 'useRepositories').mockReturnValueOnce({
      statusCodeError: 533,
      data: undefined,
      isLoading: false,
    });
    renderWithProviders(<RepositoriesSection language="any_language" />);
    const cardText = await screen.findByText(/error/i);
    expect(cardText).toBeInTheDocument();
  });
});
