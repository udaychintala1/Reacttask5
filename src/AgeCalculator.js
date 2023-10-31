import React, { useState } from 'react';

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);
  
    const calculateAge = () => {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = Math.floor(ageInMilliseconds / 31556952000); 
      setAge(ageInYears);
    };
  
    return (
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button
          className="calculate-button"
          onClick={calculateAge}
        >
          Calculate age
        </button>
        {age !== null && (
          <p>You are {age} years old</p>
        )}
      </div>
    );
  }

export default AgeCalculator;