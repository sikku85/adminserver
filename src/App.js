
import ApplicationForm from './components/ApplicationForm ';
import { Uploadamitcard } from './components/Uploadamitcard';
import { Animation } from './components/Animation';
import { UploadResult } from './components/UploadResult';
import { Navbar } from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Spinner } from './components/Spinner';

function App() {
  return (
    <div className="App">
     {/* <ApplicationForm></ApplicationForm> */}
     <Navbar></Navbar>


     <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/" element={ <Animation/> } />
        <Route path="upload_ApplicationForm" element={ <ApplicationForm/> } />
        <Route path="upload_Admitcard" element={ <Uploadamitcard/> } />
        <Route path="upload_Result" element={ <UploadResult/> } />


        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
     


    </div>
  );
}

export default App;
