import React, { useState } from "react";
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
import axios from "./api/axios";
import { useDispatch, useSelector } from "react-redux";
import user from "../assets/Images/user.png";
import judge3 from "../assets/Images/judge3.png";
import { caseTypes } from "../constant";
import { ipcSection } from "../constant";

const REGISTRATIONURL = "/court/register-case";

const CaseRegistration = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [success, setSuccess] = useState(false);

  const { userInfo } = useSelector((state) => state.signIn);
  const token = userInfo?.accessToken;
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

  const [mainCaseType, setMainCaseType] = useState("");
  const [mainFilingNumber, setMainFilingNumber] = useState("");

  //organisation details
  const [organisationName, setOrganisationName] = useState("");
  const [petitioner, setPetitioner] = useState("");
  const [extraPetitionerCount, setExtraPetitionerCount] = useState("");
  const [age, setAge] = useState("");
  const [petNameOfAdvocate, setPetNameOfAdvocate] = useState("");
  const [petBarRegistrationNumber, setPetBarRegistrationNumber] = useState("");
  const [petEmail, setPetEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [district, setDistrict] = useState("");
  const [town, setTown] = useState("");
  const [ward, setWard] = useState("");
  const [taluka, setTaluka] = useState("");
  const [policeStationCode, setPoliceStationCode] = useState("");
  const [uidNumber, setUidNumber] = useState("");

  //respondent details
  const [resOrganisationName, setResOrganisationName] = useState("");
  const [resAccused, setResAccused] = useState("");
  const [resRelation, setResRelation] = useState("");
  const [resGender, setResGender] = useState("");
  const [resAge, setResAge] = useState("");
  const [resDateOfBirth, setResDateOfBirth] = useState("");
  const [resCaste, setResCaste] = useState("");
  const [resExtraRespondentCount, setResExtraRespondentCount] = useState("");
  const [resNameOfAdvocate, setResNameOfAdvocate] = useState("");
  const [resBarRegistrationNumber, setResBarRegistrationNumber] = useState("");
  const [resEmail, setResEmail] = useState("");
  const [resAddress, setResAddress] = useState("");
  const [resPincode, setResPincode] = useState("");
  const [resDistrict, setResDistrict] = useState("");
  const [resTown, setResTown] = useState("");
  const [resWard, setResWard] = useState("");
  const [resTaluka, setResTaluka] = useState("");
  const [resProformaRespondent, setResProformaRespondent] = useState("");

  //petitioner extra information
  const [petPassportNumber, setPetPassportNumber] = useState("");
  const [petPanNumber, setPetPanNumber] = useState("");
  const [petFaxNumber, setPetFaxNumber] = useState("");
  const [petCountry, setPetCountry] = useState("");
  const [petNationality, setPetNationality] = useState("");
  const [petPhoneNumber, setPetPhoneNumber] = useState("");
  const [petOccupation, setPetOccupation] = useState("");
  const [petAlternateAddress, setPetAlternateAddress] = useState("");
  const [petProformaRespondent, setPetProformaRespondent] = useState("");
  const [petDistrict, setPetDistrict] = useState("");
  const [petTown, setPetTown] = useState("");
  const [petWard, setPetWard] = useState("");
  const [petTaluka, setPetTaluka] = useState("");
  const [petVillage, setPetVilage] = useState("");

  //respondent extra information
  const [resPassportNumber, setResPassportNumber] = useState("");
  const [resPanNumber, setResPanNumber] = useState("");
  const [resFaxNumber, setResFaxNumber] = useState("");
  const [resCountry, setResCountry] = useState("");
  const [resNationality, setResNationality] = useState("");
  const [resPhoneNumber, setResPhoneNumber] = useState("");
  const [resOccupation, setResOccupation] = useState("");
  const [resAlternateAddress, setResAlternateAddress] = useState("");
  const [res2District, setRes2District] = useState("");
  const [res2Town, setRes2Town] = useState("");
  const [res2Ward, set2ResWard] = useState("");
  const [res2Taluka, setRes2Taluka] = useState("");
  const [resVillage, setResVilage] = useState("");

  //act details
  // const [actSets, setActSets] = useState([{ act: "", section: "" }]);
  const [act, setAct] = useState("");
  const [section, setSection] = useState("");

  //police station details
  const [policeChallanOrPrivateComplaint, setPoliceChallanOrPrivateComplaint] =
    useState("");
  const [policeStationCode2, setPoliceStationCode2] = useState("");
  const [dateOfOffence, setDateOfOffence] = useState("");
  const [dateOfFilingChargesheet, setDateOfFilingChargesheet] = useState("");
  const [FIRType, setFIRType] = useState("");
  const [FIRNumber, setFIRNumber] = useState("");
  const [year, setYear] = useState("");
  const [investigatingOfficersName, setInvestigatingOfficersName] =
    useState("");
  const [beltNum, setBeltNum] = useState("");
  const [investigatingOfficersName1, setInvestigatingOfficersName1] =
    useState("");
  const [beltNum1, setBeltNum1] = useState("");
  const [trials, setTrials] = useState("");
  const [offenceRemark, setOffenceRemark] = useState("");

  //extra party
  const [extraPartyType, setExtraPartyType] = useState("");
  const [extraPartyOrganisationName, setExtraPartyOrganizationName] =
    useState("");
  const [extraPartyName, setExtraPartyName] = useState("");
  const [extraPartyGender, setExtraPartyGender] = useState("");
  const [extraPartyAge, setExtraPartyAge] = useState("");
  const [extraPartyAdvocateName, setExtraPartyAdvocateName] = useState("");
  const [extraPartyBarRegistrationNumber, setExtraPartyBarRegistrationNumber] =
    useState("");
  const [extraPartyEmail, setExtraPartyEmail] = useState("");
  const [extraPartyDateOfBirth, setExtraPartyDateOfBirth] = useState("");
  const [extraPartyCaste, setExtraPartyCaste] = useState("");
  const [extraPartyRelation, setExtraPartyRelation] = useState("");
  const [extraPartyAddress, setExtraPartyAddress] = useState("");
  const [extraPartyPincode, setExtraPartyPincode] = useState("");
  const [extraPartyDistrict, setExtraPartyDistrict] = useState("");
  const [extraPartyTown, setExtraPartyTown] = useState("");
  const [extraPartyWard, setExtraPartyWard] = useState("");
  const [extraPartyTaluka, setExtraPartyTaluka] = useState("");
  const [extraPartyVillage, setExtraPartyVillage] = useState("");
  const [extraPartyUidNumber, setExtraPartyUidNumber] = useState("");
  const [extraPartyComplainantOrAccused, setExtraPartyComplainantOrAccused] =
    useState("");
  const [extraPartyProformaRespondent, setExtraPartyProformaRespondent] =
    useState("");
  const [extraPartyOccupation, setExtraPartyOccupation] = useState("");
  const [extraPartyPoliceStationCode, setExtraPartyPoliceStationCode] =
    useState("");
  const [extraPartyPhoneNumber, setExtraPartyPhoneNumber] = useState("");

  //case details
  const [caseNumber, setCaseNumber] = useState("");
  const [caseType, setCaseType] = useState("");
  const [information, setInformation] = useState("");
  const [valuation, setValuation] = useState("");
  const [amount, setAmount] = useState("");
  const [hideParties, setHideParties] = useState("");
  const [plainInLocalLang, setPlaintInLocalLang] = useState("");
  const [detailsDateofFiling, setDetailsDateofFiling] = useState("");
  const [detailsTimeOfFiling, setDetailsTimeOfFiling] = useState("");
  const [detailsCaseYear, setDetailsCaseYear] = useState("");
  const [detailsCNRNumber, setDetailsCNRNumber] = useState("");

  //registration
  const [regCaseType, setRegCaseType] = useState("");
  const [regNature, setRegNature] = useState("");

  // Function to handle adding a new Act set
  const handleAddAct = () => {
    const newActSet = { act: "", section: "" };
    setActSets([...actSets, newActSet]);
  };

  // handlesubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let regData = {
        //petitioner
        petitioner: {
          orgName: organisationName,
          complainant: petitioner,
          extraPetitionerCnt: extraPetitionerCount,
          advocate: {
            name: petNameOfAdvocate,
            barRegNum: petBarRegistrationNumber,
            email: petEmail,
          },
          location: {
            address: address,
            pincode: pincode,
            district: district,
            town: town,
            ward: ward,
            taluka: taluka,
          },
          policeStationCode: policeStationCode,
          uidNum: uidNumber,
        },

        //respondent
        respondent: {
          orgName: resOrganisationName,
          accused: resAccused,
          relation: resRelation,
          name: resAccused,
          gender: resGender,
          age: resAge,
          dob: resDateOfBirth,
          caste: resCaste,
          extraPetitionerCnt: resExtraRespondentCount,
          proformaRespondent: resProformaRespondent,
          advocate: {
            name: resNameOfAdvocate,
            barRegNum: resBarRegistrationNumber,
            email: resEmail,
          },
          location: {
            address: resAddress,
            pincode: resPincode,
            district: resDistrict,
            town: resTown,
            ward: resWard,
            taluka: resTaluka,
          },
        },

        // //extraInfo
        // "extraInfo": {
        //   "petitioner": {
        //     "passportNum": petPassportNumber,
        //     "panNum": petPanNumber,
        //     "faxNum": petFaxNumber,
        //     "country": petCountry,
        //     "nationality": petNationality,
        //     "phone": petPhoneNumber,
        //     "occupation": petOccupation,
        //     "alternateLocation": {
        //       "address": petAlternateAddress,
        //       "district": petDistrict,
        //       "town": petTown,
        //       "ward": petWard,
        //       "taluka": petTaluka,
        //       "village": petVillage
        //     }
        //   },
        //   "respondent": {
        //     "passportNum": resPassportNumber,
        //     "panNum": resPanNumber,
        //     "faxNum": resFaxNumber,
        //     "country": resCountry,
        //     "nationality": resNationality,
        //     "phone": resPhoneNumber,
        //     "occupation": resOccupation,
        //     "alternateLocation": {
        //       "address": resAlternateAddress,
        //       "district": res2District,
        //       "town": res2Town,
        //       "ward": res2Ward,
        //       "taluka": res2Taluka,
        //       "village": resVillage
        //     }
        //   }
        // },

        // //actSection
        // "actSection": [
        //   {
        //     "act": act,
        //     "section": section
        //   },
        //   {
        //     "act": "",
        //     "section": ""
        //   }
        // ],

        // //policeStation
        // "policeStation": {
        //   "policaChallanOrPrivateComplaint": policeChallanOrPrivateComplaint,
        //   "policeStationCode": policeStationCode2,
        //   "dateOfOffence": dateOfOffence,
        //   "dateOfFilingChargesheet": dateOfFilingChargesheet,
        //   "firType": FIRType,
        //   "firNumber": FIRNumber,
        //   "year": year,
        //   "investigatingOfficer": investigatingOfficersName,
        //   "beltNum": beltNum,
        //   "investigatingOfficer1": investigatingOfficersName1,
        //   "beltNum1": beltNum1,
        //   "trials": trials,
        //   "offenceRemark": offenceRemark
        // },

        // //extraParty
        // "extraParty": {
        //   "type": extraPartyType,
        //   "complainantOrAccused": extraPartyComplainantOrAccused,
        //   "gender" : extraPartyGender,
        //   "relation": extraPartyRelation,
        //   "name": extraPartyName,
        //   "caste": extraPartyCaste,
        //   "age": extraPartyAge,
        //   "advocate": {
        //     "name": extraPartyAdvocateName,
        //     "barRegNum": extraPartyBarRegistrationNumber,
        //     "email": extraPartyEmail
        //   },
        //   "mobile": extraPartyPhoneNumber,
        //   "occupation": extraPartyOccupation,
        //   "uidNum": extraPartyUidNumber,
        //   "location": {
        //     "address": extraPartyAddress,
        //     "pincode": extraPartyPincode,
        //     "district": extraPartyDistrict,
        //     "town": extraPartyTown,
        //     "ward": extraPartyWard,
        //     "taluka": extraPartyTaluka,
        //     "village": extraPartyVillage
        //   },
        //   "proformaRespondent": extraPartyProformaRespondent,
        //   "policeStationCode": extraPartyPoliceStationCode
        // },

        // //caseDetails
        // "caseDetails": {
        //   "info": information,
        //   "valuation": valuation,
        //   "amount": amount,
        //   "filingDateAndTime": detailsDateofFiling,
        //   "mainMatterInfo": {
        //     "caseType": mainCaseType,
        //     "caseNum": caseNumber,
        //     "year": detailsCaseYear,
        //     "cnrNum": detailsCNRNumber
        //   }
        // },

        // //registration
        // "registration": {
        //   "caseType": regCaseType,
        //   "nature": regNature
        // },

        //caseInfo
        caseInfo: {
          caseType: mainCaseType,
          caseNum: caseNumber,
          caseYear: detailsCaseYear,
          filingNum: mainFilingNumber,
          filingDate: detailsDateofFiling,
          regNum: "",
          regDate: "",
          cnrNum: detailsCNRNumber,
          caseDesc: "",
          petitionerAndAdvocate: {
            petitioner: petitioner,
            advocate: petNameOfAdvocate,
          },
          respondentAndAdvocate: {
            respondent: resAccused,
            advocate: resNameOfAdvocate,
          },
        },

        caseStatus: "pending",

        caseHistory: [
          {
            status: "pending",
            date: detailsDateofFiling,
            court: "656c81fbf4b9c0f6d738f6ee",
          },
        ],

        courtId: "656c81fbf4b9c0f6d738f6ee",
      };

      const response = await axios.post(
        REGISTRATIONURL,
        JSON.stringify(regData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("RESPONSE", res?.data?.cases);

      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      //clearing all the input fields after successful registration
      setMainCaseType("");
      setMainFilingNumber("");
      setOrganisationName("");
      setPetitioner("");
      setExtraPetitionerCount("");
      setAge("");
      setAddress("");
      setPincode("");
      setDistrict("");
      setTown("");
      setWard("");
      setTaluka("");
      setPoliceStationCode("");
      setUidNumber("");
      setResOrganisationName("");
      setResAccused("");
      setResRelation("");
      setResGender("");
      setResAge("");
      setResDateOfBirth("");
      setResCaste("");
      setResExtraRespondentCount("");
      setResNameOfAdvocate("");
      setResBarRegistrationNumber("");
      setResEmail("");
      setResAddress("");
      setResPincode("");
      setResDistrict("");
      setResTown("");
      setResWard("");
      setResTaluka("");
      setResProformaRespondent("");
      setPetPassportNumber("");
      setPetPanNumber("");
      setPetFaxNumber("");
      setPetCountry("");
      setPetNationality("");
      setPetPhoneNumber("");
      setPetOccupation("");
      setPetAlternateAddress("");
      setPetDistrict("");
      setPetTown("");
      setPetWard("");
      setPetTaluka("");
      setPetVilage("");
      setResPassportNumber("");
      setResPanNumber("");
      setResFaxNumber("");
      setResCountry("");
      setResNationality("");
      setResPhoneNumber("");
      setResOccupation("");
      setResAlternateAddress("");
      setRes2District("");
      setRes2Town("");
      set2ResWard("");
      setRes2Taluka("");
      setResVilage("");
      setAct("");
      setSection("");
      setPoliceChallanOrPrivateComplaint("");
      setPoliceStationCode2("");
      setDateOfOffence("");
      setDateOfFilingChargesheet("");
      setFIRType("");
      setFIRNumber("");
      setYear("");
      setInvestigatingOfficersName("");
      setBeltNum("");
      setInvestigatingOfficersName1("");
      setBeltNum1("");
      setTrials("");
      setOffenceRemark("");
      setExtraPartyType("");
      setExtraPartyOrganizationName("");
      setExtraPartyName("");
      setExtraPartyGender("");
      setExtraPartyAge("");
      setExtraPartyAdvocateName("");
      setExtraPartyBarRegistrationNumber("");
      setExtraPartyEmail("");
      setExtraPartyDateOfBirth("");
      setExtraPartyCaste("");
      setExtraPartyRelation("");
      setExtraPartyAddress("");
      setExtraPartyPincode("");
      setExtraPartyDistrict("");
      setExtraPartyTown("");
      setExtraPartyWard("");
      setExtraPartyTaluka("");
      setExtraPartyVillage("");
      setExtraPartyUidNumber("");
      setExtraPartyComplainantOrAccused("");
      setExtraPartyProformaRespondent("");
      setExtraPartyOccupation("");
      setExtraPartyPoliceStationCode("");
      setCaseNumber("");
      setCaseType("");
      setInformation("");
      setValuation("");
      setAmount("");
      setHidePartiesOrPlaintInLocalLang("");
      setDetailsDateofFiling("");
      setDetailsTimeOfFiling("");
      setDetailsCaseYear("");
      setDetailsCNRNumber("");
      setRegCaseType("");
      setRegNature("");
      setPetNameOfAdvocate("");
      setPetBarRegistrationNumber("");
      setPetEmail("");
      setResNameOfAdvocate("");
      setResBarRegistrationNumber("");
      setResEmail("");
      setPetitioner("");
      setResAccused("");
      setResRelation("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      // errRef.current.focus();
    }
  };

  const [incomingData, setIncomingData] = useState("");

  const [filingNum, setFilingNum] = useState("");
  const [caseDetails, setCaseDetails] = useState("");

  const handleGo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/court/file-case-go`,
        {
          filingNum: filingNum,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      setCaseDetails(response?.data);
      setIncomingData(response?.data);
      setPetitioner(response?.data?.plaintiffDetails?.plaintiff.name);
      setExtraPetitionerCount(
        response?.data?.plaintiffDetails?.plaintiff.extraPetitionerCnt
      );
      setPetNameOfAdvocate(response?.data?.plaintiffDetails?.advocate.name);
      setPetBarRegistrationNumber(
        response?.data?.plaintiffDetails?.advocate.barRegNum
      );
      setPetEmail(response?.data?.plaintiffDetails?.advocate.email);
      setResAccused(response?.data?.defendantDetails?.defendant.name);
      setResGender(response?.data?.defendantDetails?.defendant.gender);
      setResAge(response?.data?.defendantDetails?.defendant.age);
      setResExtraRespondentCount(
        response?.data?.defendantDetails?.defendant.extraPetitionerCnt
      );
      setDetailsDateofFiling(response?.data?.filingDate);
      setDetailsTimeOfFiling(response?.data?.filingTime);
      setDetailsCaseYear(detailsYearDate.getFullYear());
      setRegCaseType(response?.data?.caseType);
      setDetailsCNRNumber(response?.data?.cnrNum);
      setValuation(response?.data?.valuation);
      setAmount(response?.data?.amount);
      setRegCaseType(response?.data?.caseType);
      console.log("petitioner -->", petitioner);
    } catch (error) {
      console.error("Error fetching case details:", error);
    }
  };

  const detailsYearDate = new Date(detailsDateofFiling);
  console.log(detailsCaseYear);

  return (
    <div className="h-[100vh] flex justify-start items-start bg-white">
      <div className="flex flex-col min-w-[300px] justify-between h-screen bg-[#E1EEDD] pl-4 pr-2 pt-2 fixed">
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
                <p className="pl-2">
                  {" "}
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
              <p className="absolute pl-4 left-0 duration-300 ease-in-out w-[300px] font-semibold text-lg shadow-green-400 shadow-md">
                Case Registration
              </p>
              <p className=" hover:text-green-600 hover:border-green-600 duration-300 ease-in-out pt-8">
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

      {/* form */}
      <div className="absolute right-0">
        <form className="w-[1235px] pt-8">
          <div className="flex flex-col space-y-4">
            <div className="w-full justify-center items-center text-center">
              <p className="font-semibold text-2xl"> CASE DETAILS </p>
            </div>
            <div className="flex space-x-12 justify-between px-10 items-center text-center w-full">
              <div className="flex space-x-6">
                <div className="flex space-x-2">
                  <input
                    type="radio"
                    name="caseType"
                    onChange={(e) => setMainCaseType("civil")}
                    value={mainCaseType}
                  ></input>
                  <p> Civil </p>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="radio"
                    name="caseType"
                    onChange={(e) => setMainCaseType("criminal")}
                    value={mainCaseType}
                  ></input>
                  <p> Criminal </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <p>Filing Number</p>
                <input
                  className="border-2 border-gray-400 rounded-md"
                  onChange={(e) => setFilingNum(e.target.value)}
                ></input>
                <button
                  className="bg-[#49AE52] text-white rounded-md px-2 pb-0.5 hover:scale-110 duration-300 ease-in-out"
                  onClick={handleGo}
                >
                  {" "}
                  GO{" "}
                </button>
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
                <div className="h-full">
                  <div className="flex space-x-1 mt-2">
                    <p>Organisation Details</p>
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="mt-1">Organisation Name</p>
                    <input
                      className="border-2 w-64 rounded-lg py-1 border-gray-400"
                      onChange={(e) => setOrganisationName(e.target.value)}
                    ></input>
                  </div>
                  {/* First Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Complainant</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetitioner(e.target.value)}
                        value={petitioner}

                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Extra Petitioner Count</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPetitionerCount(e.target.value)
                        }
                        value={extraPetitionerCount}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Age</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setAge(e.target.value)}
                        // placeholder="Enter Age"
                      ></input>
                    </div>
                  </div>
                  {/* second line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Name of Advocate</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetNameOfAdvocate(e.target.value)}
                        value={petNameOfAdvocate}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Bar Registration Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setPetBarRegistrationNumber(e.target.value)
                        }
                        value={petBarRegistrationNumber}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 ">
                      <p>Email</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetEmail(e.target.value)}
                        value={petEmail}
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
                        onChange={(e) => setAddress(e.target.value)}
                        // placeholder="Enter Name of Advocate"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Pincode</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPincode(e.target.value)}
                        // placeholder="Enter Bar Registration Number"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setDistrict(e.target.value)}
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
                        onChange={(e) => setTown(e.target.value)}
                        // placeholder="Extra Petitioner Count"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Ward</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setWard(e.target.value)}
                        // placeholder="Mobile Number"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Taluka</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setTaluka(e.target.value)}
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
                        onChange={(e) => setPoliceStationCode(e.target.value)}
                        // placeholder="Extra Petitioner Count"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>UID Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setUidNumber(e.target.value)}
                        // placeholder="Mobile Number"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Taluka</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setTaluka(e.target.value)}
                        // placeholder="Enter Email"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Next
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Respondent */}
              <TabPanel>
                <div className="h-full">
                  <div className="flex space-x-1 mt-2">
                    <p>Organisation Details</p>
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="mt-1">Organisation Name</p>
                    <input
                      className="border-2 w-64 rounded-lg py-1 border-gray-400"
                      onChange={(e) => setResOrganisationName(e.target.value)}
                    ></input>
                  </div>
                  {/* First Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Accused</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResAccused(e.target.value)}
                        value={resAccused}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Relation</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResRelation(e.target.value)}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Name</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResAccused(e.target.value)}
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
                        onChange={(e) => setResGender(e.target.value)}
                        value={resGender}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Age</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResAge(e.target.value)}
                        value={resAge}
                        // placeholder="Enter Bar Registration Number"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Date of Birth</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResDateOfBirth(e.target.value)}
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
                        onChange={(e) => setResCaste(e.target.value)}
                        // placeholder="Extra Petitioner Count"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Extra Respondent Count</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setResExtraRespondentCount(e.target.value)
                        }
                        value={resExtraRespondentCount}
                        // placeholder="Mobile Number"
                      ></input>
                    </div>
                    <div className="flex w-80 justify-start items-center">
                      <p className="mt-4">proforma respondent</p>
                      <input
                        type="radio"
                        className="p-1 justify-center items-center mt-5 ml-2"
                        onChange={(e) =>
                          setResProformaRespondent(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                  {/* Fourth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Name of Advocate</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResNameOfAdvocate(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Bar Registration Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setResBarRegistrationNumber(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Email</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResEmail(e.target.value)}
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
                        onChange={(e) => setResAddress(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Pincode</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResPincode(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResDistrict(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Sixth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Town</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResTown(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Ward</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResWard(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Taluka</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResTaluka(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Name
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Extra Information */}
              <TabPanel>
                <div className="h-full">
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
                        onChange={(e) => setPetPassportNumber(e.target.value)}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Pan Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetPanNumber(e.target.value)}
                        // placeholder="Enter Plaintiff"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Fax Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetFaxNumber(e.target.value)}
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
                        onChange={(e) => setPetCountry(e.target.value)}
                        // placeholder="Enter Name of Advocate"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Nationality</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetNationality(e.target.value)}
                        // placeholder="Enter Bar Registration Number"
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Phone Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetPhoneNumber(e.target.value)}
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
                        onChange={(e) => setPetOccupation(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Alternate Address</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetAlternateAddress(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex w-80 justify-start items-center opacity-0">
                      <p className="mt-4">proforma respondent</p>
                      <input
                        type="radio"
                        className="p-1 justify-center items-center mt-5 ml-2"
                        onChange={(e) =>
                          setPetProformaRespondent(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                  {/* Fourth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetDistrict(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Town</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetTown(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Ward</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetWard(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Fifth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Taluka</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetTaluka(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Village</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetVilage(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPetDistrict(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="flex space-x-1 mt-2">
                    <p>Respondent Extra Information</p>
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>

                  {/* Respondent Extra Information */}
                  {/* First line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Passport Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResPassportNumber(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Pan Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResPanNumber(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Fax Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResFaxNumber(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  {/* Second line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Country</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResCountry(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Nationality</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResNationality(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Phone Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResPhoneNumber(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  {/* Third line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Occupation</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResOccupation(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Alternate Address</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResAlternateAddress(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex w-80 justify-start items-center opacity-0">
                      <p className="mt-4">proforma respondent</p>
                      <input
                        type="radio"
                        className="p-1 justify-center items-center mt-5 ml-2"
                        onChange={(e) =>
                          setResProformaRespondent(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                  {/* Fourth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setRes2District(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Town</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setRes2Town(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Ward</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => set2ResWard(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Fifth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Taluka</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setRes2Taluka(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Village</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResVilage(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setResDistrict(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Next
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Act Section */}
              <TabPanel>
                <div className="h-full">
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold">Act Details</p>
                  </div>

                  {/* First Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Act</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setAct(e.target.value)}
                      >
                      </input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Section</p>
                      <select
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        value={ipcSection}
                        onChange={(e) => setSection(e.target.value)}
                      >
                        {ipcSection.map((caseTypeItem) => (
                          <option
                            key={caseTypeItem.id}
                            value={caseTypeItem.name}
                          >
                            {caseTypeItem.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Fax Number</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                  </div>

                  {/* Second Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Section</p>
                      <select
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setSection(e.target.value)}
                        value={ipcSection}
                      >
                        {ipcSection.map((caseTypeItem) => (
                          <option
                            key={caseTypeItem.id}
                            value={caseTypeItem.name}
                          >
                            {caseTypeItem.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Section</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Fax Number</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                  </div>

                  <div className="flex mt-4">
                    <AiOutlinePlusCircle className="scale-125 mt-1" />
                    <p className="ml-2"> Add Act </p>
                  </div>

                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Next
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Police Station   */}
              <TabPanel>
                <div className="h-full">
                  {/* First Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80 mt-1.5">
                      <p>Police Challan or Private Complaint</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setPoliceChallanOrPrivateComplaint(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Police Station Code</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setPoliceStationCode(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Name</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                  </div>
                  {/* second line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Date of Offence</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setDateOfOffence(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Date of filing Chargesheet</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setDateOfFilingChargesheet(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Date of Birth</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                  </div>
                  {/* Third line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>FIR Type</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setFirType(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>FIR Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setFirNumber(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Year</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setYear(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Fourth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Investigating Officer</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setInvestigatingOfficer(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Belt Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setBeltNumber(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>Email</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                  </div>
                  {/* Fifth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Investigating Officer 1</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setInvestigatingOfficer1(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Belt Number 1</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setBeltNumber1(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 opacity-0">
                      <p>District</p>
                      <input className="border-2 border-gray-400 rounded-lg px-2 py-1"></input>
                    </div>
                  </div>
                  {/* Sixth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Trials</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setTrials(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-[99vh]">
                      <p>Offence Remark</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setOffenceRemark(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Next
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Extra Party */}
              <TabPanel>
                <div className="h-full">
                  <div className="flex space-x-3">
                    <p className="pb-1">Type:</p>
                    <div className="flex space-x-1">
                      <input
                        type="radio"
                        name="extra"
                        onChange={(e) => setExtraPartyType("complainant")}
                      ></input>
                      <p>Complainant</p>
                    </div>
                    <div className="flex space-x-1">
                      <input
                        type="radio"
                        name="extra"
                        onChange={(e) => setExtraPartyType("accused")}
                      ></input>
                      <p>Accused</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p>Organisation Details</p>
                    <AiOutlineCheckCircle className="mt-1" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="mt-1">Organisation Name</p>
                    <select
                      className="border-2 w-64 rounded-lg py-1 border-gray-400"
                      onChange={(e) => setExtraOrganisationName(e.target.value)}
                    ></select>
                  </div>
                  {/* First Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Complainant/Accused</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraComplainantAccused(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Gender</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyGender(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 ">
                      <p>Relation</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyRelation(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* second line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Name</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyName(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Caste</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyCaste(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Age</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyAge(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Third line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Name of Advocate</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPartyNameOfAdvocate(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Bar Registration Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPartyBarRegistrationNumber(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Email</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyEmail(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Fourth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Mobile Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPartyMobileNumber(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Occupation</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPartyOccupation(e.target.value)
                        }
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>UID Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyUidNumber(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Fifth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Address</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyAddress(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Pincode</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyPincode(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex w-80">
                      <p className="mt-6">Proforma Respondent</p>
                      <input
                        type="radio"
                        className="border-2 mt-4 ml-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPartyProformaRespondent(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                  {/* Sixth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>District</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyDistrict(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Town</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyTown(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Ward</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyWard(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  {/* Seventh line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Taluka</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyTaluka(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Village</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setExtraPartyVillage(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Police Station Code</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          setExtraPartyPoliceStationCode(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Next
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Case Details   */}
              <TabPanel>
                <div className="h-full">
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
                        onChange={(e) => setInformation(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {/* second line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>Valuation</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setValuation(e.target.value)}
                        value={valuation}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Amount</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80 pt-4">
                      <div className="flex space-x-2">
                        <input
                          type="radio"
                          name="case"
                          className="border-2 border-gray-400 rounded-lg px-2 py-1"
                          onChange={(e) => setHideParties("hideparties")}
                        ></input>
                        <p>Hide Parties</p>
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="radio"
                          name="case2"
                          className="border-2 border-gray-400 rounded-lg px-2 py-1"
                          onChange={(e) =>
                            setPlaintInLocalLang("plaintinlocallang")
                          }
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
                        onChange={(e) => setDetailsDateofFiling(e.target.value)}
                        value={detailsDateofFiling}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Time of Filing</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setDetailsTimeOfFiling(e.target.value)}
                        value={detailsTimeOfFiling}
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
                      <select
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setCaseType(e.target.value)}
                        value={caseType}
                      >
                        {/* Map over caseTypes and render options dynamically */}
                        {caseTypes.map((caseTypeItem) => (
                          <option
                            key={caseTypeItem.id}
                            value={caseTypeItem.name}
                          >
                            {caseTypeItem.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Case Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setCaseNumber(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Year</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setDetailsCaseYear(e.target.value)}
                        value={detailsCaseYear}
                      ></input>
                    </div>
                  </div>
                  {/* Fifth line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80">
                      <p>CNR Number</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setDetailsCNRNumber(e.target.value)}
                        value={detailsCNRNumber}
                      ></input>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full mt-6 ">
                    <button className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                      Next
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* Act Section */}
              <TabPanel>
                <div className="h-full">
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold">Registration</p>
                  </div>

                  {/* First Line of input */}
                  <div className="flex mt-2 justify-between space-y-2">
                    <div className="flex flex-col w-80 mt-2">
                      <p>Case Type</p>
                      <select
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setRegCaseType(e.target.value)}
                        value={caseType}
                      >
                        {/* Map over caseTypes and render options dynamically */}
                        {caseTypes.map((caseTypeItem) => (
                          <option
                            key={caseTypeItem.id}
                            value={caseTypeItem.name}
                          >
                            {caseTypeItem.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col w-80">
                      <p>Nature</p>
                      <input
                        className="border-2 border-gray-400 rounded-lg px-2 py-1"
                        onChange={(e) => setRegNature(e.target.value)}
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
                    <Button
                      colorScheme="green"
                      px={8}
                      onClick={onOpen}
                      className="bg-green-600 justify-center items-center px-6 py-1 rounded-lg text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105"
                    >
                      Next
                    </Button>

                    <Modal
                      // closeOnOverlayClick={false}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>
                          Are you sure you want to Register?
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={0}>
                          {/* <Lorem count={2} /> */}
                        </ModalBody>
                        <div className="flex justify-center items-center">
                          <ModalFooter>
                            <Button
                              type="submit"
                              onClick={handleSubmit}
                              colorScheme="blue"
                              mr={3}
                            >
                              Submit
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                          </ModalFooter>
                        </div>
                      </ModalContent>
                    </Modal>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </form>
      </div>
    </div>
  );
};

export default CaseRegistration;

// {
//   "petitioner": {
//     "orgName": "4",
//     "complainant": "",
//     "extraPetitionerCnt": 13,
//     "advocate": {
//       "name": "",
//       "barRegNum": "",
//       "email": ""
//     },
//     "location": {
//       "address": "",
//       "pincode": "",
//       "district": "",
//       "town": "",
//       "ward": "",
//       "taluka": ""
//     },
//     "policeStationCode": "",
//     "uidNum": ""
//   },

//   "respondent": {
//     "orgName": "",
//     "accused": "",
//     "relation": "",
//     "name": "",
//     "gender": "male",
//     "age": "",
//     "dob": "",
//     "caste": "",
//     "extraPetitionerCnt": 5,
//     "proformaRespondent": true,
//     "advocate": {
//       "name": "",
//       "barRegNum": "",
//       "email": ""
//     },
//     "location": {
//       "address": "",
//       "pincode": "",
//       "district": "",
//       "town": "",
//       "ward": "",
//       "taluka": ""
//     }
//   },

//   "extraInfo": {
//     "petitioner": {
//       "passportNum": "",
//       "panNum": "",
//       "faxNum": "",
//       "country": "",
//       "nationality": "",
//       "phone": "",
//       "occupation": "",
//       "alternateLocation": {
//         "address": "",
//         "district": "",
//         "town": "",
//         "ward": "",
//         "taluka": "",
//         "village": ""
//       }

//     },
//     "respondent": {
//       "passportNum": "",
//       "panNum": "",
//       "faxNum": "",
//       "country": "",
//       "nationality": "",
//       "phone": "",
//       "occupation": "",
//       "alternateLocation": {
//         "address": "",
//         "district": "",
//         "town": "",
//         "ward": "",
//         "taluka": "",
//         "village": ""
//       }
//     }
//   },

//   "actSection": [
//     {
//       "act": "",
//       "section": ""
//     },
//     {
//       "act": "",
//       "section": ""
//     }
//   ],

//   "policeStation": {
//     "policaChallanOrPrivateComplaint": "",
//     "policeStationCode": "",
//     "dateOfOffence": "",
//     "dateOfFilingChargesheet": "",
//     "firType": "",
//     "firNumber": "",
//     "year": "",
//     "investigatingOfficer": "",
//     "beltNum": "",
//     "investigatingOfficer1": "",
//     "beltNum1": "",
//     "trials": "",
//     "offenceRemark": ""
//   },

//   "extraParty": {
//     "type": "complaint",
//     "complainantOrAccused": "",
//     "gender": "male",
//     "relation": "",
//     "name": "",
//     "caste": "",
//     "age": "",
//     "advocate": {
//       "name": "",
//       "barRegNum": "",
//       "email": ""
//     },
//     "mobile": "",
//     "occupation": "",
//     "uidNum": "",
//     "location": {
//       "address": "",
//       "pincode": "",
//       "district": "",
//       "town": "",
//       "ward": "",
//       "taluka": "",
//       "village": ""
//     },
//     "proformaRespondent": true,
//     "policeStationCode": ""
//   },

//   "caseDetails": {
//     "info": "",
//     "valuation": "",
//     "amount": "",
//     "filingDateAndTime": "",
//     "mainMatterInfo": {
//       "caseType": "",
//       "caseNum": "",
//       "year": "",
//       "cnrNum": ""
//     }
//   },

//   "registration": {
//     "caseType": "",
//     "nature": ""
//   },

//   "caseInfo": {
//     "caseType": "",
//     "caseNum": "",
//     "caseYear": "",
//     "filingNum": "1ovqj9islpph04lk/LL05/2023",
//     "filingDate": "2023-12-03T12:40:18.267Z",
//     "regNum": "",
//     "regDate": "2023-12-04T18:21:18.267Z",
//     "cnrNum": "UP-LL05-1ovqj9islpph04lk-2023",
//     "caseDesc": "",
//     "petitionerAndAdvocate": {
//         "petitioner": "",
//         "advocate": ""
//     },
//     "respondentAndAdvocate": {
//         "respondent": "",
//         "advocate": ""
//     }
//   },

//   "caseStatus": "pending",

//   "caseHistory": [
//     {
//       "status": "pending",
//       "date": "2023-12-03T12:40:18.267Z",
//       "court": "656c81fbf4b9c0f6d738f6ee"
//     }
//   ],

//   "courtId": "656c81fbf4b9c0f6d738f6ee"
// }
