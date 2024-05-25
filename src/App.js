import React, { useState } from "react";
import "./App.css";
import GenerateReport from "./GenerateReport";

function App() {
  const [initials, setInitials] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState("Years");
  const [sex, setSex] = useState("");
  const [reactionOnset, setReactionOnset] = useState("");
  const [reaction, setReaction] = useState("");
  const [seriousness, setSeriousness] = useState("");
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [reactionOnsetDay, setReactionOnsetDay] = useState('');
  const [reactionOnsetMonth, setReactionOnsetMonth] = useState('');
  const [reactionOnsetYear, setReactionOnsetYear] = useState('')

  const calculateAge = (dobDate, onsetDate, ageUnit, convertable) => {
    let age_unit = ageUnit;
    const diffTime = Math.abs(onsetDate - dobDate);
    console.log(diffTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays >= 366 && convertable) {
      setAgeUnit("Years");
      age_unit = "Years";
    } else if (convertable) {
      setAgeUnit("Months");
      age_unit = "Months";
    }

    switch (age_unit) {
      case "Months":
        return Math.floor(diffDays / 30);
      case "Years":
        return Math.floor(diffDays / 365);
      default:
        return "";
    }
  };

  const handleCalculateAge = () => {
    const dobDate = new Date(dob);
    const onsetDate = new Date(reactionOnset);
    if(onsetDate-dobDate>0){
    setDobYear(dob.split('-')[0])
    setDobMonth(dob.split('-')[1])
    setDobDay(dob.split('-')[2])
    setReactionOnsetDay(reactionOnset.split('-')[2])
    setReactionOnsetMonth(reactionOnset.split('-')[1])
    setReactionOnsetYear(reactionOnset.split('-')[0])
    if (dob && reactionOnset) {
      setAge(calculateAge(dobDate, onsetDate, ageUnit, true));
    }
  }
  else if (reactionOnset && dob){
    alert('Reaction Onset Date can not be less then DOB')
    setDob("")
    console.log('dif--',onsetDate-dobDate);
    setReactionOnset("")
  }
  };

  const handleInitialsChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z]*$/.test(value)) {
      setInitials(value);
    }
  };

  const handleReactionChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setReaction(value);
    }
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const reportData = {
    initials,
    country,
    dob,
    age,
    ageUnit,
    sex,
    reactionOnset,
    reaction,
    seriousness,
    dobDay,
    dobMonth,
    dobYear,
    reactionOnsetDay,
    reactionOnsetMonth,
    reactionOnsetYear,
  };

  return (
    <div className="App">
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="initials">Patient Initials:</label>
          <input
            type="text"
            id="initials"
            value={initials}
            onChange={handleInitialsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="GBR">GBR</option>
            <option value="US">US</option>
            <option value="IND">IND</option>
            <option value="CAN">CAN</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            onBlur={handleCalculateAge}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <select
            value={ageUnit}
            onChange={(e) => {
              setAgeUnit(e.target.value);
              setAge(calculateAge(dob, reactionOnset, e.target.value, false));
            }}
          >
            <option value="Months">Months</option>
            <option value="Years">Years</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <div className="radio-button" style={{ display: "flex" }}>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={sex === "male"}
              onChange={handleSexChange}
            />
            <label style={{ marginRight: 60, marginTop: 10 }}> Male </label>

            <input
              type="radio"
              name="sex"
              value="female"
              checked={sex === "female"}
              onChange={handleSexChange}
            />
            <label style={{ marginRight: 60, marginTop: 10 }}>Female </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="reactionOnset">Reaction Onset:</label>
          <input
            type="date"
            id="reactionOnset"
            value={reactionOnset}
            onChange={(e) => setReactionOnset(e.target.value)}
            onBlur={handleCalculateAge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reaction">Reaction:</label>
          <input
            type="text"
            id="reaction"
            value={reaction}
            onChange={handleReactionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seriousness">Seriousness Criteria:</label>
          <select
            id="seriousness"
            value={seriousness}
            onChange={(e) => setSeriousness(e.target.value)}
          >
            <option value="">Select Criteria</option>
            <option value="Death">Death</option>
            <option value="Life threatening">Life threatening</option>
            <option value="Hospitalization">Hospitalization</option>
            <option value="Disability">Disability</option>
          </select>
        </div>
        <GenerateReport reportData={reportData} />
      </form>
      </div>
    </div>
  );
}

export default App;
