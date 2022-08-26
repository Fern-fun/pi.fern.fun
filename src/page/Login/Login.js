import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (
      searchParams.get("token") &&
      searchParams.get("expires") &&
      searchParams.get("refresh")
    ) {
      // Add sec to current date to get expiry date
      let date = new Date();
      date.setSeconds(
        date.getSeconds() + parseInt(searchParams.get("expires"))
      );
      // Set cookies
      setCookie("token", searchParams.get("token"), {
        path: "/",
        expires: date,
      });
      setCookie("refresh", searchParams.get("refresh"), {
        path: "/",
        expires: date,
      });
      // Redirect to home
      navigate("/");
    } else {
      console.log("no token");
      // Redirect to login
      navigate("/");
    }
  }, []);
  return (
    <div className="loading">
      <img src="/img/loading.svg" />
    </div>
  );
}

export default Login;
