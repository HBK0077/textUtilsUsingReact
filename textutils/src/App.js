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
  const removeClassList = ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");

  }
  const toggleMode = (cls)=>{
    console.log(cls)
    removeClassList();
    document.body.classList.add("bg-"+cls)
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
    
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutUs="About" home="Home" mode={mode} toggleMode = {toggleMode}></Navbar>
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
