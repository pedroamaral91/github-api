import axios from 'axios';
import { mockLanguages } from './languages.mock';
import { LanguagesService } from './languages.service';

describe('Get Languages Services tests', () => {
  it('[getLanguages] - should return languages', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [mockLanguages] });
    const response = await LanguagesService.get(LanguagesService.URL);
    expect(response).toMatchObject([mockLanguages]);
  });
  it('[getLanguages] - should throw if language services throws', () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error());
    const response = LanguagesService.get(LanguagesService.URL);
    expect(response).rejects.toThrowError();
  });
});
