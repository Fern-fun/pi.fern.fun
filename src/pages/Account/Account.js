import { React, useState } from "react";
import LoginForm from "../../components/AccountUI/LoginForm";

function Account() {
  const [logged, setLogged] = useState(false);
  const [accountData, setAccountData] = useState([]);

  return logged ? <div></div> : <LoginForm />;
}

export default Account;
