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

// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheck } from "react-icons/fa6";
import axios from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [jobId, setJobId] = useState("");
  const [validName, setValidName] = useState("");
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [role, setRole] = useState("");
  const [court, setCourt] = useState("6543a67161a0e93957dd3443");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setValidName(USER_REGEX.test(validName));
  // }, [validName]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [jobId, validName, password, matchPwd]);

  const handleSubmit = async (e) => {
    console.log("test-register");
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(jobId);
    const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    try {
      let roleName = "";
      let data = {
        jobId,
        name: validName,
        password,
        roles: {

        },
        court,
      };
      if (role === "8888") {
        // roleName = "Judge";
        data.roles = {
          'Judge': role,
        };
      } else if (role === "9999") {
        // roleName = "CourtAdmin";
        data.roles = {
          'CourtAdmin': role,
        };
      }
      const response = await axios.post(
        REGISTER_URL,
        // JSON.stringify({
        //   jobId,
        //   validName,
        //   password,
        //   roles: {
        //     roleName: roleName,
        //   },
        //   court,
        // }),
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setJobId("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
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
            <p className="font-bold text-3xl"> Register </p>
          </div>
          <div className="flex justify-start flex-col w-full space-y-2">
            <div className="flex flex-col w-full space-y-2">
              <p className="flex justify-start text-center font-semibold">
                Name*
              </p>
              <input
                className="border-2 border-gray-400 rounded-xl px-2 py-1"
                placeholder="Enter Name"
                type="text"
                id="username"
                // ref={userRef}
                autoComplete="off"
                onChange={(e) => setValidName(e.target.value)}
                value={validName}
                required
              ></input>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <p className="flex justify-start text-center font-semibold">
                Job Id*
              </p>
              <input
                className="border-2 border-gray-400 rounded-xl px-2 py-1"
                placeholder="Enter ID"
                type="text"
                id="jobId"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setJobId(e.target.value)}
                value={jobId}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              ></input>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <p className="flex justify-start text-center font-semibold">
                Confirm Password*
              </p>
              <input
                className="border-2 border-gray-400 rounded-xl px-2 py-1"
                placeholder="Enter password"
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              ></input>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <p className="flex justify-start text-center font-semibold">
                Role
              </p>
              <select
                className="border-2 border-gray-400 rounded-xl px-2 py-1"
                placeholder="Select Role"
                type="number"
                id="role"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setRole(e.target.value)}
                value={role}
                required
              >
                <option value="8888">Judge</option>
                <option value="9999">Court Admin</option>
              </select>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <p className="flex justify-start text-center font-semibold">
                Court
              </p>
              <select
                className="border-2 border-gray-400 rounded-xl px-2 py-1"
                placeholder="Select Role"
                type="text"
                id="court"
                ref={userRef}
                autoComplete="off"
                // onChange={(e) => setCourt(e.target.value)}
                // value={court}
                defaultValue={court}
                required
              >
                <option value="judge">Criminal Court</option>
                <option value="courtadmin">Civil Court</option>
              </select>
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
            <button
              type="submit"
              className="rounded-2xl bg-yellow-200 py-1 font-bold w-56 text-center flex justify-center items-center hover:shadow-yellow-200 hover:shadow-sm hover:scale-105 duration-300 ease-in-out"
              // disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              SUBMIT
            </button>
            {/* <p className="font-semibold hover:text-green-400 duration-300 ease-in-out flex justify-center text-center">
              <Link to="/register"> Not registered yet? Sign In </Link>
            </p> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
