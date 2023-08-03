import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ children }) {
  const user = JSON.parse(localStorage.getItem("userData"));

  // console.log("---", user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return <div>{children}</div>;
}

export default Auth;
