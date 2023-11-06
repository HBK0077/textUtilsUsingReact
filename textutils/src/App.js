import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import React ,{ useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleDarkMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
    // else if(mode === "blue"){
    //   setMode("dark");
    //   document.body.style.backgroundColor = "black";
    //   showAlert("Dark mode has been enabled", "success");
    // }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  // const toggleBlueMode = () =>{
  //   if(mode === "light"){
  //     setMode("blue");
  //     document.body.style.backgroundColor = "blue";
  //     showAlert("Blue mode enabled", "success");
  //   }else if(mode === "dark"){
  //     setMode("blue");
  //     document.body.style.backgroundColor = "blue";
  //     showAlert("Blue mode enabled", "success");
  //   }else{
  //     if(setMode === "dark"){
  //       setMode("dark");
  //       document.body.style.backgroundColor = "black";
  //       showAlert("Dark mode has been enabled", "success");
  //     }else{
  //       setMode("light");
  //       document.body.style.backgroundColor = "white";
  //       showAlert("Light mode has been enabled", "success");
  //     }
      
  //   }
  // }
  // const toggleRedMode = ()=>{
  //   if(mode === "light"){
  //     setMode("red");
  //     document.body.style.backgroundColor = "red";
  //     showAlert("Blue mode enabled", "success");
  //   }else{
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutUs="About" home="Home" mode={mode} toggleDarkMode = {toggleDarkMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About title="About Us" mode={mode}></About>}></Route>
              <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}heading="Enter the text to analyze"></TextForm>}></Route> 
          </Routes> 
          
        </div>
      </Router> 
    </>
  );
}
export default App;
