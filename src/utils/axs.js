import axios from 'axios';

import { baseUrl } from '@/enums/api_urls';

export const axs = axios.create({
  baseURL: baseUrl,
});
