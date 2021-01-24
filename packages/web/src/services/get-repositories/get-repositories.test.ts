import { mockRepository } from './repositories.mock';
import { RepositoriesService } from './repositories.service';
import { api } from '../../utils/api';

describe('Get Repositories Services tests', () => {
  it('[getRepositories] - should return repositories', async () => {
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: [mockRepository] });
    const response = await RepositoriesService.get(RepositoriesService.URL);
    expect(response).toMatchObject([mockRepository]);
  });
  it('[getRepositories] - should throw if repositories services throws', () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(new Error());
    const response = RepositoriesService.get(RepositoriesService.URL);
    expect(response).rejects.toThrowError();
  });
});
