import React, { useState } from "react";

export default function SignIn() {
  // const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    //    const updateLogin = { :  };
    console.log(login);
    login[e.target.id] = e.target.value;
    setLogin(login);
    //console.log(updateLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-1">Login</button>
        </div>
      </form>
    </div>
  );
}
