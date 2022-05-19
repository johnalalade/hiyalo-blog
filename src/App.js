import React from 'react';

import DashBoard from './components/dashboard';
import LoginForm from './components/login';
// import LogoutModal from './components/logout-modal';
function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {!localStorage.getItem("user") ? 
      <LoginForm /> : <DashBoard />
      }
      
      {/* <LogoutModal /> */}
    </div>
  );
}

export default App;
