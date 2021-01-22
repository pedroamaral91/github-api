import useSWR from 'swr';
import { RepositoriesService } from '../../services/get-repositories/repositories.service';

type UseRepositoriesProps = {
  language: string;
  page: string;
};

export const useRepositories = (params: UseRepositoriesProps) => {
  const queryParams = new URLSearchParams(params).toString();
  const { data, error } = useSWR(`${RepositoriesService.URL}?${queryParams}`, RepositoriesService.get);
  return {
    data,
    statusCodeError: error?.response?.status,
    isLoading: !error && !data,
  };
};
