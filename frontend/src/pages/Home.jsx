import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/ministryLogo.jpg";
import { BsFillTriangleFill } from "react-icons/bs";

function Home() {
  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      <div className="flex flex-col min-w-[300px] justify-between bg-[#E1EEDD] h-screen pl-4 pr-2 pt-2">
        <div>
        <img className="h-12 w-32 font-bold" src={logo}></img>
        <div className="space-y-2 mt-4">
          <p className="mt-4 text-gray-400"> MENU </p>
          <div className="font-semibold space-y-2">
            <p className="absolute pl-4 left-0 duration-300 ease-in-out w-[300px] bg-green-300"> Home </p>
            <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out pt-8"> Hearing Schedule </p>
            <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
              <p>--</p>
              <p className="pl-2"><Link to="/calendar" >View Monthly Schedule </Link></p>
            </div>
            <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
              <p>--</p>
              <p className="pl-2"> View Daily Schedule </p>
            </div>
            <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out"> <Link to="/caseregistration"> Case Registration </Link></p>
            <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out"> <Link to="/casefiling"> Case Filing </Link></p>
          </div>
        </div>
        </div>
        <div className="flex pb-10 w-full justify-center">
            <button className="flex rounded-lg justify-center border-2 border-gray-400 px-20 mr-2 font-bold py-2 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out"><Link to="/login"> Log In </Link></button>
        </div>
      </div>
      <div className="px-8 py-8">
        <img
          className="rounded-sm"
          src="https://cdnbbsr.s3waas.gov.in/s3ec02b299ad862b6f12cb57679f0538ec/uploads/2023/03/2023032388.jpg"
        ></img>
        <div className="flex mt-10">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col border-2  rounded-md min-w-[200px] py-2 px-2">
              <p className="text-sm"> Total cases</p>
              <div className="flex justify-between">
                <p className="font-bold text-lg"> 2190 </p>
                <p className="text-xs bg-green-200 text-green-700 font-bold rounded-lg pt-1 px-3 scale-75">
                  20%
                </p>
              </div>
            </div>
            <div className="flex flex-col border-2  rounded-md min-w-[200px] py-2 px-2">
              <p className="text-sm"> Civil cases</p>
              <div className="flex justify-between">
                <p className="font-bold text-lg"> 2190 </p>
                <p className="text-xs bg-green-200 text-green-700 font-bold rounded-lg pt-1 px-3 scale-75">
                  20%
                </p>
              </div>
            </div>
            <div className="flex flex-col border-2  rounded-md min-w-[200px] py-2 px-2">
              <p className="text-sm"> Criminal cases</p>
              <div className="flex justify-between">
                <p className="font-bold text-lg"> 2190 </p>
                <p className="text-xs bg-green-200 text-green-700 font-bold rounded-lg pt-1 px-3 scale-75">
                  20%
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-8">
            <p className="font-semibold text-2xl">About District Court, Indore</p>
            <p className="flex text-justify mt-4 text-md text-sm font-semibold">
              About District Court, Indore The historical building of Indore
              District Court was formed in 1905 by the Regency Council during
              the reign of Maharaja Tukaroji Holkar III, The famous architecture
              M / s Steven son & Company did in the celebration of the proposed
              Indore visit of England’s future emperor George V. Indore, also
              pronounced and spelled by its Maharashtrian inhabitants as “INDUR”
              is a major trunk road and rail junction and now excellently
              connected air terminus and is located on the Saraswati and Khan
              streams, which are tributaries of the Kshipra River. Saraswati and
              Khan are now municipal drains rather those rivers. Indore was
              founded in 1715 as a trade market on the Narmada River valley
              route by local landowners, who erected Indreshwar Temple (1741),
              from which the name “Indore” is derived. It became the capital of
              the former Indore Princely State of the Maharashtrian Holkars, and
              was the headquarters of the British Central India Agency and the
              summer capital of Madhya Bharat from 1948 to 1956. The largest
              City of the State, Indore is the commercial, industrial,
              educational and cultural centre of Western Madhya Pradesh. It is
              the only City of India having an Indian Institute of Management as
              well as an Indian Institute of Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
