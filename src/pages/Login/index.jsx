import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../redux/action/login'
import { LoginWrapper, LoginBox } from './style'
import { Form, Input, Button, Checkbox } from 'antd';
class Login extends PureComponent {
    render() {
        const { loginState } = this.props
        if (!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Form
                            name="normal_login"
                            className="login-form"
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input placeholder="名字" ref={input => { this.account = input }} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    type="password"
                                    placeholder="密码"
                                    ref={input => { this.password = input }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => this.props.login(this.account, this.password)}>
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginBox>
                </LoginWrapper>
            );
        }else {
            return <Redirect to="/" />
        }
    }

}

export default connect(state => ({ loginState: state.getIn(['login', 'login']) }), { login: (account, password) => login(account.props.value, password.props.value) })(Login);