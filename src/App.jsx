import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Page/auth/login";
import RegisterPage from "./Page/auth/register";
import HomePage from "./Page/home";
import { useDispatch } from "react-redux";
import { functionLogin } from "./Page/redux/slices/userSlice";
import { axiosInstance } from "./api/axios";
import { routes } from "./routes/protectedPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const keepLogin = () => {
    console.log("test");
    const id = localStorage.getItem("user");
    axiosInstance()
      .get(`/users/${id}`)
      .then((res) => {
        delete res.data.password;
        console.log(res.data);

        dispatch(functionLogin(res.data));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    keepLogin();
    console.log(routes);
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Routes>
          {routes.map((route, key) => {
            return <Route {...route} key={key} />;
          })}
        </Routes>
      )}
    </>
  );
}
