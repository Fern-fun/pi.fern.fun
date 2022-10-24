import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const delCookie = (cname) => {
  document.cookie = cname + "=; Max-Age=-99999999;";
};

export const Auth = ({ state }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      if (getCookie("token") === "") {
        navigate("/login");
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (getCookie("token") !== "") {
      fetch(
        "https://api.fern.fun/discord/get/user?access_token=" +
          getCookie("token")
      )
        .then((res) => res.json())
        .then((res) => {
          navigate(`/${state}`);
        })
        .catch((err) => {
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);

  return <></>;
};

export const isAuth = () => {
  if (getCookie("token") != "") {
    return true;
  } else {
    return false;
  }
};

export const Logout = () => {
  delCookie("token");
};
