import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { caseData } from "../assets/data/data";
import adv from "../assets/Images/CaseDetails/adv.png";
import pet from "../assets/Images/CaseDetails/pet.png";
import { useDispatch, useSelector } from "react-redux";
import user from "../assets/Images/user.png";
import judge3 from "../assets/Images/judge3.png";
import editIcon1 from "../assets/Images/editIcon.png";
import axios from "./api/axios";
import { format } from "date-fns";
// import DatePicker from "react-datepicker";
// const [newDate, setNewDate] = useState(null);


const DailyCalendar = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [editedCaseDescription, setEditedCaseDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchInput, setSearchInput] = useState("");
  const btnRef = useRef();
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

  const handleUpdateDesc = async (e) => {
    e.preventDefault();
    try {
      // Make a PUT request to update the case description
      const updatedCase = {
        ...selectedCase,
        caseDescription: editedCaseDescription,
      };
      // Add your server endpoint URL
      const apiUrl = "https://your-api-endpoint.com/update-case-description";
      await axios.put(apiUrl, updatedCase);
      // Close the sidebar after successful update
      endEditMode();
      onClose();
    } catch (error) {
      console.error("Error updating case description:", error);
      // Handle error, show a message, etc.
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("response --> ", response?.data);
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };


  const token = userInfo.accessToken;
  const openSidebar = (caseItem) => {
    setSelectedCase(caseItem);
  };

  // Function to start the edit mode
  const startEditMode = () => {
    setIsEditMode(true);
  };

  // Function to end the edit mode
  const endEditMode = () => {
    setIsEditMode(false);
  };

  // Function to handle save operation
  const handleSave = async () => {
    try {
      // Make a PUT request to update the case description
      const updatedCase = {
        ...selectedCase,
        caseDescription: editedCaseDescription,
      };
      // Add your server endpoint URL
      const apiUrl = "https://your-api-endpoint.com/update-case-description";
      await axios.put(apiUrl, updatedCase);
      // Close the sidebar after successful update
      endEditMode();
      onClose();
    } catch (error) {
      console.error("Error updating case description:", error);
      // Handle error, show a message, etc.
    }
  };

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.post(
          "/schedule",
          JSON.stringify({ courtId: userInfo?.user?.court }),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setFetchedData(response.data.cases);
        // setCaseData(fetchedCases);
        console.log("response --> ", response?.data);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchCases();
  }, [userInfo, token]);

  console.log(userInfo);
  // Function to cancel the edit mode
  const cancelEdit = () => {
    setEditedCaseDescription(selectedCase.caseDescription);
    endEditMode();
  };

  const [datee, setDatee] = useState(new Date());

  return (
    <div className={`h-[100vh] flex justify-start items-start bg-white `}>
      {/* --------------------------------------------------SIDEBAR-------------------------------------------------------------- */}
      <div className="flex flex-col min-w-[300px] justify-between bg-[#E1EEDD] h-screen pl-4 pr-2 pt-2">
        <div>
          <img className="h-12 w-32 font-bold" src={logo}></img>
          <div className="space-y-2 mt-4">
            <p className="mt-4 text-gray-400"> MENU </p>
            <div className="font-semibold space-y-2">
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
                <Link to="/"> Home </Link>{" "}
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
              <div className="flex absolute left-8 mt-8 font-semibold text-lg shadow-green-400 shadow-md w-[300px] -ml-8 pl-8">
                <p>--</p>
                <p className="pl-2">
                  <Link to="/dailycalendar"> View Daily Schedule </Link>
                </p>
              </div>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out pt-10">
                {" "}
                <Link to="/admin/caseregistration"> Case Registration </Link>
              </p>
              <p className="hover:text-green-600 hover:border-green-600 duration-300 ease-in-out">
                {" "}
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

      {/* ------------------------------------------Content for the Daily Calendar Page-------------------------------------------------- */}

      <div className="pt-10 pl-10 w-[1200px] flex flex-col justify-between h-full space-y-8">
        <div className="flex justify-between w-full">
          {/* Left Case Info Box */}
          <div className="flex flex-col border-2 rounded-md min-w-[200px] py-4 px-2">
            <p className="text-xs text-gray-500"> Total cases</p>
            <div className="flex justify-between">
              <p className="font-bold text-xl">9 </p>
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
              <IoSearchOutline className="mt-2.5 opacity-20 absolute ml-2" />
              <input
                type="text"
                placeholder="Search"
                className="border-2 rounded-lg h-fit py-1 pl-7 w-96"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <Link to="/editCases">
              <div className="flex px-2 space-x-1.5 duration-300 ease-in-out hover:scale-105 bg-[#49AE52] h-fit rounded-lg justify-center items-center text-center">
                <img src={editIcon1} className="w-[16px] h-[15px]" />
                <button className="rounded-lg px-0 mr-0 h-fit py-1 text-white">
                  Edit
                </button>
              </div>
            </Link>
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
                <Th>Hearing Date</Th>
                <Th>New Date</Th>
              </Tr>
            </Thead>
            {fetchedData && (
              <Tbody>
                {fetchedData.map((caseItem, i) => (
                  <Tr key={i + 1}>
                    <Td>{i + 1}</Td>
                    <Td>{caseItem?.caseId?.caseInfo?.caseType}</Td>
                    <Td isNumeric>{caseItem?.caseId?.caseInfo?.caseNum}</Td>
                    <Td>
                      {format(new Date(caseItem.dateAndTime), "yyyy-MM-dd")}
                    </Td>
                    <Td>
                        <select>
                    <options>{format(new Date(caseItem.dateAndTime), "yyyy-MM-dd")}</options>
                    <options>{format(new Date(caseItem.dateAndTime), "yyyy-MM-dd")}</options>
                    </select>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
            
            {/* <Tbody

            </Tbody> */}
          </Table>
        </TableContainer>

       

        <div className="flex px-2 space-x-1 duration-300 ease-in-out hover:scale-105 bg-[#49AE52] h-fit rounded-lg justify-center items-center text-center">
          <img src={editIcon1} className="w-[16px] h-[15px]" />
          <button
            onClick={sendMail}
            className="rounded-lg px-0 mr-0 h-fit py-1 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyCalendar;

