import { RepositoryType } from './repositories.interface';
import { api } from '../../utils/api';

const URL = '/repositories';

const get = async (url: string) => {
  const { data } = await api.get<RepositoryType>(url);
  return data;
};

export const RepositoriesService = {
  URL,
  get,
} as const;
