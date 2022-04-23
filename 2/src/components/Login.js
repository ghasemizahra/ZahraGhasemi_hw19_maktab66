import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckLogin from "./checkLogin"
const Login = () => {
  const navigate = useNavigate();
  const { userLogin, setUserLogin } = useContext(CheckLogin);
  const handelSubmit = () => {
    setUserLogin(true);
    navigate("/create", { state: "wellcome !", replace: true });
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="userName" />
        <br />
        <button onClick={handelSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Login;