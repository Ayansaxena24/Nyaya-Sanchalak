import React from "react";
import logo from "../assets/Images/ministryLogo.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const CaseFiling = () => {
  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      <div className="flex flex-col min-w-[300px] justify-between bg-[#E1EEDD] h-screen pl-4 pr-2 pt-2">
        <div>
          <img className="h-12 w-32 font-bold" src={logo}></img>
          <div className="space-y-2 mt-4">
            <p className="mt-4 text-gray-400"> MENU </p>
            <div className="font-semibold space-y-2">
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <Link to="/"> Home </Link>
              </p>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                Hearing Schedule{" "}
              </p>
              <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2"><Link to="/calendar" >View Monthly Schedule </Link></p>
              </div>
              <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2"> <Link to="/dailycalendar"> View Daily Schedule </Link></p>
              </div>
              <p className=" hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <Link to="/caseregistration"> Case Registration </Link>
              </p>
              <p className="absolute pl-4 left-0 duration-300 ease-in-out w-[300px] bg-green-300">
                {" "}
                Case Filing{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex pb-10 w-full justify-center">
          <button className="flex rounded-lg justify-center border-2 border-gray-400 px-20 mr-2 font-bold py-2 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
            {" "}
            Log Out{" "}
          </button>
        </div>
      </div>
      <div className="w-[1235px] pt-8">
        <div className="flex flex-col space-y-4">
          <div className="w-full justify-center items-center text-center">
            <p className="font-semibold text-2xl"> CASE DETAILS </p>
          </div>
          <div className="flex space-x-12 justify-between px-10 items-center text-center">
            <div className="flex space-x-6">
              <div className="flex space-x-2">
                <input type="radio" name="caseType"></input>
                <p> Civil </p>
              </div>
              <div className="flex space-x-2">
                <input type="radio" name="caseType"></input>
                <p> Criminal </p>
              </div>
              <div className="flex space-x-2">
                <input type="radio" name="caseType"></input>
                <p> Caveat Filing</p>
              </div>
            </div>
            <div className="flex w-80">
              <p className="flex mt-1">Case Type</p>
              <select
                className="px-20 py-1 rounded-lg border-2 border-gray-400 ml-2"
                placeholder="Enter Case Type"
              >
                <option value="type1">Type 1</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center space-y-1"></div>
        </div>
        <hr className=" text-md border-1 mx-10 bg-black text-black border-black"></hr>
        <form className="h-full mx-14">
          <div className="flex space-x-1 mt-4">
            <p>Organisation Details</p>
            <AiOutlineCheckCircle className="mt-1" />
          </div>
          {/* First Line of input */}
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Plaintiff</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Plaintiff"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Gender</p>
              <select
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Select Gender"
              >
                <option placeholder="Select Gender"></option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col w-80">
              <p>Age</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Age"
              ></input>
            </div>
          </div>
          {/* second line of input */}
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Name of Advocate</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Name of Advocate"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Bar Registration Number</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Bar Registration Number"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Email</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Email"
              ></input>
            </div>
          </div>
          {/* Third line of input */}
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Extra Petitioner Count</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Extra Petitioner Count"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Mobile Number</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Mobile Number"
              ></input>
            </div>
            <div className="flex flex-col w-80 opacity-0">
              <p>Email</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Email"
              ></input>
            </div>
          </div>
          <hr className="mt-4 text-md border-1 -mx-4 bg-black text-black border-black"></hr>
          <div className="flex space-x-1 mt-4">
            <p>Organisation Details</p>
            <AiOutlineCheckCircle className="mt-1" />
          </div>
          {/* First Line of input */}
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Defendant</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Defendant's Name"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Gender</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Select Gender"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Age</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Age"
              ></input>
            </div>
          </div>
          {/* second line of input */}
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Extra Petitioner Count</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Extra Petitioner Count"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Mobile Number</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Mobile Number"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Email</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Email"
              ></input>
            </div>
          </div>
          <hr className="mt-4 text-md border-1 -mx-4 bg-black text-black border-black"></hr>
          {/* First Line of input */}
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Valuation</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Valuation"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Amount</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                // placeholder="Enter Amount"
              ></input>
            </div>
            <div className="flex flex-col w-80 mt-4">
              <div className="flex space-x-1">
                <input type="radio"></input>
                <p>Hide Parties</p>
              </div>
              <div className="flex space-x-1">
                <input type="radio"></input>
                <p>Plaint in local language</p>
              </div>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <button className=" border-gray-600 px-4 py-1 rounded-lg bg-green-600 text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseFiling;
