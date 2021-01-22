import { renderHookWithProviders } from '../../utils/test-utils';
import { useLanguages } from './useLanguages';
import { LanguagesService } from '../../services/get-languages/languages.service';

describe('[useLanguages] hook tests', () => {
  it('[useLanguages] - should return correct languages', async () => {
    jest.spyOn(LanguagesService, 'get').mockResolvedValueOnce([{ name: 'TypeScript' }]);
    const { waitForNextUpdate, result } = renderHookWithProviders(() => useLanguages());

    await waitForNextUpdate();

    expect(LanguagesService.get).toHaveBeenCalled();
    expect(result.current.languages).toMatchObject([{ name: 'TypeScript' }]);
    expect(result.current.isError).toBeFalsy();
  });
  it('[useLanguages] - should return error true', async () => {
    jest.spyOn(LanguagesService, 'get').mockRejectedValueOnce(new Error());
    const { waitForNextUpdate, result } = renderHookWithProviders(() => useLanguages());

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(LanguagesService.get).toHaveBeenCalled();
    expect(result.current.languages).toMatchObject([]);
    expect(result.current.isError).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
  });
});
