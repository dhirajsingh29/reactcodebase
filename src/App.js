import { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#213b66';
      displayAlert('Darkmode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert('Lightmode enabled', 'success');
    }
  };

  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route
              exact
              path='/'
              element={<TextForm displayAlert={displayAlert} heading="Enter the text to analyze below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
