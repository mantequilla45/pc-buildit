import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/header';
import Build from './Build/build';
import Landing from './Landing/Landing';
import { Helmet } from 'react-helmet';

function App() {
    return (
      <Router>
        <Header />
      <Helmet>
        <title>PC Buildit</title>
      </Helmet>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/build" element={<Build />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;