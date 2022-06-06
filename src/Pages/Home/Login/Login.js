import React, { useEffect } from "react";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  useEffect( () =>{
      if (token) {
          navigate(from, { replace: true });
      }
  }, [token, from, navigate])

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="login bg-slate-900">
      <div className="form">
        <h1 className="text-3xl mb-2">Login!!</h1>
        <form className="justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full text-black max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered text-black w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          {signInError}
          <input
            className="btn w-full rounded my-4 max-w-xs text-white"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          <small>
            Dot't have an Account?{" "}
            <Link className="text-red-500 text-sm ml-1" to="/signup">
              Signup
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="google-signin w-full">
          <FcGoogle style={{ fontSize: "30px" }}></FcGoogle>Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
