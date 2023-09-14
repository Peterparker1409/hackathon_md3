import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6868/api/v1/auth/signin", { username, password })
      .then((res) => {
        console.log(res.data);
        navigate("/todo");
        localStorage.setItem("token", res.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5 ">
      <form className="m-auto" style={{ width: "40%" }} onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputusername1" className="form-label">
            username address
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="usernameHelp"
            name={username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
