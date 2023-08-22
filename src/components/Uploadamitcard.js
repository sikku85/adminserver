import React from 'react'
import { useState } from 'react';

export const Uploadamitcard = () => {


    const [examName, setExamName] = useState("");
    const [declaredDate, setDeclaredDate] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");

    const handleSubmit = async(e) => {
      e.preventDefault();
  
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
      document.write(`
      <div style="color: green; display: flex; justify-content: center; align-items: center; height: 100vh;">
        ${responseData}
      </div>
    `);        } else {
            console.error("Failed to make POST request:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
  
  
    };
  
  
    return (
      <div className="form-container">
        <h2>admit  Form</h2>
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
          <button style={{fontSize:"25px",fontWeight:"bolder",background:"green" ,color:"white", borderRadius:"5px"}} type="submit">Submit</button>
        </form>
      </div>
    );
}
