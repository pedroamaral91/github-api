type Items = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  avatar_url: string;
  html_url: string;
};
export type RepositoryType = {
  total_count: number;
  items: Items[];
};
