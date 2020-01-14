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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.comparePasswords = this.comparePasswords.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      form: { validateFields },
      onPasswordChange,
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        onPasswordChange(values.new_password, values.new_password_confirm);
      }
    });
  }

  comparePasswords(rule, value, callback) {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('new_password')) {
      callback(messages.passwords_dont_match);
    } else {
      callback();
    }
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className={classes.form}>
        <h2>Смена пароля</h2>
        <Form.Item className={classes.formItem}>
          {getFieldDecorator('new_password', {
            rules: [
              {
                required: true,
                message: messages.required_field,
              },
              {
                min: 8,
                message: messages.too_short_password,
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
          {getFieldDecorator('new_password_confirm', {
            rules: [
              {
                required: true,
                message: messages.required_field,
              },
              {
                validator: this.comparePasswords,
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
