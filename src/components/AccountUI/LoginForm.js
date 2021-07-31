import { React, useState } from "react";
import "./LoginForm.css";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState({ visibility: "hidden" });

  /* <==============> LOGIN SYSTEM <==============>*/
  const loginHandler = (event) => {
    setLoading({ visibility: "visible" });
    event.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "true",
        "Content-Language": "POST",
        Authorization: "zewytA5QVjqGrRjx",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    // fetch("", reqOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    console.log(reqOptions.body);
  };

  /* <==============> USERNAME ON CHANGE SAVE <==============>*/
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  /* <==============> PASSWORD ON CHANGE SAVE<==============>*/
  const passwordHandler = (event) => {
    setPassowrd(event.target.value);
  };

  return (
    <div className="loginFormPanel">
      <div className="loginFormPanelForm">
        <div className="loginFormPanelFormSpinner" style={loading}>
          <ClipLoader
            color={"white"}
            loading={true}
            css={css`
              display: block;
              margin: auto;
            `}
            size={100}
          />
        </div>
        <form>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={usernameHandler}
            className=""
            require
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={passwordHandler}
            name="password"
            className=""
            require
          />

          <input type="submit" onClick={loginHandler} />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
