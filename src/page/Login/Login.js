import React from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

function Login({ token, setToken }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [recoveryCode, setRecoveryCode] = React.useState("");

  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [isRecoveryCode, setIsRecoveryCode] = React.useState(false);
  const [disBnt, setDisBnt] = React.useState(false);

  const [errorText, setErrorText] = React.useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
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
  };

  const sendEmailHandler = () => {
    setDisBnt(true);
    fetch(
      `https://api.fern.fun/fern/account/get/recovery/code/${email}/${username}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setIsRecoveryCode(true);
          setErrorText("");
          setPassword("");
        } else {
          setErrorText("Wrong email or username");
          setDisBnt(false);
        }
      });
  };

  const changePassword = () => {
    fetch(`https://api.fern.fun/fern/account/change/password/${username}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recovery_code: recoveryCode,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failure") {
          setErrorText(data.reason);
        } else {
          setForgotPassword(false);
          setErrorText("");
        }
      });
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="loginPanel">
        <div></div>
        <div className="loginPanelElement">
          {!forgotPassword ? (
            <>
              <div className="loginPanelForm">
                <label>Username</label>
                <input
                  name="username"
                  type={"text"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="loginPanelForm">
                <label>Password</label>
                <input
                  name="password"
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="loginPanelForm">
                <span id="error">{errorText}</span>
                <button onClick={loginHandler}>Login</button>
                <a id="login">
                  Not on Tools yet? <a href="/signup">Sign up</a>
                </a>
                <a
                  id="login"
                  onClick={(e) => (setForgotPassword(true), setErrorText(""))}
                >
                  <a>Forgot Password?</a>
                </a>
              </div>
            </>
          ) : !isRecoveryCode ? (
            <>
              <div className="loginPanelForm">
                <label>Username</label>
                <input
                  name="username"
                  type={"text"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="loginPanelForm">
                <label>Email</label>
                <input
                  name="email"
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="loginPanelForm">
                <span id="error">{errorText}</span>
                {disBnt ? (
                  <button onClick={sendEmailHandler} disabled>
                    Send Email
                  </button>
                ) : (
                  <button onClick={sendEmailHandler}>Send Email</button>
                )}
                <a id="login" onClick={(e) => setForgotPassword(false)}>
                  <a>Login</a>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="loginPanelForm">
                <label>Username</label>
                <input
                  name="username"
                  type={"text"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="loginPanelForm">
                <label>Recovery code</label>
                <input
                  name="recovery_code"
                  type={"text"}
                  value={recoveryCode}
                  onChange={(e) => setRecoveryCode(e.target.value)}
                  required
                />
              </div>
              <div className="loginPanelForm">
                <label>New password</label>
                <input
                  name="passowrd"
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="loginPanelForm">
                <span id="error">{errorText}</span>
                <button onClick={changePassword}>Change passowrd</button>
                <a id="login" onClick={(e) => setForgotPassword(false)}>
                  <a>Login</a>
                </a>
              </div>
            </>
          )}
        </div>
        <div id="footer"></div>
      </div>
    </div>
  );
}

export default Login;
