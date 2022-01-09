import React from 'react'


const users = [
  {
    email: "h@gmail.com",
    password: 'password'
  },
  {
    email: "ed@gmail.com",
    password: "123456"
  }
]

class App extends React.Component {
  render(){
    console.log(users)
    return(
      <div className='container'>
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" />
          <input type='submit' value="Submit" id="submit" />
        </form>
      </div>
    )
  }
}


export default App;
