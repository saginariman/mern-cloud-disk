import React, { useState } from 'react'
import { registration } from '../../actions/user';
import Input from '../../utils/input/input'
import './authorization.css'

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  return (
    <div className='registartion'>
        <div className="registration_header">Регистрация</div>
        <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..."/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
        <button className="registration_btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
    </div>
  )
}

export default Registration