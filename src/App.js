import React from 'react';
import './App.css';
import AnnouncedPollingunit from './components/Announced_pollingunit/announced_pollingunit';
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Header from "./pages/Header/header"
import ResultsOfUnits from './components/ResultsOf_units/resultsOf_units';
import PaticularUnit from './components/paticularUnit/paticularUnit';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<AnnouncedPollingunit />} />
          <Route path='/Result' element={<ResultsOfUnits/>} />
          <Route path='/pollingUnit' element={<PaticularUnit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
