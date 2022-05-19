import React from 'react';
import './main.css';
import './style.css';


const LogoutModal = ({setIsClose}) => {
  return (
    <div className="modal-container">
      <section className="logout-modal">
        <h5>Log Out</h5>
        <p>Are you sure you want to log out of your account?</p>
        <div className="action-btn">
          <button onClick={() => setIsClose(false)}>Cancel</button>
          <button onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}>Log Out</button>
        </div>
      </section>
    </div>
  );
};

export default LogoutModal;