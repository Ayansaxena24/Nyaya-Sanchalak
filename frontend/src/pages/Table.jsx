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

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.post(
          '/schedule',
          JSON.stringify({courtId : userInfo?.user?.court}),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
  
        const fetchedCases = response?.data; 
        const caseHearingDate = new Date(response?.data)
        // setCaseData(fetchedCases);
        console.log("response --> ", response?.data);
          
      } catch (error) {
        console.error('Error fetching cases:', error);
  
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


  return (
    <div className={`h-[100vh] flex justify-start items-start bg-white `}>
      {/* --------------------------------------------------SIDEBAR-------------------------------------------------------------- */}

      {/* ------------------------------------------Content for the Daily Calendar Page-------------------------------------------------- */}

      <div className="pt-10 pl-10 w-[1200px] flex flex-col justify-between h-full space-y-8">

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
                <Th>Hearing Date</Th>
                <Th>Details</Th>
                <Th>Case Status</Th>
              </Tr>
            </Thead>
            {searchInput === "" && caseData &&
            <Tbody>
              {caseData.map((caseItem, i) => (
                <Tr key={i+1}>
                  <Td>{i+1}</Td>
                  <Td>{caseItem?.caseId?.caseInfo?.caseType}</Td>
                  <Td isNumeric>{caseItem?.caseId?.caseInfo?.caseNum}</Td>
                  <Td isNumeric>{caseItem?.caseId?.caseInfo?.caseYear}</Td>
                  <Td>{caseItem.dateAndTime}</Td>
                  <Td>{caseItem.dateAndTime}</Td>
                  <Td>
                    <button
                      className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800"
                      ref={btnRef}
                      onClick={() => {
                        openSidebar(caseItem);
                        onOpen();
                      }}
                    >
                      View
                    </button>
                  </Td>
                  <Td>
                    <select>
                      <option>{caseItem.caseStatus}</option>
                      <option>Closed</option>
                    </select>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            }
            {searchInput && caseData &&
            <Tbody>
              {searchInput && caseData
                .filter((caseItem) =>
                  searchInput
                    ? String(caseItem.caseNumber).includes(searchInput)
                    : true
                )
                .map((filteredCase, index) => (
                  <Tr key={index + 1}>
                    <Td>{filteredCase.srNo}</Td>
                    <Td>{filteredCase.caseType}</Td>
                    <Td isNumeric>{filteredCase.caseNumber}</Td>
                    <Td isNumeric>{filteredCase.caseYear}</Td>
                    <Td>{filteredCase.hearingSlot}</Td>
                    <Td>{filteredCase.scheduledDate}</Td>
                    <Td>
                      <button
                        className="px-4 py-1 bg-[#65BEA6] text-white rounded-md duration-300 ease-in-out hover:scale-105 hover:text-green-800"
                        ref={btnRef}
                        onClick={() => {
                          openSidebar(filteredCase);
                          onOpen();
                        }}
                      >
                        View
                      </button>
                    </Td>
                    <Td>
                      <select>
                        <option>{filteredCase.caseStatus}</option>
                        <option>Closed</option>
                      </select>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
            }

            {/* <Tbody

            </Tbody> */}
          </Table>
        </TableContainer>

        {/* Sidebar */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            {selectedCase && (
              <div
                className="border-gray-200 border-2 right-0 h-full w-[600px] bg-white fixed py-4 px-8 flex-col justify-center items-center text-left space-y-4 overflow-hidden transition-transform duration-300 ease-in-out transform translate-x-0"
                style={{ transform: "translateX(0)" }}
              >
                <div className="flex justify-between">
                  <p className="text-xl font-bold mb-2">Case Details</p>
                  <button
                    className="text-lg font-bold text-gray-600 mb-4"
                    onClick={onClose}
                  >
                    X
                  </button>
                </div>

                {/* case details */}
                <div className="flex border-2 rounded-lg border-gray-400 p-2 justify-between">
                  <div className="flex-col">
                    <p>
                      <span className="font-semibold">Case Type:</span>{" "}
                    </p>
                    <p>
                      <span className="font-semibold">Filing Number:</span>{" "}
                    </p>
                    <p>
                      <span className="font-semibold">Filing Date:</span>{" "}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Registration Number:
                      </span>{" "}
                    </p>
                    <p>
                      <span className="font-semibold">Registration Date:</span>{" "}
                    </p>
                    <p>
                      <span className="font-semibold">CNR Number:</span>{" "}
                    </p>
                  </div>
                  <div className="flex flex-col mr-8">
                    <p>{selectedCase.caseType}</p>
                    <p>{selectedCase.filingNumber}</p>
                    <p>{selectedCase.filingDate}</p>
                    <p>{selectedCase.registrationNumber}</p>
                    <p>{selectedCase.registrationDate}</p>
                    <p>{selectedCase.cnrNumber}</p>
                  </div>
                  <div className="flex flex-col opacity-0">
                    <p>{selectedCase.caseType}</p>
                    <p>{selectedCase.filingNumber}</p>
                    <p>{selectedCase.filingDate}</p>
                    <p>{selectedCase.registrationNumber}</p>
                    <p>{selectedCase.registrationDate}</p>
                    <p>{selectedCase.cnrNumber}</p>
                  </div>
                </div>

                {/* case description */}
                {/* case description */}
                <div className="flex-col bg-[#E1EEDD] border-2 rounded-lg border-gray-400 p-2">
                  <p>
                    <span className="font-semibold">Case Description</span>{" "}
                  </p>
                  {isEditMode ? (
                    <>
                      <textarea
                        value={editedCaseDescription}
                        onChange={(e) =>
                          setEditedCaseDescription(e.target.value)
                        }
                        className="w-full h-20 border-2 rounded-md mt-2 p-2"
                      />
                      <div className="absolute top-2 right-2">
                        <button
                          onClick={cancelEdit}
                          className="px-2 py-1 bg-gray-300 rounded-md text-gray-600 hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    // If not in edit mode, show case description
                    <div>{selectedCase.caseDescription}</div>
                  )}
                  <div className="flex w-full justify-end">
                    {isEditMode ? (
                      // If in edit mode, show save button
                      <div className="flex px-2 space-x-1 duration-300 ease-in-out hover:scale-105 bg-[#49AE52] h-fit rounded-lg justify-center items-center text-center">
                        <img src={editIcon1} className="w-[16px] h-[15px]" />
                        <button
                          onClick={handleSave}
                          className="rounded-lg px-0 mr-0 h-fit py-1 text-white"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      // If not in edit mode, show edit button
                      <div
                        className="flex px-2 space-x-1.5 duration-300 ease-in-out hover:scale-105 bg-[#49AE52] h-fit rounded-lg justify-center items-center text-center"
                        onClick={startEditMode}
                      >
                        <img src={editIcon1} className="w-[16px] h-[15px]" />
                        <button className="rounded-lg px-0 mr-0 h-fit py-1 text-white">
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* petiioner and advocate */}
                <div className="flex-col space-y-2 rounded-2 border-2 border-gray-400 p-2 rounded-lg">
                  <div className="flex-col space-y-1">
                    <p>Petitioner and Advocate</p>
                    <div className="flex justify-between w-3/4">
                      <div className="flex space-x-2">
                        <img src={pet} className="rounded-lg" />
                        <p className="flex justify-center items-center">
                          {selectedCase.petitioner}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <img src={adv} />
                        <p className="flex justify-center items-center">
                          {selectedCase.petitionerAdvocate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col space-y-1">
                    <p>Respondent and Advocate</p>
                    <div className="flex justify-between w-3/4">
                      <div className="flex space-x-2">
                        <img src={pet} className="rounded-lg" />
                        <p className="flex justify-center items-center">
                          {selectedCase.respondent}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <img src={adv} />
                        <p className="flex justify-center items-center">
                          {selectedCase.respondentAdvocate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default DailyCalendar;

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
