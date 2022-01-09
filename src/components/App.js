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
      </div>
    )
  }
}


export default App;
