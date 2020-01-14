import { message } from 'antd';

export const handleRequestError = e => {
  if (!e.response || !e.response.data) return;
  message.error(Object.values(e.response.data)[0]);
};
