import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axios";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();

  // const inpuHandler = (e) => {
  //   const key = e.target.id; // menampung value id dari element input
  //   const { value } = e.target; // menampung value dari element input
  //   setUser((prevUser) => {
  //     return { ...prevUser, [key]: value };
  //   });
  // };

  // useEffect
  // component did mount
  // component did update
  // component will unmount
  const [show, setShow] = useState(false);
  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email("Ini bukan E-mail"),
      password: Yup.string().required().min(5, "Minimal 5 karakter").matches(),
    }),
    onSubmit: () => {
      daftar();
    },
  });

  // useEffect(() => {
  //   console.log(user);
  //   if (user.email && user.password && user.name) setShow(true);
  //   else setShow(false);
  // }, [user]);

  const daftar = () => {
    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    // console.log(name, email, password);
    const user = formik.values;
    if (user.email && user.name && user.password) {
      axiosInstance()
        .post("/users", user)
        .then((res) => {
          console.log(res.data);
          formik.resetForm();
          alert("Register berhasil");
          nav("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen text-sm">
        <div className=" flex flex-col max-w-[440px]">
          <h1 className=" text-3xl font-semibold">Bikin akun baru</h1>
          <p className=" text-[#989898] text-[13px]">
            Nggak susah kook, kamu cuma tinggal masukin beberapa data aja terus
            langsung jadideh!
          </p>

          <div className=" font-bold mt-5">Nama Lengkap</div>
          <input
            className=" px-2 bg-[#f3f4f6] rounded-lg min-h-[40px]"
            placeholder="Ikmal"
            onChange={(e) => formik.setFieldValue("name", e.target.value)} // panggil function
            id="name"
            value={formik.values.name}
          ></input>
          <div className=" my-1 text font-semibold text-red-500">{formik.errors.name}</div>

          <div className=" font-bold mt-5">E-Mail</div>
          <input
            type="email"
            className=" px-2 bg-[#f3f4f6] rounded-lg min-h-[40px]"
            placeholder="Ikmal99@mail.com"
            onChange={formik.handleChange}
            id="email"
            value={formik.values.email}
          ></input>
          <div className=" my-1 text font-semibold text-red-500">{formik.errors.email}</div>

          <div className=" font-bold mt-5">Kata Sandi</div>
          <input
            type="password"
            className=" px-2 bg-[#f3f4f6] rounded-lg min-h-[40px]"
            onChange={formik.handleChange}
            id="password"
            value={formik.values.password}
          ></input>
          <div className=" my-1 text font-semibold text-red-500">{formik.errors.password}</div>

          <p className=" mt-5 text-[#989898] text-[13px]">
            Dengan mendaftar berarti anda setuju dengan Terms of Service dan
            Privacy Policy dari Namanyajugabelajar.oi
          </p>

          <button
            className=" rounded-lg mt-5 text-white bg-[#4f46e5] hover:bg-[#6f69e7] h-16"
            onClick={formik.handleSubmit}
          >
            Mendaftar
          </button>
        </div>
      </div>
    </>
  );
}
