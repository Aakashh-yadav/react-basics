import { useContext } from "react";
import UserContext from "../context/usercontext";
function Login() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username} and your password is {user.password}</div>;
}

export default Login;
