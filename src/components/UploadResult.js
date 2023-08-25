import React from 'react'
import { useState } from 'react';
import { Spinner } from './Spinner';

export const UploadResult = () => {
  
    const [examName, setExamName] = useState("");
    const [declaredDate, setDeclaredDate] = useState("");
    const [resultUrl, setResultUrl] = useState("");
    const [status,setStatus]=useState("");
    const [loadings,setLoadings] = useState(false);

    const handleSubmit = async(e) => {
      e.preventDefault();
  
      // Create the data object to send to the server
      const formData = {
        examName,
        resultUrl,
        declaredDate
      };
      // document.write(JSON.stringify(formData));
  
      try {
          const headers = new Headers();
          headers.append('ngrok-skip-browser-warning', 'true');
          
          const response = await fetch("https://f0cd-2401-4900-1c37-67de-7095-c33c-14e-f927.ngrok-free.app/upload/result", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            const responseData = await response.text(); // Await the promise to get the response text
      console.log("Response data:", responseData);
    //   document.getElementById("foamid").innerHTML=responseData;
    setStatus("Data Uploaded Successfully");
    setDeclaredDate("");
    setResultUrl("");
    setExamName("");
    setTimeout(() => {
        setStatus("")
    }, 3000);
      ;        } else {
            console.error("Failed to make POST request:", response.statusText);
            // document.getElementById("foamid").innerHTML=response.statusText;
            setStatus("Data Upload Failed");
            setDeclaredDate("");
            setResultUrl("");
             setExamName("");
             setTimeout(() => {
                setStatus("")
            }, 3000);

          }
        } catch (error) {
          console.error("Error:", error);
        //   document.getElementById("foamid").innerHTML=error;
        setStatus("Data Upload Failed");
        setDeclaredDate("");
        setResultUrl("");
        setExamName("");
        setTimeout(() => {
            setStatus("")
        }, 3000);

        }
  
  
    };
  
  
    return (
    <div>
      {loadings?(<><Spinner></Spinner></>):(<>
        <div className="form-container" id="foamid">
        <h2>Result  Form</h2>
        <div>{status}</div>
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

  
          <label className="form-label">Result URL:</label>
          <input className="form-input "
            type="text"
            name="downloadNotification"
            value={resultUrl}
            onChange={(e) =>
                setResultUrl(e.target.value)
            }
          />
  


            <br />
            <br />
          <button style={{fontSize:"25px",fontWeight:"bolder",background:"green" ,color:"white", borderRadius:"5px",cursor:"pointer",background: "rgb(2,0,36)",padding:"4px"}} type="submit">Submit</button>
          {status}
        </form>
      </div>
      </>)}
    </div>
    );
}
