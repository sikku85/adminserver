import React from 'react'
import "./Spinner.css"

export const Spinner = (props) => {
  return (
    <div className='spinnercontainer'>
          <div className="spinner">

    {props.status}
          </div>


    </div>
  )
}
