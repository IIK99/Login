import { useDispatch } from "react-redux";
import { functionLogin } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axios";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    axiosInstance()
      .get("/users", {
        params: { email, password },
      })
      .then((res) => {
        if (res.data?.length) {
          const { name } = res.data[0];
          delete res.data[0].password;
          dispatch(functionLogin(...res.data));

          localStorage.setItem("user", res.data[0].id);

          navigate("/");
        } else {
          alert("User not found");
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen text-sm">
        <div className=" flex flex-col max-w-[440px]">
          <h1 className=" text-3xl font-semibold">Masukan akun kamu</h1>
          <p className=" text-[#989898] text-[13px]">
            Belajar gratis di Namanyajugabelajar.io, dan melalui karir yang kamu
            cita-cita sejak dalam embrio
          </p>

          <div className=" font-bold mt-5 mb-2">E-mail</div>
          <input
            className=" px-3 bg-[#f3f4f6] rounded-lg h-9"
            placeholder="Ikmal@mail.com"
            type="email"
            id="email"
          ></input>

          <div className=" font-bold mt-5 mb-2">Password</div>
          <input
            className=" px-3 bg-[#f3f4f6] rounded-lg h-9"
            id="password"
            type="password"
          ></input>

          <button
            className=" rounded-lg mt-5 text-white bg-[#4f46e5] hover:bg-[#6f69e7] h-11"
            onClick={login}
          >
            Masuk
          </button>
        </div>
      </div>
    </>
  );
}
