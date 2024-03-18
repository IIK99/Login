import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { functionLogout } from "../Page/redux/slices/userSlice";
import { useEffect } from "react";

export default function NavbarComponent() {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    console.log("test");
    dispatch(functionLogout());
  };

  useEffect(() => {
    console.log(userSelector);
  }, [userSelector.id]);

  return (
    <>
      <div className=" flex justify-between p-7 pb-4 border-b-2 border-gray-400">
        {/* Logo */}
        <div className=" font-bold text-2xl text-sky-600">Logo</div>

        {/* Menu */}
        <div className=" flex gap-4 font-semibold">
          <div>Home</div>
          <div>Service</div>
          <div>Contact</div>
        </div>

        {/* Login & Register */}
        {userSelector?.id ? (
          <div className="flex gap-3">
            <div>Welcome, {userSelector?.name}</div>
            <Link
              className=" px-2 rounded-md border-gray-500 border"
              onClick={logout}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className=" flex gap-3">
            <Link
              className=" px-2 rounded-md border-gray-500 border"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className=" px-2 rounded-md border-gray-500 border"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
