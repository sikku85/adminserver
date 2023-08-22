import React from 'react'
import "./animated.css"
import Typed from 'typed.js';
import { useEffect } from 'react';
export const Animation = () => {

    useEffect(() => {
        const typeData = new Typed('.role', {
          strings: [
            'Welcome to Pareeksha.com',
            'Thanks for your contribution',
            'You are valuable for us',
            'Keep it up! Good Job',
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
        });
    
        return () => {
          typeData.destroy();
        };
      }, []);
    
  return (
   <div  className='color' style={{height:"100vh",display:"flex"}}>

    <div style={{width:"50vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className='right'>
   <div><h1 style={{color:"white"}}><span className="role"></span></h1> </div> 
   <br />
   <div style={{color:"white",padding:"10px"}}>
              "Your contributions make a significant impact, helping us create
              a better digital world. <br /> Thank you for your valuable
              work and dedication!"
            </div>
    </div>


    <div  className='animated-text-container'  style={{ width: "50vw", height: "100vh",backgroundRepeat:"no-repeat"}}  >

    </div>

   </div>
  )
}
