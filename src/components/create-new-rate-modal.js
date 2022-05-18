import React from 'react';
import './main.css';
import './style.css';


const CreateNewRateModal = ({closeCreateNewModal}) => {
  return (
    <div className="modal-container">
      <section className="new-rate-modal">
          <div className="new-rate-header">
              <h5>Create New Rate </h5>
              <button className="close-modal-btn" onClick={() => closeCreateNewModal(false)}>
                  <span className="iconify" data-icon="clarity:window-close-line"></span>
              </button>
          </div>

          <form action="">
              <div className="currency">
                  <label for="text">Currency</label>
                  <input type="text" placeholder="select currency" name="" id=""/>
              </div>
              <div className="buy-sell-price">
                  <span>
                      <label for="price">Buy Price</label>
                  <input type="price"/>
                  </span>
                  <span>
                      <label for="selling-price">Sell Price</label>
                      <input type="selling-price"/>
                  </span>
                
              </div>
          </form>
          <div className="create-rate-btn">
              <button>Create Rate</button>
          </div>
      </section>
    </div>
  );
};

export default CreateNewRateModal;