import React from "react";
import logo from "../assets/Images/ministryLogo.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const CaseRegistration = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      <div className="flex flex-col min-w-[300px] justify-between h-screen bg-[#E1EEDD] pl-4 pr-2 pt-2">
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
                <p className="pl-2"> <Link to="/calendar" >View Monthly Schedule </Link></p>
              </div>
              <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2"> <Link to="/dailycalendar"> View Daily Schedule </Link></p>
              </div>
              <p className="absolute pl-4 left-0 duration-300 ease-in-out w-[300px] bg-green-300">
                Case Registration
              </p>
              <p className=" hover:text-green-600 hover:border-green-600 duration-300 ease-in-out pt-8">
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
      <div className="w-[1235px] pt-8">
        <div className="flex flex-col space-y-4">
          <div className="w-full justify-center items-center text-center">
            <p className="font-semibold text-2xl"> CASE DETAILS </p>
          </div>
          <div className="flex space-x-12 justify-between px-10 items-center text-center w-full">
            <div className="flex space-x-6">
              <div className="flex space-x-2">
                <input type="radio" name="caseType"></input>
                <p> Civil </p>
              </div>
              <div className="flex space-x-2">
                <input type="radio" name="caseType"></input>
                <p> Criminal </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <p>Filing Number</p>
              <input className="border-2 border-gray-400 rounded-md"></input>
            </div>
          </div>
          <div className="flex justify-center items-center space-y-1"></div>
        </div>
        <Tabs className="h-full mx-14" variant="enclosed">
          <TabList>
            <Tab>Petitioner</Tab>
            <Tab>Respondent</Tab>
            <Tab>Extra Information</Tab>
            <Tab>Act Section</Tab>
            <Tab>Police Station</Tab>
            <Tab>Extra Party</Tab>
            <Tab>Case Details</Tab>
            <Tab>Registration</Tab>
          </TabList>
          <TabPanels>
            {/* PETITIONER */}
            <TabPanel>
              <form className="h-full">
                <div className="flex space-x-1 mt-2">
                  <p>Organisation Details</p>
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="mt-1">Organisation Name</p>
                  <select className="border-2 w-64 rounded-lg py-1 border-gray-400"></select>
                </div>
                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Complainant</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Extra Petitioner Count</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Age</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>
                {/* second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Address</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Name of Advocate"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Pincode</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Bar Registration Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Town</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Ward</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Taluka</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Police Station Code</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>UID Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Taluka</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Respondent */}
            <TabPanel>
              <form className="h-full">
                <div className="flex space-x-1 mt-2">
                  <p>Organisation Details</p>
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="mt-1">Organisation Name</p>
                  <select className="border-2 w-64 rounded-lg py-1 border-gray-400"></select>
                </div>
                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Accused</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Relation</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Name</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>
                {/* second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Gender</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Name of Advocate"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Age</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Bar Registration Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Date of Birth</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Caste</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Extra Respondent Count</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex w-80 justify-start items-center">
                    <p className="mt-4">proforma respondent</p>
                    <input
                      type="radio"
                      className="p-1 justify-center items-center mt-5 ml-2"
                    ></input>
                  </div>
                </div>
                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Name of Advocate</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Bar Registration Number</p>
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
                {/* Fifth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Address</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Pincode</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Sixth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Town</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Ward</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Taluka</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Extra Information */}
            <TabPanel>
              <form className="h-full">
                <div className="flex space-x-1 mt-2">
                  <p>Petitioner Extra Information</p>
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Passport Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Pan Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Fax Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>
                {/* second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Country</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Name of Advocate"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Nationality</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Bar Registration Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Phone Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Occupation</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Alternate Address</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex w-80 justify-start items-center opacity-0">
                    <p className="mt-4">proforma respondent</p>
                    <input
                      type="radio"
                      className="p-1 justify-center items-center mt-5 ml-2"
                    ></input>
                  </div>
                </div>
                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Town</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Ward</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Fifth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Taluka</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Vilage</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>

                <div className="flex space-x-1 mt-2">
                  <p>Petitioner Extra Information</p>
                  <AiOutlineCheckCircle className="mt-1" />
                </div>

                {/* Respondent Extra Information */}
                {/* First line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Passport Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Pan Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Fax Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>

                {/* Second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Country</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Nationality</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Phone Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>

                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Occupation</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Alternate Address</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex w-80 justify-start items-center opacity-0">
                    <p className="mt-4">proforma respondent</p>
                    <input
                      type="radio"
                      className="p-1 justify-center items-center mt-5 ml-2"
                    ></input>
                  </div>
                </div>
                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Town</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Ward</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Fifth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Taluka</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Vilage</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>

                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Act Section */}
            <TabPanel>
              <form className="h-full">
                <div className="flex space-x-1 mt-2">
                  <p className="font-semibold">Act Details</p>
                </div>

                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Act</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Section</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Fax Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>

                {/* Second Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Section</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Section</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Fax Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>

                <div className="flex mt-4">
                  <AiOutlinePlusCircle className="scale-125 mt-1" />
                  <p className="ml-2"> Add Act </p>
                </div>

                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Police Station   */}
            <TabPanel>
              <form className="h-full">
                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80 mt-1.5">
                    <p>Police Challan or Private Complaint</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Police Station Code</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Name</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>
                {/* second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Date of Offence</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Name of Advocate"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Date of filing Chargesheet</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Bar Registration Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Date of Birth</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>FIR Type</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>FIR Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Year</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                </div>
                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Investigating Officer</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Belt Number</p>
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
                {/* Fifth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Investigating Officer 1</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Belt Number 1</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Sixth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Trials</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-[99vh]">
                    <p>Offence Remark</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Extra Party */}
            <TabPanel>
              <form className="h-full">
                <div className="flex space-x-3">
                  <p className="pb-1">Type:</p>
                  <div className="flex space-x-1">
                    <input type="radio" name="extra"></input>
                    <p>Complainant</p>
                  </div>
                  <div className="flex space-x-1">
                    <input type="radio" name="extra"></input>
                    <p>Accused</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  <p>Organisation Details</p>
                  <AiOutlineCheckCircle className="mt-1" />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="mt-1">Organisation Name</p>
                  <select className="border-2 w-64 rounded-lg py-1 border-gray-400"></select>
                </div>
                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Complainant/Accused</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Gender</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 ">
                    <p>Relation</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>
                {/* second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Name</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Name of Advocate"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Caste</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Bar Registration Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Age</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Name of Advocate</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Bar Registration Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Email</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                </div>
                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Mobile Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Occupation</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>UID Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Fifth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Address</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Pincode</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex w-80">
                    <p className="mt-6">Proforma Respondent</p>
                    <input
                      type="radio"
                      className="border-2 mt-4 ml-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Sixth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>District</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Town</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Ward</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Seventh line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Taluka</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Village</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Police Station Code</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Police Station   */}
            <TabPanel>
              <form className="h-full">
                <div>
                  <p className="font-semibold">Case Details</p>
                </div>
                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-full mt-1.5">
                    <p>Important Information or Subject or Reason</p>
                    <textarea
                      name="Text1"
                      cols="5"
                      rows="5"
                      v
                      className="rounded-md border-2 border-gray-400"
                    ></textarea>
                  </div>
                </div>
                {/* second line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Valuation</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Name of Advocate"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Amount</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Bar Registration Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 pt-4">
                    <div className="flex space-x-2">
                      <input
                        type="radio"
                        name="case"
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        // placeholder="Enter Email"
                      ></input>
                      <p>Hide Parties</p>
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="radio"
                        name="case"
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        // placeholder="Enter Email"
                      ></input>
                      <p>Plaint in Local Language</p>
                    </div>
                  </div>
                </div>
                {/* Third line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80"></div>
                  <div className="flex flex-col w-80">
                    <p>Date of Filing</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Time of Filing</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Main Matter Details</p>
                </div>

                {/* Fourth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>Case Type</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Case Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Mobile Number"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Year</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Email"
                    ></input>
                  </div>
                </div>
                {/* Fifth line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80">
                    <p>CNR Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Extra Petitioner Count"
                    ></input>
                  </div>
                </div>

                <div className="flex justify-center items-center w-full mt-6 ">
                  <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                    Save
                  </button>
                </div>
              </form>
            </TabPanel>

            {/* Act Section */}
            <TabPanel>
              <form className="h-full">
                <div className="flex space-x-1 mt-2">
                  <p className="font-semibold">Registration</p>
                </div>

                {/* First Line of input */}
                <div className="flex mt-2 justify-between space-y-2">
                  <div className="flex flex-col w-80 mt-2">
                    <p>Case Type</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80">
                    <p>Nature</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Plaintiff"
                    ></input>
                  </div>
                  <div className="flex flex-col w-80 opacity-0">
                    <p>Fax Number</p>
                    <input
                      className="border-2 border-gray-400 rounded-lg px-2 py-1"
                      // placeholder="Enter Age"
                    ></input>
                  </div>
                </div>

                <div className="flex justify-center items-center w-full mt-6 ">
                

                  <Button  colorScheme='green' px={8}
                    onClick={onOpen}
                    className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105"
                  >
                    Save
                  </Button>

                  <Modal
                    // closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Are you sure you want to Register?</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={0}>{/* <Lorem count={2} /> */}</ModalBody>
                      <div className="flex justify-center items-center">
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                      </div>
                    </ModalContent>
                  </Modal>
                </div>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default CaseRegistration;
