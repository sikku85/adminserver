import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import AppContext from "./Context/AppContext"
import "./loginfoam.css"
import { Navbar } from "./Navbar"

// import { login } from "../../../services/operations/authAPI"

function LoginForm() {
   
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const {isLoggedIn,setIsLoggedIn,setIsLoggedout,setLogin}=useContext(AppContext);
  const [status,setStatus]=useState("");
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    try{
      const headers = new Headers();
          headers.append('ngrok-skip-browser-warning', 'true');   
          const response = await fetch("https://f0cd-2401-4900-1c37-67de-7095-c33c-14e-f927.ngrok-free.app/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if(response.status===202){
            console.log("Login successful");
  setIsLoggedIn(true);
  setIsLoggedout(false);
  setLogin("Logout");
  setFormData({userName:"",passWord:""});
          }else{
            const responseData = await response.text();
            console.log("Login failed");
            setStatus(responseData);
            setFormData({userName:"",passWord:""});
            setTimeout(() => {
              setStatus("");
            }, 5000);

          }

    }
    catch(error){
      setStatus("Login Failed");
      console.log(error)

    }
//  setIsLoggedIn(false);
}
  
  return (
    <>
    <div className="foamcontainer">
    <form
      onSubmit={handleOnSubmit}
      className="mainfoamcontainer"
    >
      <label className="">
        <p className="">
          Email Address <>*</>
        </p>
        <input
          required
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="inputfield"
        />
        
      </label>
      <label className="relative">
        <p className="">
          Password <sup className="">*</sup>
        </p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          name="passWord"
          value={formData.passWord}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="inputfield"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="password-icon"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
       
      </label>
      <button
        type="submit"
        className="btn"
      >
        Sign In
      </button>
      <div className="signupbtn">
        <button className="signup">Signup</button>
        <button className="forget">Forget</button>
      </div>
      {status}
    </form>

    </div>
     
    </>
   
  )
}

export default LoginForm