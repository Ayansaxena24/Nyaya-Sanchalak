import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Images/ministryLogo.jpg";
import { BsFillTriangleFill } from "react-icons/bs";
import LoginLogo from "../../assets/Images/Login/LoginLogo.png";
import judge from "../../assets/Images/Login/judge.png";
import staff from "../../assets/Images/Login/staff.png";
import Ellipse1 from "../../assets/Images/Login/Ellipse1.png";
import Ellipse2 from "../../assets/Images/Login/Ellipse2.png";
import Ellipse3 from "../../assets/Images/Login/Ellipse3.png";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const [userType, setUserType] = useState("");
  const setUserJudge = () => {
    setUserType("judge");
  };
  const setUserStaff = () => {
    setUserType("staff");
  };

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current = userRef.current || { focus: () => {} }; // Ensure userRef.current is an object with a focus method
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      // errRef.current.focus();
    }
  };

  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      <div className="flex flex-col min-w-[500px] max-w-[500px] justify-between bg-[#E1EEDD] h-screen pl-4 pr-2 pt-2">
        <div>
          <img className="h-12 w-32 font-bold" src={logo}></img>
          <div className="w-full justify-center mt-20">
            <img className="h-[350px] w-[450px]" src={LoginLogo}></img>
          </div>
          <div className="flex w-full justify-center mt-16">
            <p className="font-bold text-center justify-center text-2xl items-center px-16">
              “The law always limits every power it gives.”
            </p>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 w-[200px] h-[200px]"
          src={Ellipse1}
        />
      </div>
      {/* right panel */}
      {userType === "" ? (
        <div className="w-[1020px] h-screen flex justify-center flex-col space-y-12">
          <img
            className="absolute top-0 right-0 w-[200px] h-[260px]"
            src={Ellipse2}
          />
          <img
            className="absolute top-28 right-0 w-[150px] h-[200px]"
            src={Ellipse3}
          />
          <div className="w-full flex justify-center">
            <p className="font-bold text-3xl"> Login </p>
          </div>
          <div className="flex space-x-24 w-full justify-center">
            <img
              onClick={setUserJudge}
              className="h-[210px] w-[180px] hover:shadow-green-200 hover:opacity-80 hover:shadow-sm rounded-xl duration-300 ease-in-out"
              src={judge}
            ></img>
            <img
              onClick={setUserStaff}
              className="h-[210px] w-[180px] hover:shadow-green-200 hover:opacity-80 hover:shadow-sm rounded-xl duration-300 ease-in-out"
              src={staff}
            ></img>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold hover:text-green-400 duration-300 ease-in-out">
              <Link to="/register"> Not registered yet? Sign Up </Link>
            </p>
          </div>
        </div>
      ) : userType === "judge" || userType === "staff" ? ( // judge login
        <form
          onSubmit={handleSubmit}
          className="w-[1020px] h-screen flex justify-center items-center flex-col space-y-12"
        >
          <img
            className="absolute top-0 right-0 w-[200px] h-[260px]"
            src={Ellipse2}
          />
          <img
            className="absolute top-28 right-0 w-[150px] h-[200px]"
            src={Ellipse3}
          />
          <div className="flex justify-center flex-col w-80 space-y-6">
            <div className=" flex justify-center">
              <p className="font-bold text-3xl"> Login </p>
            </div>
            <div className="flex justify-start flex-col w-full space-y-6">
              <div className="flex flex-col w-full space-y-2">
                <p className="flex justify-start text-center font-semibold">
                  Job Id*
                </p>
                <input
                  className="border-2 border-gray-400 rounded-xl px-2 py-1"
                  placeholder="Enter ID"
                  type="text"
                  id="userName"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                ></input>
              </div>
              <div className="flex flex-col w-full space-y-2">
                <p className="flex justify-start text-center font-semibold">
                  Password*
                </p>
                <input
                  className="border-2 border-gray-400 rounded-xl px-2 py-1"
                  placeholder="Enter password"
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                ></input>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <input type="checkbox"></input>
                <p>Remember me</p>
              </div>
              <button className="hover:text-green-400 duration-300 ease-in-out">
                Forgot password?
              </button>
            </div>
            <div className="flex justify-center flex-col items-center space-y-4 pb-6">
              <button type="submit" className="rounded-2xl bg-yellow-200 py-1 font-bold w-56 text-center flex justify-center items-center hover:shadow-yellow-200 hover:shadow-sm hover:scale-105 duration-300 ease-in-out">
                SUBMIT
              </button>
              <p className="font-semibold hover:text-green-400 duration-300 ease-in-out flex justify-center text-center">
                <Link to="/register"> Not registered yet? Sign In </Link>
              </p>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
