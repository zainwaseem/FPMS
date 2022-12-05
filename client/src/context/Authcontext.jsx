import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthcontextProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/loggedin");
    console.log(loggedInRes.data);
    setisLoggedIn(loggedInRes.data);
  }
  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
export { AuthcontextProvider };
