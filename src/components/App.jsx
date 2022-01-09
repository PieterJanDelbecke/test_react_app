import React from "react";

const users = [
  {
    email: "h@gmail.com",
    password: "password",
  },
  {
    email: "ed@gmail.com",
    password: "123456",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      successMessage: "",
      email: "",
      password: "",
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({
      errorMessage: "",
      successMessage: "",
    });

    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      // also check password
      if (foundUser.password === password) {
        this.setState({
          successMessage: "User successfully authenticated!",
        });
      } else {
        this.setState({
          errorMessage: "Wrong credentials have been entered!",
        });
      }
    } else {
      this.setState({
        errorMessage: "Wrong credentials have been entered!",
      });
    }
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    const { errorMessage, successMessage, email, password } = this.state;
    return (
      <div className="container">
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
        <h2>Login</h2>
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.onInputChange}
          />
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default App;
