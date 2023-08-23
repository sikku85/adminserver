import React from 'react'
import { useState } from 'react';

export const UploadResult = () => {
  
    const [examName, setExamName] = useState("");
    const [declaredDate, setDeclaredDate] = useState("");
    const [resultUrl, setResultUrl] = useState("");

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
      document.getElementById("foamid").innerHTML=responseData;
      ;        } else {
            console.error("Failed to make POST request:", response.statusText);
            document.getElementById("foamid").innerHTML=response.statusText;

          }
        } catch (error) {
          console.error("Error:", error);
          document.getElementById("foamid").innerHTML=error;

        }
  
  
    };
  
  
    return (
      <div className="form-container" id="foamid">
        <h2>Result  Form</h2>
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
        </form>
      </div>
    );
}
