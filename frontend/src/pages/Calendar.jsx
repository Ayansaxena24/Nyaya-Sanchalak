import React from "react";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../assets/data/data.js";
import { Link } from "react-router-dom";
import logo from "../assets/Images/ministryLogo.jpg";
import { BsFillTriangleFill } from "react-icons/bs";
import user from "../assets/Images/user.png";
import judge3 from "../assets/Images/judge3.png";
import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  // console.log("USER ROLE", userInfo.roles);

  //log out user
  const logOutUser = () => {
    dispatch(userLogOutAction());
    window.location.reload(true);
    setTimeout(() => {
      Navigate("/");
    }, 500);
  };

  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      {/* --------------------------------------------------SIDEBAR-------------------------------------------------------------- */}
      <div className="flex flex-col min-w-[300px] justify-between bg-[#E1EEDD] h-screen pl-4 pr-2 pt-2 fixed">
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
              <div className="flex absolute left-8 mt-8 font-semibold text-lg shadow-green-400 shadow-md w-[300px] -ml-8 pl-8">
                <p>--</p>
                <p className="pl-2"> View Monthly Schedule </p>
              </div>
              <div className="flex pt-8 pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2">
                  {" "}
                  <Link to="/dailycalendar"> View Daily Schedule </Link>
                </p>
              </div>
              <p className="pt-0 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <Link to="/admin/caseregistration"> Case Registration </Link>
              </p>
              <p className=" hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <Link to="/admin/casefiling"> Case Filing </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-10 w-full justify-center space-y-4">
          <div className="flex flex-col justify-center items-center text-center w-full mt-4">
            {userInfo?.roles[0] === 8888 ? (
              <img className="h-36 w-36 rounded-full" src={judge3}></img>
            ) : userInfo?.roles[0] === 9999 ? (
              <img
                className="h-36 w-36 rounded-full"
                src="https://png.pngtree.com/png-clipart/20220726/original/pngtree-internet-search-information-read-hand-book-with-mause-png-image_8409603.png"
              ></img>
            ) : (
              <img className="h-36 w-36 rounded-full" src={user}></img>
            )}
            <p>
              Welcome,{" "}
              {userInfo?.roles[0] === 8888 ? (
                <span className="font-bold">Judge</span>
              ) : userInfo?.roles[0] === 9999 ? (
                <span className="font-bold">Admin</span>
              ) : (
                <span className="font-bold">User</span>
              )}
            </p>
          </div>
          {userInfo?.roles[0] === 8888 || userInfo?.roles[0] === 9999 ? (
            <button
              className="flex rounded-lg justify-center border-2 border-gray-400 px-20 mr-2 font-bold py-2 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out"
              onClick={logOutUser}
            >
              Log Out
            </button>
          ) : (
            <button className="flex rounded-lg justify-center border-2 border-gray-400 px-20 mr-2 font-bold py-2 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
              <Link to="/login"> Log In </Link>
            </button>
          )}
        </div>
      </div>

      {/* ----------------------------------------------------------Calendar--------------------------------------------- */}
      <div className="absolute left-80 mr-4">
        <div className=" md:-mt-2 mt-24 p-2 md:px-0 md:py-6 rounded-3xl space-y-2">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-4xl text-black mb-2">Calendar</h1>
          </div>
          <ScheduleComponent
            eventSettings={{ dataSource: scheduleData }}
            selectedDate={new Date(2021, 0, 10)}
          >
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
              ]}
            />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
