import React, { Component } from "react";

class SignUp extends Component {
  // const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    console.log(this.state);
    this.setState({
      [e.target.id]: e.target.value,
    });

    //    const updateLogin = { :  };
    //console.log(([e.target.id] = e.target.value));
    // login[e.target.id] = e.target.value;
    // setLogin(login);
    //console.log(updateLogin);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
