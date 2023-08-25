import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import AppContext from "./Context/AppContext"
import "./loginfoam.css"

// import { login } from "../../../services/operations/authAPI"

function LoginForm() {
    const userinfo=[
        {
        email:"sikku@gmail.com",
        password:"1234"
        },{
            email:"bibhu@gmail.com",
            password:"1234"
        },{
          email:"pagali@gmail.com",
          password:"pagali",
        }
    ]
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const {isLoggedIn,setIsLoggedIn,setIsLoggedout,setLogin}=useContext(AppContext);
  const [status,setStatus]=useState("");

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userMatch = userinfo.find(user => user.email === email && user.password === password);

if (userMatch) {
  console.log("Login successful");
  setIsLoggedIn(true);
  setIsLoggedout(false);
  setLogin("Logout");
  setFormData({email:"",password:""});
} else {
  console.log("Login failed");
  setStatus("Login Failed");
  setFormData({email:"",password:""});
  setTimeout(() => {
    setStatus("");
  }, 2000);

//   setIsLoggedIn(false);
}
    
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mainfoamcontainer"
    >
      <label className="">
        <p className="">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
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
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="inputfield"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className=""
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="">
          <p className="">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="btn"
      >
        Sign In
      </button>
      {status}
    </form>
  )
}

export default LoginForm