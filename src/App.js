import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BlogContainer from './components/BlogContainer';
import MainFooter from './components/Footer';
import BlogFull from './components/latestBlogFull';
import WhereToLive from './components/whereToLive';
import FiveFactoresToConsider from './components/FiveFactorsToConsider';
import HousingCrisis from './components/HousingCrisisInLagos';
import NollywoodLying from './components/NollywoodLying';
import StopMovingToLagos from './components/Blog6';
import HeIsMarried from './components/blog7';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar />
          <div>
            <Routes>
              <Route path="/" exact element={<BlogContainer />} />
              <Route path="/blog/house-hunting" element={<BlogFull />} />
              <Route path="/blog/where-to-live" element={<WhereToLive />} />
              <Route path="/blog/five-factors-to-consider" element={<FiveFactoresToConsider />} />
              <Route path="/blog/housing-crisis-in-Nigeria" element={<HousingCrisis />} />
              <Route path="/blog/has-nollywood-been-lying-to-us-about-lagos" element={<NollywoodLying />} />
              <Route path="/blog/stop-moving-to-lagos" element={<StopMovingToLagos />} />
              <Route path="/blog/he-is-married" element={<HeIsMarried />} />
            </Routes>
          </div>
          
          <MainFooter />
        </div>
      </Router>
    );
  }
}

export default App;
