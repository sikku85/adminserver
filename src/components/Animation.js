import React from 'react'
import "./animated.css"
export const Animation = () => {
  return (
   <div  className='color' style={{height:"100vh",display:"flex"}}>

    <div style={{width:"50vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} className='right'>
    <h1 className="animated-text">Welcome to admin page!</h1>
    </div>


    <div  className='animated-text-container'  style={{ width: "50vw", height: "100vh",backgroundRepeat:"no-repeat"}}  >

    </div>

   </div>
  )
}
