import React from 'react';
import { useState } from 'react';
import './main.css';
import './style.css';
import SideBar from './dashboard-sidebar';
import BlackmarketPricesAPI from './blackmarket-prices';
import LogoutModal from './logout-modal';
import DeleteRateModal from './delete-rate-modal';
import CreateNewRateModal from './create-new-rate-modal';
import EditBlackMarketRate from './edit-blackmarket-rate';
import UnitedKingdom from '../components/Images/united-kingdom.svg';
import UnitedState from '../components/Images/united-states1.svg';

function DashBoard() {
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [openDeleteRateModal, setOpenDeleteRateModal] = useState(false);
  const [openEditBlackMarketRate, setOpenEditBlackMarketRate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setIsOpen(true);
  };

  return (
    <div className="dashboard-container">
      <SideBar logout={logout} />
      {openCreateNewModal && (
        <CreateNewRateModal closeCreateNewModal={setOpenCreateNewModal} />
      )}
      {openDeleteRateModal && (
        <DeleteRateModal closeDeleteRateModal={setOpenDeleteRateModal} />
      )}
      {openEditBlackMarketRate && (
        <EditBlackMarketRate
          closeEditBlackMarketRate={setOpenEditBlackMarketRate}
        />
      )}
      {isOpen && <LogoutModal setIsClose={setIsOpen} />}
      <div className="blackmarket-board">
        <div className="price-api">
          <header>
            <h3>Prices from API</h3>
          </header>
          <BlackmarketPricesAPI />
        </div>

        <div className="blackmarket-rate">
          <header>
            <h3>Black Market Rates</h3>
            <button
              onClick={() => {
                setOpenCreateNewModal(true);
              }}
            >
              <span
                className="iconify"
                data-icon="ant-design:plus-outlined"
              ></span>
              <p>Creat New Rate</p>
            </button>
          </header>
          <main>
            <table>
              <tr className="table-header">
                <th>Currency</th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>
                  <div className="currency-container">
                    <span
                      className="iconify"
                      data-icon="fa-solid:toggle-on"
                    ></span>
                    <span className="currency">
                      <img src={UnitedState} alt="" />
                      <p>Dollar (USD)</p>
                    </span>
                  </div>
                </td>
                <td>$420</td>
                <td>$460</td>
                <td>
                  <div className="blackmarket-rate-action">
                    <button
                      onClick={() => {
                        setOpenEditBlackMarketRate(true);
                      }}
                    >
                      <span
                        className="iconify"
                        data-icon="ant-design:edit-outlined"
                      ></span>
                    </button>
                    <button
                      onClick={() => {
                        setOpenDeleteRateModal(true);
                      }}
                    >
                      <span
                        className="iconify delete-action"
                        data-icon="fluent:delete-20-regular"
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="currency-container">
                    <span
                      className="iconify"
                      data-icon="fa-solid:toggle-on"
                    ></span>
                    <span className="currency">
                      <img src={UnitedKingdom} alt="" />
                      <p>Pounds (GBP)</p>
                    </span>
                  </div>
                </td>
                <td>$420</td>
                <td>$460</td>
                <td>
                  <span
                    className="iconify"
                    data-icon="ant-design:edit-outlined"
                  ></span>
                  <span
                    className="iconify delete-action"
                    data-icon="fluent:delete-20-regular"
                  ></span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="currency-container">
                    <span
                      className="iconify"
                      data-icon="fa-solid:toggle-on"
                    ></span>
                    <span className="currency">
                      <img src={UnitedKingdom} alt="" />
                      <p>Pounds (GBP)</p>
                    </span>
                  </div>
                </td>
                <td>$420</td>
                <td>$460</td>
                <td>
                  <span
                    className="iconify"
                    data-icon="ant-design:edit-outlined"
                  ></span>
                  <span
                    className="iconify delete-action"
                    data-icon="fluent:delete-20-regular"
                  ></span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="currency-container">
                    <span
                      className="iconify"
                      data-icon="fa-solid:toggle-on"
                    ></span>
                    <span className="currency">
                      <img src={UnitedState} alt="" />
                      <p>Pounds (GBP)</p>
                    </span>
                  </div>
                </td>
                <td>$420</td>
                <td>$460</td>
                <td>
                  <span
                    className="iconify"
                    data-icon="ant-design:edit-outlined"
                  ></span>
                  <span
                    className="iconify delete-action"
                    data-icon="fluent:delete-20-regular"
                  ></span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="currency-container">
                    <span
                      className="iconify"
                      data-icon="fa-solid:toggle-on"
                    ></span>
                    <span className="currency">
                      <img src={UnitedState} alt="" />
                      <p>Pounds (GBP)</p>
                    </span>
                  </div>
                </td>
                <td>$420</td>
                <td>$460</td>
                <td>
                  <span
                    className="iconify"
                    data-icon="ant-design:edit-outlined"
                  ></span>
                  <span
                    className="iconify delete-action"
                    data-icon="fluent:delete-20-regular"
                  ></span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="currency-container">
                    <span
                      className="iconify"
                      data-icon="fa-solid:toggle-on"
                    ></span>
                    <span className="currency">
                      <img src={UnitedKingdom} alt="" />
                      <p>Pounds (GBP)</p>
                    </span>
                  </div>
                </td>
                <td>$420</td>
                <td>$460</td>
                <td>
                  <span
                    className="iconify"
                    data-icon="ant-design:edit-outlined"
                  ></span>
                  <span
                    className="iconify delete-action"
                    data-icon="fluent:delete-20-regular"
                  ></span>
                </td>
              </tr>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
