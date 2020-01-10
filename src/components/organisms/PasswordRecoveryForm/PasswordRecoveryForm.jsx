import React from 'react';
import { Form, Icon } from 'antd';

import InputField from 'atoms/InputField/InputField';
import Button from 'atoms/Button/Button';
import classes from './PasswordRecoveryForm.module.less';
import messages from '@/enums/messages';

// Ант формам нужен класс
// eslint-disable-next-line react/prefer-stateless-function
class PasswordRecoveryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form className={classes.form}>
        <h2>Смена пароля</h2>
        <Form.Item className={classes.formItem}>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: messages.required_field,
              },
            ],
          })(
            <InputField
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Старый пароль"
            />,
          )}
        </Form.Item>
        <Form.Item className={classes.formItem}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: messages.required_field,
              },
            ],
          })(
            <InputField
              type="password"
              prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Новый пароль"
            />,
          )}
        </Form.Item>
        <Button htmlType="submit" type="primary" className={classes.submitButton}>
          Изменить
        </Button>
      </Form>
    );
  }
}

export default Form.create({ name: 'password_recovery_form' })(PasswordRecoveryForm);
