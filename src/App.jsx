import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from './Components/Layout'; 


import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import ChallengeCertificate from './Pages/ChallengeCertificate';
import AchievementsTimeline from './Pages/AchievementsTimeline';
import Shop from './Pages/Shop';
import ChallengeBanner from './Pages/Challenge';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="4X4X48" element={<ChallengeBanner />} />
          <Route path="achievementstimeline" element={<AchievementsTimeline />} />
          <Route path="shop" element={<Shop />} />
          <Route path="certificate" element={<ChallengeCertificate />} />
        </Route>


        <Route path="/login" element={<Login />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;