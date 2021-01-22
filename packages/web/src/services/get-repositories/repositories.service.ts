import axios from 'axios';
import { RepositoryType } from './repositories.interface';

const URL = '/repositories';

const get = async (url: string) => {
  const { data } = await axios.get<RepositoryType[]>(url);
  return data;
};

export const RepositoriesService = {
  URL,
  get,
} as const;
