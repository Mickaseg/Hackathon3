import "./screens-styles/Login.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const Login = () => {
  // const isAuthenticated = useAuth0();
  return (
    <div className="login">
      <div className="loginContainer">
        <LogoutButton />
        <LoginButton />
      </div>
    </div>
  );
};

export default Login;
