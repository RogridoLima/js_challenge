import React, { useState } from 'react';
import './App.css';

import Axios from 'axios';

const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);

function App() {

  //  any request with this email will pass 'eve.holt@reqres.in', password can be anything with 6 or more digits

  let [tried, setTried] = useState(false)

  let [email, setEmail] = useState('')
  let [pass, setPass] = useState('')

  const invalidEmail = email !== '' && !email.match(emailRegex);
  const invalidPass = pass !== '' && pass.length < 6;

  const submit = () => {
    setTried(true);

    if ((invalidEmail || !email) || (invalidPass || !pass)) {
      return
    }

    const obj = {
      email: email,
      password: pass
    }

    Axios.post('https://reqres.in/api/login', obj).then(res => {

      console.log(res);

      if (res.status === 200) window.alert('User logged in successfully');
    }).catch(err => {
      console.log(err)
      if (err.response.data.error === 'user not found') window.alert('User not found');

    });
  }

  return (
    <div className="App">

      <div className="login-box">
        <p>Login App</p>

        <div className='input-box'>
          <label htmlFor='email'>E-mail</label>
          <input className={invalidEmail || (tried && email === '') ? 'error' : ''} id='email' onChangeCapture={(ev) => { setEmail(ev.target.value); setTried(false) }} />
          {invalidEmail && <p className='error'>Invalid e-mail address</p>}
          {tried && email === '' && <p className='error'>Please enter a valid e-mail address</p>}
        </div>

        <div className='input-box'>
          <label htmlFor='Password'>Password</label>
          <input className={invalidPass || (tried && pass === '') ? 'error' : ''} id='Password' type='password' onChangeCapture={(ev) => { setPass(ev.target.value); setTried(false) }} />
          {tried && pass === '' && <p className='error'>Please enter a valid password</p>}
          <small >Minimum of six digits</small>
        </div>

        <div className='button-box'>
          <button onClick={() => submit()} type='submit' disabled={tried && ((invalidEmail || !email) || (invalidPass || !pass))} className='login-button'>Login</button>
          <span className='register-text'> Doesn't have an account?
            <a className='register'>Sign up</a>
          </span>
        </div>
      </div>

    </div>
  );
}

export default App;
