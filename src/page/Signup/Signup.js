import React from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

function Signup({ token, setToken }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [usernameError, setUsernameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  const signupHandler = () => {
    if (username.length < 3) {
      setErrorText("Username.length >= 3");
      return;
    }

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setErrorText("Wrong email");
      return;
    }

    if (password.length < 6) {
      setErrorText("Password.length > 6");
      return;
    }

    fetch("https://api.fern.fun/fern/account/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "success") {
          setErrorText(data.reason);
          return;
        } else {
          fetch(`https://api.fern.fun/fern/account/get/session/`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "failure") {
                setErrorText(data.reason);
              } else {
                localStorage.setItem("session", data.session.split("|")[0]);
                localStorage.setItem("username", username);
                setToken(data.session.split("|")[0]);
                navigate("/");
              }
            });
        }
      });
  };

  const onChangeUsername = (e) => {
    if (e.target.value.length < 4) {
      setUsernameError("#ad3b45");
    } else {
      setUsernameError("");
    }

    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError("#ad3b45");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    if (e.target.value.length < 6) {
      setPasswordError("#ad3b45");
    } else {
      setPasswordError("");
    }

    setPassword(e.target.value);
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="loginPanel">
        <div></div>
        <div className="loginPanelElement">
          <div className="loginPanelForm">
            <label>Username</label>
            <input
              name="username"
              type={"text"}
              value={username}
              onChange={onChangeUsername}
              style={usernameError ? { borderColor: usernameError } : null}
              required
            />
          </div>
          <div className="loginPanelForm">
            <label>Email</label>
            <input
              name="email"
              type={"email"}
              value={email}
              style={emailError ? { borderColor: emailError } : null}
              onChange={onEmailChange}
              required
            />
          </div>
          <div className="loginPanelForm">
            <label>Password</label>
            <input
              name="password"
              type={"password"}
              value={password}
              onChange={onPasswordChange}
              style={passwordError ? { borderColor: passwordError } : null}
              required
            />
          </div>
          <div className="loginPanelForm">
            <span id="error">{errorText}</span>
            <button onClick={signupHandler}>Sign up</button>
            <a id="login" href="/login">
              Already a member? <a>Log in</a>
            </a>
            <div>
              <span>
                By continuing, you agree to Our{" "}
                <a href="/terms-of-service">Terms of Service</a> Opens a new tab
                and acknowledge that you've read our{" "}
                <a href="/privacy-policy">Privacy Policy</a> Opens a new tab
              </span>
            </div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    </div>
  );
}

export default Signup;
