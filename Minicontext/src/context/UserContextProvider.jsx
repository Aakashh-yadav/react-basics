import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import UserContext from "./usercontext";

const UserContextProvder = ({ children }) => {
  const [user, setuser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

// Prop-types validation for children
UserContextProvder.propTypes = {
  children: PropTypes.node.isRequired, //this is for the prevention of the Children incase not avilable
};

export default UserContextProvder;
