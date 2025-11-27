import React from 'react';
import './register.css';


function Register() {
  return (
    <React.Fragment className="d-flex justify-content-center">
      <div className='form-container'>
        <h2 className="bi bi-person-circle">Register</h2>
        <form form-container>
         <dl>
          <dt><label htmlFor="username">Username:</label></dt>
          <dd><input type="text" id="username" name="username" /></dd>

          <dt><label htmlFor="email">Email:</label></dt>
          <dd><input type="email" id="email" name="email" /></dd>

          <dt><label htmlFor="password">Password:</label></dt>
          <dd><input type="password" id="password" name="password" className="form-control"/></dd>

          <dt><button className="btn btn-warning" type="submit">Register</button></dt>
         </dl>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Register;