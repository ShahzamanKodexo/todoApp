import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UnAuth({ children }) {
  const user = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return <div>{children}</div>;
}

export default UnAuth;
