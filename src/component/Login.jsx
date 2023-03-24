import React, { useState, useLayoutEffect, useRef } from "react";
import Cookies from "js-cookie";
import "./Login.css";

var username2;

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      rememberMe: rememberMe,
    };
    const response = await fetch(`http://127.0.0.1:5173/userfetch`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    console.log(jwt.status);
    username2 = jwt.username; //set this in component
    console.log(username2);

    onLogin(username2);
    localStorage.setItem("username", username2);

    if (rememberMe == true) {
      Cookies.set("myCookie", `${jwt.jwttoken}`, { expires: 14, path: "/" });
      if (jwt.buss_id) {
        Cookies.set("buss_id", `${jwt.buss_id}`, { expires: 14, path: "/" });
        Cookies.set("companyName", `${jwt.companyName}`, {
          expires: 14,
          path: "/",
        });
        window.location.href = "/businessProfile";
      } else {
        if (jwt.rsrc_id) {
          Cookies.set("rsrc_id", `${jwt.rsrc_id}`, { expires: 14, path: "/" });
          window.location.href = "/ResearcherProfile";
        } else {
          alert(`Wrong Credentials`);
        }
      }
    } else {
      Cookies.set("myCookie", `${jwt.jwttoken}`, { expires: 2, path: "/" });
      if (jwt.buss_id) {
        Cookies.set("buss_id", `${jwt.buss_id}`, { expires: 2, path: "/" });
        Cookies.set("companyName", `${jwt.companyName}`, {
          expires: 2,
          path: "/",
        });
        window.location.href = "/businessProfile";
      } else {
        if (jwt.rsrc_id) {
          Cookies.set("rsrc_id", `${jwt.rsrc_id}`, { expires: 2, path: "/" });
          window.location.href = "/ResearcherProfile";
        } else {
          alert(`Wrong Credentials`);
        }
      }
    }
  };
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const scrollRef = useRef(null);
  useLayoutEffect(() => {
    if (scrollRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="login" ref={scrollRef}>
      <h2 className="login-h">Login</h2>
      <form className="login-form">
        <div className="login-username">
          <label htmlFor="username" className="login-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="login-form-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          {/* <label htmlFor="username" className="login-label">Username:</label>
                    <input type="text" id="username" className="login-form-input" /> */}
        </div>
        <div className="login-username">
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="login-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <input type="checkbox" id="remember-me" className="login-checkbox" />
                    <label htmlFor="remember-me" className="login-checkbox-label">Remember me for a week</label> */}
          <input
            type="checkbox"
            id="rememberMe"
            className="login-checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe" className="login-checkbox-label">
            Remember me
          </label>
        </div>
        <div className="button_ani login-button-div" onClick={handleSubmit}>
          <button type="submit" className="login-button button2">
            Login
          </button>
        </div>
      </form>
      <p className="login-p">
        Don't have a account?{" "}
        <a href="/Signup" style={{ color: "#04ff69" }}>
          Create an account
        </a>
      </p>
      <p className="login-forgot-password">
        <a href="/forgot" style={{ color: "#04ff69" }}>
          Forgot Password
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
