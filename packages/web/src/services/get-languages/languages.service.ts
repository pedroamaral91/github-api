import { api } from '../../utils/api';
import { LanguageType } from './languages.interface';

const get = async () => {
  const { data } = await api.get<LanguageType[]>('/languages');
  return data;
};

export const LanguagesService = {
  get,
} as const;
