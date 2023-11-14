import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [btnIcon, setBtnIcon] = useState(<i className="fa fa-moon" aria-hidden="true"></i>);
  const [btnColor, setBtnColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000);
  }


  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      setBtnIcon(<i className="fa fa-moon" aria-hidden="true"></i>);
      setBtnColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled", "success");
      document.title = 'TextMOD - Light Mode'

    }else{
      setMode('dark')
      setBtnIcon(<i className="fa fa-sun" aria-hidden="true"></i>);
      setBtnColor('light');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has enabled", "success");
      document.title = 'TextMOD - Dark Mode'
    }
  }

  return (
    <>
    <Router>
        <Navbar title="TextMOD" homeMenu="Home" aboutMenu="About" btnColor={btnColor} btnIcon={btnIcon} toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
  
    </>
  );
}

export default App;
