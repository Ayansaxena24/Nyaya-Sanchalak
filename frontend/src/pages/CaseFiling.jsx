import React from "react";
import logo from "../assets/Images/ministryLogo.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "./api/axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FILINGURL = "/court/file-case";

const CaseFiling = () => {
  // states for handling the inputs
  //Type
  const [startType, setStartType] = useState("");
  const [type, setType] = useState("");
  // plaintiff
  const [plaintiff, setPlaintiff] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [advocateName, setAdvocateName] = useState("");
  const [barRegistrationNumber, setBarRegistrationNumber] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgExtraPetitionerCount, setOrgExtraPetitionerCount] = useState("");
  const [OrgMobileNumber, setOrgMobileNumber] = useState("");
  // defendant
  const [defendantName, setDefendantName] = useState("");
  const [defendantGender, setDefendantGender] = useState("");
  const [defendantAge, setDefendantAge] = useState("");
  const [defendantExtraPetitionerCount, setDefendantExtraPetitionerCount] =
    useState("");
  const [defendantMobileNumber, setDefendantMobileNumber] = useState("");
  const [defendantEmail, setDefendantEmail] = useState("");
  // valuation
  const [valuation, setValuation] = useState("");
  const [amount, setAmount] = useState("");
  const [extraOptions, setExtraOptions] = useState("");
  // date and time of filing
  const [dateOfFiling, setDateOfFiling] = useState(new Date());
  const [timeOfFiling, setTimeOfFiling] = useState(new Date());
  // prayer
  const [prayer, setPrayer] = useState("");
  const [reliefClaimed, setReliefClaimed] = useState("");
  const [causeOfAction, setCauseOfAction] = useState("");
  // act1
  const [act1, setAct1] = useState("");
  const [actSection1, setActSection1] = useState("");
  const [dateOfCauseOfAction, setDateOfCauseOfAction] = useState(new Date());

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        category: startType,
        caseType: type,
        plaintiffDetails: {
          plaintiff: {
            name: plaintiff,
            gender,
            age,
            extraPetitionerCnt: orgExtraPetitionerCount,
            mobile: OrgMobileNumber,
          },
          advocate: {
            name: advocateName,
            barRegNum: barRegistrationNumber,
            email: orgEmail,
          },
        },
        defendantDetails: {
          defendant: {
            name: defendantName,
            gender: defendantGender,
            age: defendantAge,
            extraPetitionerCnt: defendantExtraPetitionerCount,
            mobile: defendantMobileNumber,
          },
        },
        valuation,
        amount,
        filingDateAndTime: dateOfFiling + "T" + timeOfFiling + ":00.000+00:00",
      };

      const response = await axios.post(FILINGURL, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setStartType("");
      setType("");
      setPlaintiff("");
      setGender("");
      setAge("");
      setAdvocateName("");
      setBarRegistrationNumber("");
      setOrgEmail("");
      setOrgExtraPetitionerCount("");
      setOrgMobileNumber("");
      setDefendantName("");
      setDefendantGender("");
      setDefendantAge("");
      setDefendantExtraPetitionerCount("");
      setDefendantMobileNumber("");
      setDefendantEmail("");
      setValuation("");
      setAmount("");
      setExtraOptions("");
      setDateOfFiling("");
      setTimeOfFiling("");
      setPrayer("");
      setReliefClaimed("");
      setCauseOfAction("");
      setAct1("");
      setActSection1("");
      setDateOfCauseOfAction("");
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

      {/* form */}
      <form className="w-[1235px] pt-8">
        <div className="flex flex-col space-y-4">
          <div className="w-full justify-center items-center text-center">
            <p className="font-semibold text-2xl"> CASE DETAILS </p>
          </div>
          <div className="flex space-x-12 justify-between px-10 items-center text-center">
            <div className="flex space-x-6">
              <div className="flex space-x-2" value={type}>
                <input
                  type="radio"
                  name="caseType"
                  onChange={(e) => setStartType("civil")}
                ></input>
                <p> Civil </p>
              </div>
              <div className="flex space-x-2">
                <input
                  type="radio"
                  name="caseType"
                  onChange={(e) => setStartType("criminal")}
                ></input>
                <p> Criminal </p>
              </div>
              <div className="flex space-x-2">
                <input
                  type="radio"
                  name="caseType"
                  onChange={(e) => setStartType("caveatfiling")}
                ></input>
                <p> Caveat Filing</p>
              </div>
            </div>
            <div className="flex w-80">
              <p className="flex mt-1">Case Type</p>
              <select
                className="px-20 py-1 rounded-lg border-2 border-gray-400 ml-2"
                placeholder="Enter Case Type"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center space-y-1"></div>
        </div>
        <hr className=" text-md border-1 mx-10 bg-black text-black border-black"></hr>
        <div className="h-full mx-14">
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
                onChange={(e) => setPlaintiff(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Gender</p>
              <select
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setGender(e.target.value)}
                // placeholder="Select Gender"
              >
                <option placeholder="Select Gender"></option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
              </select>
            </div>
            <div className="flex flex-col w-80">
              <p>Age</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setAge(e.target.value)}
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
                onChange={(e) => setAdvocateName(e.target.value)}
                // placeholder="Enter Name of Advocate"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Bar Registration Number</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setBarRegistrationNumber(e.target.value)}
                // placeholder="Enter Bar Registration Number"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Email</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setOrgEmail(e.target.value)}
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
                onChange={(e) => setOrgExtraPetitionerCount(e.target.value)}
                // placeholder="Extra Petitioner Count"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Mobile Number</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setOrgMobileNumber(e.target.value)}
                // placeholder="Mobile Number"
              ></input>
            </div>
            <div className="flex flex-col w-80 opacity-0">
              <p>Email</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setOrgEmail(e.target.value)}
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
                onChange={(e) => setDefendantName(e.target.value)}
                // placeholder="Enter Defendant's Name"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Gender</p>
              <select
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setDefendantGender(e.target.value)}
                // placeholder="Select Gender"
              >
                <option placeholder="Select Gender"></option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
              </select>
            </div>
            <div className="flex flex-col w-80">
              <p>Age</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setDefendantAge(e.target.value)}
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
                onChange={(e) =>
                  setDefendantExtraPetitionerCount(e.target.value)
                }
                // placeholder="Extra Petitioner Count"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Mobile Number</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setDefendantMobileNumber(e.target.value)}
                // placeholder="Mobile Number"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Email</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setDefendantEmail(e.target.value)}
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
                onChange={(e) => setValuation(e.target.value)}
                // placeholder="Enter Valuation"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Amount</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setAmount(e.target.value)}
                // placeholder="Enter Amount"
              ></input>
            </div>
            <div className="flex flex-col w-80 mt-4">
              <div className="flex space-x-1">
                <input
                  type="radio"
                  name="ExtraOptions"
                  onChange={(e) => setExtraOptions("hideparties")}
                ></input>
                <p>Hide Parties</p>
              </div>
              <div className="flex space-x-1">
                <input
                  type="radio"
                  name="ExtraOptions"
                  onChange={(e) => setExtraOptions("plaintinlocallanguage")}
                ></input>
                <p>Plaint in local language</p>
              </div>
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="pt-2 mt-2 w-80 flex justify-start">
              <button className=" border-gray-600 px-4 py-1 rounded-lg bg-green-600 text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105">
                Calculate
              </button>
            </div>
            <div className="flex flex-col w-80">
              <p>Date of Filing</p>
              <DatePicker
                selected={dateOfFiling}
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(date) => setDateOfFiling(date)}
                dateFormat="dd/MM/yyyy"
                // placeholder="Enter Amount"
              ></DatePicker>
            </div>
            <div className="flex flex-col w-80">
              <p>Time of Filing</p>
              <DatePicker
                selected={timeOfFiling}
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(date) => setTimeOfFiling(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                // placeholder="Enter Amount"
              ></DatePicker>
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Prayer</p>
              <select
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setPrayer(e.target.value)}
                // placeholder="Enter Defendant's Name"
              >
                <option value="prayer1">Prayer 1</option>
                <option value="prayer2">Prayer 2</option>
              </select>
            </div>
            <div className="flex flex-col w-80">
              <p>Relief Claimed</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setReliefClaimed(e.target.value)}
                // placeholder="Select Gender"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Cause of Action</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setCauseOfAction(e.target.value)}
                // placeholder="Enter Age"
              ></input>
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="flex flex-col w-80">
              <p>Act1</p>
              <select
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setAct1(e.target.value)}
                // placeholder="Enter Defendant's Name"
              >
                <option value="act1">Act 1</option>
                <option value="act2">Act 2</option>
              </select>
            </div>
            <div className="flex flex-col w-80">
              <p>Act Section1</p>
              <input
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(e) => setActSection1(e.target.value)}
                // placeholder="Select Gender"
              ></input>
            </div>
            <div className="flex flex-col w-80">
              <p>Date of cause of action</p>
              <DatePicker
                selected={dateOfCauseOfAction}
                dateFormat="dd/MM/yyyy"
                className="border-2 border-gray-400 rounded-lg px-2 py-1"
                onChange={(date) => setDateOfCauseOfAction(date)}
                // placeholder="Enter Age"
              ></DatePicker>
            </div>
          </div>
          <div className="flex mt-2 justify-center">
            <button
              className=" border-gray-600 px-8 py-2 mb-2 rounded-lg bg-green-600 text-white hover:shadow-green-200 hover:shadow-md duration-300 ease-in-out hover:text-green-100 hover:scale-105"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CaseFiling;

// {
//   "category": "civil",
//   "caseType": "type1",
//   "plaintiffDetails": {
//     "plaintiff": {
//       "name": "plaintiff1",
//       "gender": "male",
//       "age": 21,
//       "extraPetitionerCnt": 2,
//       "mobile": 1234567890
//     },
//     "advocate": {
//       "name": "plaintiffAdvocate1",
//       "barRegNum": "8rhsudh32urh",
//       "email": "plaintiffAdvocate1@gmail.com"
//     }
//   },
//   "defendantDetails": {
//     "defendant": {
//       "name": "defendent1",
//       "gender": "female",
//       "age": 23,
//       "extraPetitionerCnt": 4,
//       "mobile": 2134567890
//     }
//   },
//   "valuation": "283",
//   "amount": 294,
//   "filingDateAndTime": "2023-10-27T18:00:00.000+00:00"
// }
