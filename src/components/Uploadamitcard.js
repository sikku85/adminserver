import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from './Context/AppContext';
import { Spinner } from './Spinner';


export const Uploadamitcard = () => {


    const [examName, setExamName] = useState("");
    const [declaredDate, setDeclaredDate] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    const [status,setStatus] =useState("");
    const [loadings,setLoadings] = useState(false);
    const {isLoggedIn,setIsLoggedIn}=useContext(AppContext);


    const handleSubmit = async(e) => {
      e.preventDefault();
      setLoadings(true);
  
      // Create the data object to send to the server
      const formData = {
        examName,
        declaredDate,
        downloadUrl,
      };
    //   document.write(JSON.stringify(formData));
  
      try {
          const headers = new Headers();
          headers.append('ngrok-skip-browser-warning', 'true');
          
          const response = await fetch("https://f0cd-2401-4900-1c37-67de-7095-c33c-14e-f927.ngrok-free.app/upload/admitCard", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            const responseData = await response.text(); // Await the promise to get the response text
      console.log("Response data:", responseData);
      setStatus("Data Uploaded Successfully");
    setDeclaredDate("");
    setDownloadUrl("");
    setExamName("");
    setTimeout(() => {
        setStatus("")
    }, 3000);
    //   document.getElementById("foamid").innerHTML=responseData;

             } else {
            console.error("Failed to make POST request:", response.statusText);
            setStatus("Data Upload Failed");
    setDeclaredDate("");
    setDownloadUrl("");
    setExamName("");
    setTimeout(() => {
        setStatus("")
    }, 3000);
            // document.getElementById("foamid").innerHTML=response.statusText;

          }
        } catch (error) {
          console.error("Error:", error);
          setStatus("Data Upload Failed");
    setDeclaredDate("");
    setDownloadUrl("");
    setExamName("");
    setTimeout(() => {
        setStatus("")
    }, 3000);
        //   document.getElementById("foamid").innerHTML=error;

        }
        setLoadings(false);
  
  
    };
  
  
    return (
     <div>
      {loadings?(<><Spinner></Spinner></>):(<>
        <div className="form-container" id="foamid">
        <h2>AdmitCard Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Create input fields for each form field */}
          <label className="form-label">Exam Name:</label>
          <input className="form-input "
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            required
          />
          
          

        
  
          <label className="form-label">Declared Date:</label>
          <input className="form-input "
            type="date"
            value={declaredDate}
            onChange={(e) => setDeclaredDate(e.target.value)}
            required
            
          />

  
          <label className="form-label">Download URL:</label>
          <input className="form-input "
            type="text"
            value={downloadUrl}
            onChange={(e) =>
                setDownloadUrl(e.target.value)
            }
          />
  


            <br />
            <br />
          <button style={{fontSize:"25px",fontWeight:"bolder",background: "rgb(2,0,36)"
              ,color:"white", borderRadius:"5px",cursor:"pointer",padding:"4px"}} type="submit">Submit</button>
              {status}
        </form>
      </div>
      </>)}
     </div>
    );
}
