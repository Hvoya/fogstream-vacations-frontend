import axios from 'axios';

import { baseUrl } from '@/enums/api_urls';
import { getAccessToken } from '@/utils/LS';
import { getAuthHeaderString } from '@/utils/helpers';

const access_token = getAccessToken();

const axs = axios.create({
  baseURL: baseUrl,
});

if (access_token) {
  axs.defaults.headers.common.Authorization = getAuthHeaderString(access_token);
}

export default axs;
