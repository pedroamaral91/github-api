import axios from 'axios';
import { mockRepository } from './repositories.mock';
import { RepositoriesService } from './repositories.service';

describe('Get Repositories Services tests', () => {
  it('[getRepositories] - should return repositories', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [mockRepository] });
    const response = await RepositoriesService.get(RepositoriesService.URL);
    expect(response).toMatchObject([mockRepository]);
  });
  it('[getRepositories] - should throw if repositories services throws', () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error());
    const response = RepositoriesService.get(RepositoriesService.URL);
    expect(response).rejects.toThrowError();
  });
});
