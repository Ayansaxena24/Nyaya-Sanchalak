import React, { useState, useEffect } from 'react';
import { caseData } from '../assets/data/data';

const EditablePage = () => {
  // State to manage the order of rows for display purposes
  const [displayCaseData, setDisplayCaseData] = useState([]);

  // Function to handle changing the date of a case
  const handleDateChange = (index, newDate) => {
    const newOrder = [...displayCaseData];
    newOrder[index] = { ...newOrder[index], registrationDate: newDate };
    handleDisplayCaseDataChange(newOrder);
  };

  // Function to handle changing the order of cases for display
  const handleDisplayCaseDataChange = (newOrder) => {
    setDisplayCaseData(newOrder);
    // You can simulate the update to the data.js file by saving it to local storage or any other method
    // For example, localStorage.setItem('displayCaseData', JSON.stringify(newOrder));
  };

  // Fetch the initial data from the data.js file on component mount
  useEffect(() => {
    // Simulating fetching data from data.js
    const initialData = caseData;
    setDisplayCaseData(initialData);
  }, []);

  // Generate date options for the next seven days
  const dateOptions = [...Array(7)].map((_, i) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    const formattedDate = currentDate.toISOString().split('T')[0];
    return formattedDate;
  });

  return (
    <div>
      <h1>Edit Page</h1>

      {/* Display cases with date change functionality */}
      <ul>
        {displayCaseData.map((caseItem, index) => (
          <li key={index}>
            {caseItem.caseNumber} - {caseItem.registrationDate}
            <select
              value={caseItem.registrationDate}
              onChange={(e) => handleDateChange(index, e.target.value)}
            >
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>

      {/* Link back to the original page */}
      <button onClick={() => console.log(displayCaseData)}>Save Changes</button>
    </div>
  );
};

export default EditablePage;
