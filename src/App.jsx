import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./components/Login.jsx";
import Register from "./components/Register.jsx"; // Import the Register component
import CrCreate from "./components/CrCreate.jsx"; // Import the Create component

function App() {
  const [loginState, setLoginState] = useState({
    selectedLoginId: undefined,
    Login: []
  });

  const handleLoginRedirect = () => {
    // Navigate to the login page
    window.location.href = "/login";
  }

  const handleRegisterButton = () => {
    // Navigate to the register page
    window.location.href = "/register";
  }
  
  const handleRegister = () => {
    window.location.href ="/login";
  }

  
  const handleLogin = (loginData) => {
    // Assume login is successful for demonstration
    setLoginState(prevState => {
      const loginid = Math.random();
      const sucsessLogin =()=>{
        window.location.href = "/crcreate"
      };
      const updatedLogin = {
        ...loginData,
        id: loginid
        
      };
      return {
        ...prevState,
        selectedLoginId: loginid, // Set selectedLoginId to the generated loginid
        Login: [...prevState.Login, updatedLogin],
        sucsessLogin
        
      };
    });
  }

  const[crState, setcrState] = useState({
    selectedCrtId: undefined,
    crs:[]
  });

  function handleCrCreate(crData){
    setcrState(prevState => {
      const crId = Math.random(); 
      const NewCr = {
        ...crData,
        id: crId,
      };
      return{
        ...prevState,
        selectedCrId: undefined,
        crs: [...prevState.crs, NewCr]
      };
    });
  }

  let content;
  if (crState.selectedCrtId === undefined){
    content= <CrCreate onSubmit= {handleCrCreate}/>;
  }





  return (
    <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home onStartLogin={handleLoginRedirect} />} />
          <Route path="/login" element={<LogIn onLogin={handleLogin} onRegister={handleRegisterButton} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} onStartLogin={handleLoginRedirect}/>} /> {/* Route to the Register component */}
          {loginState.selectedLoginId && <Navigate to="/crcreate" />} {/* Redirect to the Create route if login is successful */}
          <Route path="/crcreate" element={<CrCreate />} /> {/* Route to the Create component */}
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
