import { useState } from "react";
import UserContext from "./usercontext";


const UserContextProvder = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setuser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvder;
