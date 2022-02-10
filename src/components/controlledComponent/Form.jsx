import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
