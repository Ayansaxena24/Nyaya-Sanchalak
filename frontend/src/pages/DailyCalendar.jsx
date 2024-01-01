import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/ministryLogo.jpg";
import { IoArrowUpSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const DailyCalendar = () => {
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
                {" "}
                Home{" "}
              </p>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                Hearing Schedule{" "}
              </p>
              <div className="flex pl-4 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                <p>--</p>
                <p className="pl-2">
                  <Link to="/calendar">View Monthly Schedule </Link>
                </p>
              </div>
              <div className="flex absolute left-8 mt-8 bg-green-300 w-[300px] -ml-8 pl-8">
                <p>--</p>
                <p className="pl-2">
                  <Link to="/dailycalendar"> View Daily Schedule </Link>
                </p>
              </div>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                <Link to="/caseregistration"> Case Registration </Link>
              </p>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                <Link to="/casefiling"> Case Filing </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex pb-10 w-full justify-center">
          <button className="flex rounded-lg justify-center border-2 border-gray-400 px-20 mr-2 font-bold py-2 hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
            <Link to="/login"> Log In </Link>
          </button>
        </div>
      </div>

      {/* ------------------------------------------Content for the Daily Calendar Page-------------------------------------------------- */}

      <div className="pt-10 pl-10 w-[1200px] flex flex-col justify-between h-full space-y-8">
        <div className="flex justify-between w-full">
          {/* Left Case Info Box */}
          <div className="flex flex-col border-2 rounded-md min-w-[200px] py-4 px-2">
            <p className="text-xs text-gray-500"> Total cases</p>
            <div className="flex justify-between">
              <p className="font-bold text-xl"> 24 </p>
              <p className="text-xs flex bg-green-200 text-green-500 font-bold rounded-2xl pt-1 px-3 scale-75">
                <IoArrowUpSharp className="mt-0.5 mr-1" /> 20%
              </p>
            </div>
          </div>

          <div className="flex space-x-4 ml-20">
            {/* <label for="Category"></label> */}
            <select
              id="Category"
              placeholder="Category: Case Number"
              name="Category"
              className="border-2 rounded-lg pr-12 pl-2 h-fit py-1 text-gray-500"
            >
              <option value="australia">Category : Case Number</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <div className="flex">
            <IoSearchOutline className="mt-2.5 opacity-20 absolute ml-2"/>
            <input
              type="text"
              placeholder="Search"
              className="border-2 rounded-lg h-fit py-1 pl-7 w-96"
            />
          </div>
          </div>

          <div>
            <input
              type="date"
              className="border-2 rounded-lg px-4 h-fit py-2 opacity-0"
            />
          </div>
        </div>

        {/* ------------------------------------------Table for the Daily Calendar Page-------------------------------------------------- */}
        <TableContainer className="pb-10">
          <Table variant="simple" size="sm">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Sr no.</Th>
                <Th>Case Type</Th>
                <Th>Case Number</Th>
                <Th>Case Year</Th>
                <Th>Hearing Slot</Th>
                <Th>Details</Th>
                <Th>Case Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Civil Miscellaneus</Td>
                <Td isNumeric>700026</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                  <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>2</Td>
                <Td>Original Suit</Td>
                <Td isNumeric>800112</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>


              <Tr>
                <Td>3</Td>
                <Td>Execution</Td>
                <Td isNumeric>700001</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>4</Td>
                <Td>Civil Suit</Td>
                <Td isNumeric>350</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>
              
              <Tr>
                <Td>5</Td>
                <Td>Original Suit</Td>
                <Td isNumeric>800112</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>6</Td>
                <Td>Execution</Td>
                <Td isNumeric>700001</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>8</Td>
                <Td>Original Suit</Td>
                <Td isNumeric>800112</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>9</Td>
                <Td>Civil Miscellaneus</Td>
                <Td isNumeric>700026</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>10</Td>
                <Td>Original Suit</Td>
                <Td isNumeric>800112</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>11</Td>
                <Td>Civil Miscellaneus</Td>
                <Td isNumeric>700026</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

              <Tr>
                <Td>12</Td>
                <Td>Civil Suit</Td>
                <Td isNumeric>350</Td>
                <Td isNumeric>2012</Td>
                <Td>10:00 - 11:00</Td>
                <Td>
                <button className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800">
                    View
                  </button>
                </Td>
                <Td>
                  <select>
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                </Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DailyCalendar;
