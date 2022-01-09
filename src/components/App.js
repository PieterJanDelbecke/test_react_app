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

  constructor(props){
    super(props)
    this.state = {
      errorMessage: "",
      successMessage: ""
    }
  }

  onFormSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      errorMessage: ""
    })
    const formElements = event.target.children
    const emailInput = formElements[1]
    const passwordInput = formElements[3]
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    const foundUser = users.find((user) => user.email === emailValue)
    console.log(foundUser)
    if (foundUser){
      // also check password
      if(passwordValue === foundUser.password){
        this.setState({
          successMessage:"User successfully authenticated!"
        })
      } else {
        this.setState({
          errorMessage: "Wrong credentials have been entered!"
        })
      }
    } else {
      this.setState({
        errorMessage: "Wrong credentials have been entered!"
      })
    }
  }


  render(){
    return(
      <div className='container'>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        {this.state.successMessage && <p>{this.state.successMessage}</p>}
        <h2>Login</h2>
        <form className="login-form" onSubmit={this.onFormSubmit}>
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
