import React, { useState } from "react";
import "./Css.css"

const ApplicationForm = () => {
  const centraldata=[
    "Railway",
    "Teacher",
    "UPSC",
    "Defence",
    "SSC",
    "Bank",
    "JEE-Engineers",
    "Others"
];
const statedata=[
  "Select State",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry"
];
  const [examName, setExamName] = useState("");
  const [examBoard, setExamBoard] = useState("");
  const [department, setDepartment] = useState("");
  const [responsedata, setResponsedata] = useState("");
  const [ageLimit, setAgeLimit] = useState({
    female: "",
    general: "",
    stSc: "",
    obc: "",
    pwdUnReserved: "",
    pwdObc: "",
    exServiceMen: "",
  });
  const [feeDetails, setFeeDetails] = useState({
    female: "",
    general: "",
    obc: "",
    ews: "",
    stSc: "",
    pwdObc: "",
    correctionOne: "",
    correctionTwo: "",
    modeOfPayment: "online",
  });
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [formUrls, setFormUrls] = useState({
    applyUrl: "",
    downloadNotification: "",
    officialWebsite: "",
  });
  const [qualification, setQualification] = useState("");
  const [extraFields, setExtraFields] = useState("");

  const availableData = examBoard === "Central" ? centraldata : statedata;

  

 
// setCentralStateData(centraldata);

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Create the data object to send to the server
    const formData = {
      examName,
      examBoard,
      department,
      ageLimit,
      feeDetails,
      startDate,
      lastDate,
      formUrls,
      qualification,
      extraFields,
    };
    // document.write(JSON.stringify(formData));

    try {
        const headers = new Headers();
        headers.append('ngrok-skip-browser-warning', 'true');
        
        const response = await fetch("https://f0cd-2401-4900-1c37-67de-7095-c33c-14e-f927.ngrok-free.app/upload/application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          const responseData = await response.text(); // Await the promise to get the response text
    console.log("Response data:", responseData);
    // setResponsedata(responseData);
    document.getElementById("foamid").innerHTML=responseData;

   
  } else {
          console.error("Failed to make POST request:", response.statusText);
          setResponsedata(response.statusText)
          document.getElementById("foamid").innerHTML= response.statusText;

        }
      } catch (error) {
        console.error("Error:", error);
        document.getElementById("foamid").innerHTML= error;

      }
  



  };
  

  return (
    <div className="form-container" id="foamid">
      <h2>Application  Form</h2>
      <form className="foam" onSubmit={handleSubmit}>
        {/* Create input fields for each form field */}
        <label className="form-label">Exam Name:</label>
        <input className="form-input "
          type="text"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
          required
        />

        {/* <label className="form-label">Exam Board:</label>
        <input className="form-input "
          type="text"
          value={examBoard}
          onChange={(e) => setExamBoard(e.target.value)}
        /> */}


<br /><br />

<label className="form-label">Exame Board:</label>
        <select
          name="examBoard"
          value={examBoard}
          onChange={(e) =>
            setExamBoard(e.target.value)
          }
        >
            <option value="State">State</option>
           <option value="Central">Central</option>
        </select>

        <br /><br />


<label className="form-label">Department:</label>
        <select
          name="department"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
          required
        >
          {availableData.map((central, index) => (
              <option key={index} value={central}>
                {central}
              </option>
            ))}
          
        </select>

        <br /><br />

        












        <label className="form-label">Age Limit(female):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.female}
          onChange={(e) => setAgeLimit({ ...ageLimit, female: e.target.value })}
        />
        <label  className="form-label">Age Limit (General):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.general}
          onChange={(e) =>
            setAgeLimit({ ...ageLimit, general: e.target.value })
          }
        />
        <label  className="form-label">Age Limit (ST/SC):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.stSc}
          onChange={(e) => setAgeLimit({ ...ageLimit, stSc: e.target.value })}
        />

        <label  className="form-label">Age Limit (OBC):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.obc}
          onChange={(e) => setAgeLimit({ ...ageLimit, obc: e.target.value })}
        />

        <label  className="form-label">Age Limit (pwdUnReserved):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.pwdUnReserved}
          onChange={(e) =>
            setAgeLimit({ ...ageLimit, pwdUnReserved: e.target.value })
          }
        />

        <label  className="form-label">Age Limit (pwdObc):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.pwdObc}
          onChange={(e) => setAgeLimit({ ...ageLimit, pwdObc: e.target.value })}
        />

        <label  className="form-label">Age Limit (exServiceMen):</label>
        <input className="form-input "
          type="number"
          value={ageLimit.exServiceMen}
          onChange={(e) =>
            setAgeLimit({ ...ageLimit, exServiceMen: e.target.value })
          }
        />

        <label className="form-label">Fee for Female:</label>
        <input className="form-input "
          type="number"
          name="female"
          value={feeDetails.female}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, female: e.target.value })
          }
        />

        <label className="form-label">Fee for General:</label>
        <input className="form-input "
          type="number"
          name="general"
          value={feeDetails.general}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, general: e.target.value })
          }
        />

        <label className="form-label">Fee for obc:</label>
        <input className="form-input "
          type="number"
          name="obc"
          value={feeDetails.obc}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, obc: e.target.value })
          }
        />
        <label className="form-label">Fee for ews:</label>
        <input className="form-input "
          type="number"
          name="ews"
          value={feeDetails.ews}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, ews: e.target.value })
          }
        />

        <label className="form-label">Fee for stSc:</label>
        <input className="form-input "
          type="number"
          name="stSc"
          value={feeDetails.stSc}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, stSc: e.target.value })
          }
        />

        <label className="form-label">Fee for pwdObc:</label>
        <input className="form-input "
          type="number"
          name="pwdObc"
          value={feeDetails.pwdObc}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, pwdObc: e.target.value })
          }
        />

        <label className="form-label">correctionOne</label>
        <input className="form-input "
          type="number"
          name="correctionOne"
          value={feeDetails.correctionOne}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, correctionOne: e.target.value })
          }
        />

        <label className="form-label">correctionTwo:</label>
        <input className="form-input "
          type="number"
          name="correctionTwo"
          value={feeDetails.correctionTwo}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, correctionTwo: e.target.value })
          }
        />
        <br /><br />

        <label className="form-label">Mode of Payment:</label>
        <select
          name="modeOfPayment"
          value={feeDetails.modeOfPayment}
          onChange={(e) =>
            setFeeDetails({ ...feeDetails, modeOfPayment: e.target.value })
          }
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <br /><br />

        <label className="form-label">Start Date:</label>
        <input className="form-input "
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          
        />

        <label className="form-label">last Date:</label>
        <input className="form-input "
          type="date"
          value={lastDate}
          onChange={(e) => setLastDate(e.target.value)}
          required
          
        />

        <label className="form-label">Apply URL:</label>
        <input className="form-input "
          type="text"
          name="applyUrl"
          value={formUrls.applyUrl}
          onChange={(e) =>
            setFormUrls({ ...formUrls, applyUrl: e.target.value })
          }
        />

        <label className="form-label">Download Notification URL:</label>
        <input className="form-input "
          type="text"
          name="downloadNotification"
          value={formUrls.downloadNotification}
          onChange={(e) =>
            setFormUrls({ ...formUrls, downloadNotification: e.target.value })
          }
        />

        <label className="form-label">Official Website URL:</label>
        <input className="form-input "
          type="text"
          name="officialWebsite"
          value={formUrls.officialWebsite}
          onChange={(e) =>
            setFormUrls({ ...formUrls, officialWebsite: e.target.value })
          }
        />

        <label className="form-label">Qualification:</label>
        <input className="form-input "
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />

        <label className="form-label">Extrafield:</label>
        <input className="form-input "
          type="text"
          value={extraFields}
          onChange={(e) => setExtraFields(e.target.value)}
        />

        {/* Repeat for other age limit categories */}

        {/* Repeat for other form fields */}
          <br />
          <br />
        <button style={{fontSize:"25px",fontWeight:"bolder",background:"green" ,color:"white", borderRadius:"5px",cursor:"pointer"}} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
