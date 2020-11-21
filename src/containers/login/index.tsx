import React from 'react';

import {
    like
} from '@main/asset';

import {
    LabeledInput,
    Button
} from '@main/components'

import style from './style.css';

class Login extends React.Component {
    firstInputRef = React.createRef<HTMLInputElement>();

    componentDidMount() {
        this.firstInputRef.current.focus();
    }

    render() {
        return (
            <div className={style.wrapper}>
                <form className={style.loginForm}>
                    <LabeledInput inputRef={this.firstInputRef} label="Введите логин" id="login-input" name="login" />
                    <LabeledInput label="Введите пароль" id="password-input" name="password" type="password" />
                    <Button colorScheme="purple">sumbit</Button>
                </form>
                <img src={like}/>
            </div>
        )
    }
}

export default Login
