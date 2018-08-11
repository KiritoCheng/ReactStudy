import * as React from 'react';
import '../css/Login.css';


export interface LoginDataProps {
    errorTips: string;
}

export interface LoginEventProps {
    onClick: (username: string, password: string) => void;
}
interface LoginProps extends LoginDataProps, LoginEventProps { }

export class Login extends React.Component<LoginProps> {
    private UsernameInput: HTMLInputElement
    private PwdInput: HTMLInputElement

    handleSubmit(e: any) {
        this.props.onClick(this.UsernameInput.value, this.PwdInput.value)
    }

    render() {
        return (
            <div className="loginStyle">

                <div className="loginTips">
                    {
                        this.props.errorTips
                    }
                </div>

                <input className="inputStyle" placeholder="支持QQ号/手机号/邮箱账号"
                    ref={node => this.UsernameInput = node}
                />
                <input type="password" className="inputStyle password" placeholder="QQ密码"
                    ref={node => this.PwdInput = node}
                />

                <div className="loginBtnStyle"
                    onClick={(e) => { this.handleSubmit(e) }}>
                    登陆
                </div>
            </div>
        )
    }
}