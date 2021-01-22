import axios from 'axios';
import { LanguageType } from './languages.interface';

const get = async () => {
  const { data } = await axios.get<LanguageType[]>('/languages');
  return data;
};

export const LanguagesService = {
  get,
} as const;
