import About from './components/About';
// import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import Alert from './components/Alert';
import Home from './components/Home';
import Mainheader from './components/Mainheader';
import ErrorForm from './components/ErrorForm';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert('Dark mode has been enabled', "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      //   }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return ( 
    <>
      {/* <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> */}
      <div>
        <BrowserRouter>
              {/* <Alert alert={alert} /> */}
          <Routes>
            <Route path='/' element={<Mainheader  title="TextUtilis" mode={mode} toggleMode={toggleMode} />} >
              <Route index element={<Home />} />
              <Route exact path="/About" element={<About mode={mode} />} />
              <Route exact path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} />} />
              <Route path="*" element={<ErrorForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

