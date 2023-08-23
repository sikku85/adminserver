
import ApplicationForm from './components/ApplicationForm ';
import { Uploadamitcard } from './components/Uploadamitcard';
import { Animation } from './components/Animation';
import { UploadResult } from './components/UploadResult';
import LoginForm from './components/LoginForm';
import { Navbar } from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Spinner } from './components/Spinner';
import { useContext } from 'react';
import AppContext from './components/Context/AppContext';

function App() {
  const {isLoggedIn,setIsLoggedIn}=useContext(AppContext);
  console.log(isLoggedIn)

  return (
    <div className="App">
     {/* <ApplicationForm></ApplicationForm> */}

     {
      isLoggedIn?(<>

      <Navbar></Navbar>
     <Routes>
        <Route path="/" element={ <Animation/> } />
        
        <Route path="upload_ApplicationForm" element={ <ApplicationForm/> } />
        <Route path="upload_Admitcard" element={ <Uploadamitcard/> } />
        <Route path="upload_Result" element={ <UploadResult/> } />
        {/* <Route path="login" element={ <LoginForm/> } /> */}

      </Routes>
      
      </>):(
        <>
        <LoginForm></LoginForm>
        </>
      )

     }
     


    </div>
  );
}

export default App;
