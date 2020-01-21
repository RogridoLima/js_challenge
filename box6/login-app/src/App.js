import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-box">
        <p>Login App</p>

        <div className='input-box'>
          <label for='email'>Email</label>
          <input id='email' />
        </div>

        <div className='input-box'>
          <label for='Password'>Password</label>
          <input id='Password' type='password' />
        </div>

        <div className='button-box'>
          <button className='login-button'>Login</button>
          <span className='register-text'> Doesn't have an account?
            <a className='register'>Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
