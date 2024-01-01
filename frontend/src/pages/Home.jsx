import React, { useRef } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/Images/ministryLogo.jpg";
import { BsFillTriangleFill } from "react-icons/bs";
import lawyer from "../assets/Images/lawyer.png";
import judge from "../assets/Images/judge.jpg";
import user from "../assets/Images/user.png";
import judge3 from "../assets/Images/judge3.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogOutAction } from "../redux/actions/userAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  // console.log("USER ROLE", userInfo.roles);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  //log out user
  const logOutUser = () => {
    dispatch(userLogOutAction());
    window.location.reload(true);
    setTimeout(() => {
      Navigate("/");
    }, 500);
  };

  console.log("USER INFO ACCESSTOKEN --->>", userInfo?.accessToken);

  return (
    <div className="sm:h-[100vh] sm:flex sm:justify-start sm:items-start sm:bg-white w-full">
      {/* ---------mobile version */}
      <div className="flex sm:hidden justify-between">
        <div className="border-2 flex justify-center">
          <a
            lang="hi"
            href="https://ecommitteesci.gov.in/hi"
            // onClick={confirm("Hello")}
            // onclick="return confirm('You are being redirected to an external website. Please note that District &amp;amp; Sessions Court, Indore cannot be held responsible for external websites content &amp; privacy policies.');"
            aria-label="ई-कमिटी, उच्चतम न्यायालय, भारत - External site that opens in a new window"
            title="ई-कमिटी, उच्चतम न्यायालय, भारत - External site that opens in a new window"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-10 py-4 text-xs flex text-center justify-center items-center"
          >
            ई-कमिटी, उच्चतम न्यायालय, भारत{" "}
          </a>
        </div>
        <div className="border-2">
          <a
            lang="en"
            href="https://ecommitteesci.gov.in/"
            // onclick="confirm('You are being redirected to an external website. Please note that District &amp; Sessions Court, Indore cannot be held responsible for external websites content &amp; privacy policies.');"
            aria-label="E-COMMITTEE, SUPREME COURT OF INDIA - External site that opens in a new window"
            title="E-COMMITTEE, SUPREME COURT OF INDIA - External site that opens in a new window"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 py-4 text-xs flex text-center justify-center items-center"
          >
            E-COMMITTEE, SUPREME COURT OF INDIA{" "}
          </a>
        </div>
      </div>
      {/* /*--------------------------------------------------------------- Mobile Sidebar ----------------------------------------------------*/}
      <div className="sm:hidden p-2 sm:p-0">
        <div className="flex justify-between ml-4 my-2">
          <img src={logo} className="h-20 w-64 font-bold"></img>
          <button ref={btnRef} onClick={onOpen}>
            <IoMdMenu className="text-3xl" />
          </button>
        </div>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <div className="flex flex-col space-y-2">
                <p className="absolute text-green-600 border-green-400 border-2 left-0 w-full pl-5 duration-300 ease-in-out ">
                  {" "}
                  Home
                </p>
                <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out pt-6">
                  {" "}
                  <Link to="/calendar">View Monthly Schedule </Link>
                </p>
                <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                  {" "}
                  <Link to="/dailycalendar"> View Daily Schedule </Link>
                </p>
                <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                  {" "}
                  <Link to="/admin/caseregistration"> Case Registration </Link>
                </p>
                <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                  {" "}
                  <Link to="/admin/casefiling"> Case Filing </Link>
                </p>
              </div>
            </DrawerBody>

            <DrawerFooter>
              <button
                className="flex rounded-lg justify-center border-2 border-gray-400 px-20 mr-2 font-bold py-2 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out"
                onClick={logOutUser}
              >
                Log Out
              </button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/*--------------------------------------------------------------- SideBar ----------------------------------------------------*/}
      <div className="sm:flex flex-col min-w-[300px] justify-between bg-[#E1EEDD] h-screen pl-4 pr-2 pt-2 hidden ">
        <div>
          <img className="h-12 w-32 font-bold" src={logo}></img>
          <div className="space-y-2 mt-4">
            <p className="mt-4 text-gray-400"> MENU </p>
            <div className="font-semibold space-y-2">
              <p className="absolute pl-4 left-0 duration-300 ease-in-out w-[300px] font-semibold text-lg shadow-green-400 shadow-md">
                {" "}
                Home{" "}
              </p>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out pt-8">
                {" "}
                Hearing Schedule{" "}
              </p>
              <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2">
                  <Link to="/calendar">View Monthly Schedule </Link>
                </p>
              </div>
              <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2">
                  {" "}
                  <Link to="/dailycalendar"> View Daily Schedule </Link>
                </p>
              </div>
              {userInfo && (
                <>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                <Link to="/admin/caseregistration"> Case Registration </Link>
              </p>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                <Link to="/admin/casefiling"> Case Filing </Link>
              </p>
              </> 
              )
}

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
                <span className="font-bold">Judge {userInfo?.user.name}</span>
              ) : userInfo?.roles[0] === 9999 ? (
                <span className="font-bold">Admin, {userInfo?.user.name}</span>
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
      <div className="sm:px-8 px-3 sm:py-8 py-4 overflow-hidden">
        {/* <img
          className="rounded-sm"
          src="https://cdnbbsr.s3waas.gov.in/s3ec02b299ad862b6f12cb57679f0538ec/uploads/2023/03/2023032388.jpg"
        ></img> */}
        <div className="flex sm:pr-0 pr-8 overflow-hidden sm:w-[1170px] w-96 scale-y-150 sm:scale-y-100 pt-2">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]} // Add this line
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }} // Add this line if you want navigation buttons
            // pagination={{ clickable: true }} // Add this line for pagination
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            className="flex justify-center items-center text-center"
          >
            <SwiperSlide>
              <img
                className="rounded-sm"
                src="https://cdnbbsr.s3waas.gov.in/s3ec02b299ad862b6f12cb57679f0538ec/uploads/2023/03/2023032388.jpg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-sm"
                src="https://cdnbbsr.s3waas.gov.in/s3ec02b299ad862b6f12cb57679f0538ec/uploads/2023/03/2023033161.jpg"
              ></img>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="sm:flex mt-10">
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
          <div className="flex flex-col sm:ml-8 mt-4 sm:mt-0">
            <p className="sm:font-semibold sm:text-2xl text-xl">
              About District Court, Indore
            </p>
            <p className="sm:hidden text-justify mt-4 sm:text-md text-s text-sm sm:font-semibold">
              About District Court, Indore The historical building of Indore
              District Court was formed in 1905 by the Regency Council during
              the reign of Maharaja Tukaroji Holkar III, The famous architecture
              M / s Steven son & Company did in the celebration of the proposed
              Indore visit of England’s future emperor George V.
            </p>
            <p className="sm:hidden text-justify mt-4 sm:text-md text-s text-sm sm:font-semibold">
              Indore, also pronounced and spelled by its Maharashtrian
              inhabitants as “INDUR” is a major trunk road and rail junction and
              now excellently connected air terminus and is located on the
              Saraswati and Khan streams, which are tributaries of the Kshipra
              River. Saraswati and Khan are now municipal drains rather those
              rivers. Indore was founded in 1715 as a trade market on the
              Narmada River valley route by local landowners, who erected
              Indreshwar Temple (1741), from which the name “Indore” is derived.
              It became the capital of the former Indore Princely State of the
              Maharashtrian Holkars, and was the headquarters of the British
              Central India Agency and the summer capital of Madhya Bharat from
              1948 to 1956. The largest City of the State, Indore is the
              commercial, industrial, educational and cultural centre of Western
              Madhya Pradesh. It is the only City of India having an Indian
              Institute of Management as well as an Indian Institute of
              Technology.
            </p>
            <p className="hidden sm:flex text-justify mt-4 sm:text-md text-s text-sm sm:font-semibold">
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
