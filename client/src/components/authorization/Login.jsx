import React, { useState } from 'react'
import { login } from '../../actions/user';
import Input from '../../utils/input/input'
import './authorization.css'
import {useDispatch} from 'react-redux'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  return (
    <div className='authorization'>
        <div className="authorization_header">Авторизация</div>
        <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..."/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
        <button className="authorization_btn" onClick={() => dispatch(login(email, password ))}>Войти</button>
    </div>
  )
}

export default Login