import { React, useState } from "react";
import "./RegisterForm.css";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import LoginForm from "../LoginForm/LoginForm";
import { Helmet } from "react-helmet";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState({ visibility: "hidden" });

  /* <==============> REGISTER SYSTEM <==============>*/
  const registerHandler = (event) => {
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
        email: email,
      }),
    };

    fetch("", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  /* <==============> USERNAME ON CHANGE SAVE <==============>*/
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  /* <==============> PASSWORD ON CHANGE SAVE<==============>*/
  const passwordHandler = (event) => {
    setPassowrd(event.target.value);
  };

  /* <==============> EMAIL ON CHANGE SAVE<==============>*/
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  /* <==============> LOGIN FORM ON <==============>*/
  const [loginTo, setLoginTo] = useState(false);
  const loginToogleHandler = () => {
    setLoginTo(true);
  };

  return loginTo ? (
    <div>
      <LoginForm />
    </div>
  ) : (
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
          <span className="labelTitle">Sing Up</span>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={usernameHandler}
            className=""
            require
          />
          <label>Email: </label>
          <input
            type="email"
            onChange={emailHandler}
            name="email"
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
          <input type="submit" onClick={registerHandler} />
          <span className="link" onClick={loginToogleHandler}>
            Have any account?
          </span>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
