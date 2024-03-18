import { useEffect, useState } from "react";
import LoginPage from "../Page/auth/login";
import RegisterPage from "./../Page/auth/register";
import HomePage from "../Page/home";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({ children, userOnly, guestOnly }) {
  const userSelector = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    console.log(userSelector, "Ini user");
    console.log(guestOnly, userSelector.id);
    if (guestOnly && userSelector.id) {
      nav("/");
    } else if (userOnly && !userSelector.id) {
      nav("/login");
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [userSelector.id, children]);
  return <>{isLoading ? <div>Loading...</div> : children}</>;
}

class RouteClass {
  constructor(path, element, userOnly, guestOnly) {
    this.path = path;
    this.element = (
      <ProtectedPage userOnly={userOnly} guestOnly={guestOnly}>
        {element}
      </ProtectedPage>
    );
  }
}

export const routes = [
  new RouteClass("/", <HomePage />, true),
  new RouteClass("/login", <LoginPage />, false, true),
  new RouteClass("/register", <RegisterPage />, false, true),
];
