import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { Logo, Input, Button } from "./index";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // this register as well as handleSubmit is an event
  // handleSubmit called on the submitsion of form
  // while using register event, firstly we have to spread it, otherwise another component will override it
  // and then use id/key, for ex: here email and password and then define it's properties/attributes whichever you want!
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don't Have any aacount
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login())} className="mt-8">
          <div className="space-y-5">
            <Input
              lable="Email: "
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input 
            lable="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password",{
                required:true
            })}
            />
            <Button 
            type="submit"
            className="w-full"
            >Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
