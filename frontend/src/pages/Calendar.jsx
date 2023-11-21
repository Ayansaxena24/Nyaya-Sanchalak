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

const Calendar = () => {
  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      {/* --------------------------------------------------SIDEBAR-------------------------------------------------------------- */}
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
              <div className="flex absolute left-8 mt-8 bg-green-300 w-[300px] -ml-8 pl-8">
                <p>--</p>
                <p className="pl-2"> View Monthly Schedule </p>
              </div>
              <div className="flex pt-8 pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2"> <Link to="/dailycalendar"> View Daily Schedule </Link></p>
              </div>
              <p className="pt-0 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <Link to="/caseregistration"> Case Registration </Link>
              </p>
              <p className=" hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <Link to="/casefiling"> Case Filing </Link>
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

      {/* ----------------------------------------------------------Calendar--------------------------------------------- */}
      <div className="m-2 md:mx-10 md:-mt-2 mt-24 p-2 md:px-4 md:py-6 rounded-3xl space-y-2">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-4xl text-black mb-2">Calendar</h1>
        </div>
        <ScheduleComponent>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
