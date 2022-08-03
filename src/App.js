import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
              <Route path="/" exact>
                <BlogContainer />
              </Route>

              <Route path="/blog/house-hunting">
                <BlogFull />
              </Route>

              <Route path="/blog/where-to-live">
                <WhereToLive />
              </Route>

              <Route path="/blog/five-factors-to-consider">
                <FiveFactoresToConsider />
              </Route>

              <Route path="/blog/housing-crisis-in-Nigeria">
                <HousingCrisis />
              </Route>

              <Route path="/blog/has-nollywood-been-lying-to-us-about-lagos">
                <NollywoodLying />
              </Route>

              <Route path="/blog/stop-moving-to-lagos">
                <StopMovingToLagos />
              </Route>

              <Route path="/blog/he-is-married">
                <HeIsMarried />
              </Route>

            </Switch>
          </div>

          <MainFooter />
        </div>
      </Router>
    );
  }
}

export default App;
