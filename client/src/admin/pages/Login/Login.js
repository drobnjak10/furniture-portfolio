import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAuth } from "../../../contexts/AuthContext";
import { postHandler } from "../../../helpers/api";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const cookie = new Cookies();

  const handleSubmit = async (e) => {
    console.log("e");
    e.preventDefault();
    const data = await postHandler("/user/login", { email, password });

    if (data.error) {
      setError(data.error);
      return;
    }

    if (data?.status) {
      console.log("data", data);
      cookie.set("access_token", data.token);
      login(data.token);
    }
  };

  useEffect(() => {
    if (cookie.get("access_token")) {
      navigate("/admin");
    }
  }, [user]);

  return (
    <div className="login">
      <div className="container">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button>Login</button>
          </form>
          {/* { error && <Alert variant='danger'>{error}</Alert> } */}
        </div>
      </div>
    </div>
  );
};

export default Login;
