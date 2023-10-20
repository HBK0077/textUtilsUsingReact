import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import React ,{ useState } from 'react'


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

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutUs="About" home="Home" mode={mode} toggleMode = {toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm showAlert={showAlert}heading="Enter the text to analyze"></TextForm>
        {/* <About title="About Us"></About> */}
      </div>
      

    </>
  );
}
export default App;
