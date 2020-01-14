import { message } from 'antd';

import messages from '@/enums/messages';

export const handleRequestError = e => {
  if (!e.response || !e.response.data) {
    message.error(messages.server_error);
    return;
  }
  message.error(Object.values(e.response.data)[0][0]);
};
