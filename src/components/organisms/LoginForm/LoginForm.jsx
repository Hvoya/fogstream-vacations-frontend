import React from 'react';
import { Card, Form, Icon } from 'antd';
import { withRouter } from 'react-router';

import Button from 'atoms/Button/Button';
import InputField from 'atoms/InputField/InputField';
import messages from '@/enums/messages';
import classes from './LoginForm.module.less';

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //  Handlers
  onSubmit(e) {
    e.preventDefault();
    const {
      onLogin,
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        onLogin(values.username, values.password);
      }
    });
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Card>
        <Form onSubmit={this.onSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: messages.required_field,
                },
              ],
            })(
              <InputField
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Имя пользователя"
              />,
            )}
          </Form.Item>
          <Form.Item>
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
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Пароль"
              />,
            )}
          </Form.Item>
          <Button htmlType="submit" type="primary" className={classes.submitButton}>
            Войти
          </Button>
        </Form>
      </Card>
    );
  }
}

export default Form.create({ name: 'login_form' })(withRouter(LoginForm));
