import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import ChallengeCertificate from './Pages/ChallengeCertificate';
import Achievements from './Components/Achievements'; 
import AchievementsTimeline from './Pages/AchievementsTimeline'; 
import ScrollQuotes from './Components/ScrollQuotes';
import Shop from './Pages/Shop'; 
import ChallengeBanner from './Pages/Challenge';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/4X4X48"
          element={
            <>
              <Navbar />
              <ChallengeBanner />
            </>
          }
        />

        <Route
          path="/achievements"
          element={
            <>
              <Navbar />
              <Achievements />
            </>
          }
        />

  
        <Route
          path="/achievementstimeline"
          element={
            <>
              <Navbar />
              <AchievementsTimeline />
            </>
          }
        />
         <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
  path="/certificate"
  element={
    <>
      <Navbar />
      <ChallengeCertificate />
    </>
  }
/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
