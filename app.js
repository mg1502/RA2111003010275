import React from "react";
import './App.css';
import CompanyInfo from "./companyInfo"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter, Route, and Switch
import CompanyInfo from "./companyInfo";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route>
        <h1>Welcome to the top N Product Application</h1>
        <CompanyInfo/>
          </Route>
          <Route path="/CompanyName">
            <p>CompanyName:</p>
            <input type='text' />
            <br></br>
          </Route>
          <Route path="/ownerName">
            <p>ownerName</p>
            <input type='text'/>
            <br></br>
          </Route>
          <Route path="rollNo">
            <p>rollNo</p>
            <input type='text'/>
          </Route>
          <Route path="/ownerEmail">
            <p>rollNo</p>
            <input type='text'/>
          </Route>
          <Route path="accessCode">
            <p>accessCode</p>
            <input type='text'/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
