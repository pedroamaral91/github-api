import { RepositoryType } from './repositories.interface';

export const mockRepository: RepositoryType = {
  total_count: 50,
  items: [
    {
      avatar_url: 'some_avatar',
      description: 'some_description',
      full_name: 'any_name',
      html_url: 'url',
      id: 34,
      name: 'name',
    },
  ],
};
