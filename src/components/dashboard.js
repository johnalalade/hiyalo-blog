import React from 'react';
import { useState, useEffect } from 'react';
import './main.css';
import './style.css';
import SideBar from './dashboard-sidebar';
// import BlackmarketPricesAPI from './blackmarket-prices';
import LogoutModal from './logout-modal';
import DeleteRateModal from './delete-rate-modal';
import CreateNewRateModal from './create-new-rate-modal';
import EditBlackMarketRate from './edit-blackmarket-rate';
import UnitedKingdom from '../components/Images/united-kingdom.svg';
import UnitedState from '../components/Images/united-states1.svg';
import axios from "axios";

function DashBoard() {
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [openDeleteRateModal, setOpenDeleteRateModal] = useState(false);
  const [openEditBlackMarketRate, setOpenEditBlackMarketRate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rates, setRates] = useState([]);
  const [rated, setRated] = useState([]);
  const [page, setPage] = useState("Black")

  const images = [
    require('../components/Images/united-states1.svg'), require('../components/Images/united-kingdom.svg'), require("../components/Images/euros.svg"), require("../components/Images/canadian-dollars.svg"), require("../components/Images/rand.svg"), require("../components/Images/dirham.svg"), require("../components/Images/chinese-yuan.svg"), require("../components/Images/ghana-cedi.svg")
  ]


  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [id, setId] = useState("")
  const [currency_symbol, setCurrencySymbol] = useState("")
  const [currency_name, setCurrencyName] = useState("")
  const [clean, setClean] = useState(0)
  const [cbn, setCBN] = useState({})

  const [coins, setCoins] = useState([])

  const logout = () => {
    setIsOpen(true);
  };
  const run = async () => {
    try {
      const getMyRatesData = await axios.get(
        "https://kudifx.herokuapp.com/api/v1/get-price"
      );
      console.log(getMyRatesData.data)
      setRated(getMyRatesData.data)
      if(page === "Black"){
      setRates(getMyRatesData.data.filter(r => !r.atm));
      }
      else{
        setRates(getMyRatesData.data.filter(r => r.atm === true));
      }

      const getCbnRatesData = await axios.get('https://kudifx.herokuapp.com/api/v1/cbn-rate')

      setCBN(getCbnRatesData.data)

      const coin = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
      setCoins(coin.data)

    } catch (error) {
      // return error;
    }
  }
  useEffect(() => {
    run()
  }, [clean])

  const cleanUp = () => {
    setClean(clean + 1)
  }

  const pager = (p) => {
    setPage(p)
    if (p === "ATM") {
      setRates(rated.filter(r => r.atm === true))
    }
    else {
      setRates(rated.filter(r => !r.atm))
    }
  }

  if (page === "CBN") {
    return (
      <div className="dashboard-container">
        <SideBar logout={logout} pagenation={pager} page={page} />
        {openCreateNewModal && (
          <CreateNewRateModal closeCreateNewModal={setOpenCreateNewModal} />
        )}
        {openDeleteRateModal && (
          <DeleteRateModal closeDeleteRateModal={setOpenDeleteRateModal} />
        )}
        {openEditBlackMarketRate && (
          <EditBlackMarketRate
            closeEditBlackMarketRate={setOpenEditBlackMarketRate}
            buy={buy} sell={sell} id={id} currency_name={currency_name} currency_symbol={currency_symbol} cleanUp={cleanUp}
          />
        )}
        {isOpen && <LogoutModal setIsClose={setIsOpen} />}
        <div className="blackmarket-board">
          {/* <div className="price-api">
          <header>
            <h3>Prices from API</h3>
          </header>
          <BlackmarketPricesAPI />
        </div> */}

          <div className="blackmarket-rate">
            <br />
            <header>
              <h3>CBN Rates</h3>

            </header>
            <main>
              {rates && rates[0] &&
                <table>
                  <tr className="table-header">
                    <th>Currency</th>
                    <th>Price</th>


                  </tr>

                  <tr>
                    <td>
                      <div className="currency-container">
                        
                        <span className="currency">
                          <img src={UnitedState} alt="" />
                          <p>Dollar (USD)</p>
                        </span>
                      </div>
                    </td>
                    <td>&#8358;{cbn.usd}</td>

                    
                  </tr>

                  <tr>
                    <td>
                      <div className="currency-container">
                        <span
                          
                        ></span>
                        <span className="currency">
                          <img src={UnitedKingdom} alt="" />
                          <p>Pound (GBP)</p>
                        </span>
                      </div>
                    </td>
                    <td>&#8358;{cbn.gbp}</td>

                    
                  </tr>

                  <tr>
                    <td>
                      <div className="currency-container">
                        <span
                          
                        ></span>
                        <span className="currency">
                          <img src={require("../components/Images/euros.svg")} style={{width:35}} alt="" />
                          <p>Euro (EUR)</p>
                        </span>
                      </div>
                    </td>
                    <td>&#8358;{cbn.eur}</td>
                    
                  </tr>



                </table>
              }

            </main>
          </div>
        </div>
      </div>
    )
  }
  if (page === "Crypto") {
    return (
      <div className="dashboard-container">
        <SideBar logout={logout} pagenation={pager} page={page} />
        {openCreateNewModal && (
          <CreateNewRateModal closeCreateNewModal={setOpenCreateNewModal} />
        )}
        {openDeleteRateModal && (
          <DeleteRateModal closeDeleteRateModal={setOpenDeleteRateModal} />
        )}
        {openEditBlackMarketRate && (
          <EditBlackMarketRate
            closeEditBlackMarketRate={setOpenEditBlackMarketRate}
            buy={buy} sell={sell} id={id} currency_name={currency_name} currency_symbol={currency_symbol} cleanUp={cleanUp}
          />
        )}
        {isOpen && <LogoutModal setIsClose={setIsOpen} />}
        <div className="blackmarket-board">


          <div className="blackmarket-rate">
            <br />
            <header>
              <h3>Cryptocurrencies</h3>

            </header>
            <main>
              {coins && coins[0] &&
                <table>
                  <tr className="table-header">
                    <th>Currency</th>
                    <th>Price</th>


                  </tr>

                  {coins.map((coin, ix) => (
                    <tr key={ix}>
                      <td>
                        <div className="currency-container">
                          
                          <span className="currency">
                            <img src={coin.image} style={{ width: 50 }} alt="" />
                            <p>{coin.name}</p>
                          </span>
                        </div>
                      </td>
                      <td>$ {coin.current_price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>

                    </tr>

                  ))}


                </table>
              }

            </main>
          </div>
        </div>
      </div>
    )
  }
  return (
    (page === "Black"
      ?
      <div className="dashboard-container">
        <SideBar logout={logout} pagenation={pager} page={page} />
        {openCreateNewModal && (
          <CreateNewRateModal page={page} closeCreateNewModal={setOpenCreateNewModal} cleanUp={cleanUp} atm={false} />
        )}
        {openDeleteRateModal && (
          <DeleteRateModal id={id} closeDeleteRateModal={setOpenDeleteRateModal} cleanUp={cleanUp} />
        )}
        {openEditBlackMarketRate && (
          <EditBlackMarketRate
            closeEditBlackMarketRate={setOpenEditBlackMarketRate}
            buy={buy} sell={sell} id={id} currency_name={currency_name} currency_symbol={currency_symbol} cleanUp={cleanUp} page={page}
          />
        )}
        {isOpen && <LogoutModal setIsClose={setIsOpen} />}
        <div className="blackmarket-board">
          {/* <div className="price-api">
          <header>
            <h3>Prices from API</h3>
          </header>
          <BlackmarketPricesAPI />
        </div> */}

          <div className="blackmarket-rate">
            <br />
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
              {rates && rates[0] &&
                <table>
                  <tr className="table-header">
                    <th>Currency</th>
                    <th>Buy</th>
                    <th>Sell</th>
                    <th>Action</th>
                  </tr>

                  {rates && rates.map((rate, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="currency-container">
                          {/* <span
                            className="iconify"
                            data-icon="fa-solid:toggle-on"
                          ></span> */}
                          <span className="currency">
                            <img src={images[idx]} style={{ width: 35 }} alt="" />
                            <p>{rate.currency_name} ({rate.currency_symbol})</p>
                          </span>
                        </div>
                      </td>
                      <td>&#8358;{rate.buy_price}</td>
                      <td>&#8358;{rate.sell_price}</td>
                      {/* <td>$420</td>
                              <td>$460</td> */}
                      <td>
                        <div className="blackmarket-rate-action">
                          <button
                            onClick={() => {
                              setOpenEditBlackMarketRate(true);

                              setBuy(rate.buy_price)
                              setSell(rate.sell_price)
                              setId(rate._id)
                              setCurrencyName(rate.currency_name)
                              setCurrencySymbol(rate.currency_symbol)
                              console.log(rate._id, rate.currency_name, rate.currency_symbol)
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
                              setId(rate._id)
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
                  ))}

                </table>
              }

            </main>
          </div>
        </div>
      </div>
      :
      <div className="dashboard-container">
        <SideBar logout={logout} pagenation={pager} page={page} />
        {openCreateNewModal && (
          <CreateNewRateModal page={page} closeCreateNewModal={setOpenCreateNewModal} cleanUp={cleanUp} atm={true} />
        )}
        {openDeleteRateModal && (
          <DeleteRateModal id={id} closeDeleteRateModal={setOpenDeleteRateModal} cleanUp={cleanUp} />
        )}
        {openEditBlackMarketRate && (
          <EditBlackMarketRate
            closeEditBlackMarketRate={setOpenEditBlackMarketRate}
            buy={buy} sell={sell} id={id} currency_name={currency_name} currency_symbol={currency_symbol} cleanUp={cleanUp}
          />
        )}
        {isOpen && <LogoutModal setIsClose={setIsOpen} />}
        <div className="blackmarket-board">
          {/* <div className="price-api">
          <header>
            <h3>Prices from API</h3>
          </header>
          <BlackmarketPricesAPI />
        </div> */}

          <div className="blackmarket-rate">
            <br />
            <header>
              <h3>ATM Rates</h3>
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
              {rates && rates[0] &&
                <table>
                  <tr className="table-header">
                    <th>Currency</th>
                    <th>Price</th>
                    {/* <th>Sell</th> */}
                    <th>Action</th>
                  </tr>

                  {rates && rates.map((rate, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="currency-container">
                          {/* <span
                            className="iconify"
                            data-icon="fa-solid:toggle-on"
                          ></span> */}
                          <span className="currency">
                            {/* <img src={UnitedState} alt="" /> */}
                            <p>{rate.currency_name} ({rate.currency_symbol})</p>
                          </span>
                        </div>
                      </td>
                      <td>&#8358;{rate.buy_price}</td>
                      {/* <td>&#8358;{rates[0].sell_price}</td> */}

                      <td>
                        <div className="blackmarket-rate-action">
                          <button
                            onClick={() => {
                              setOpenEditBlackMarketRate(true);

                              setBuy(rate.buy_price)
                              setSell(rate.sell_price)
                              setId(rate._id)
                              setCurrencyName(rate.currency_name)
                              setCurrencySymbol(rate.currency_symbol)
                              console.log(rate._id, rate.currency_name, rate.currency_symbol)
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
                              setId(rate._id)
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
                  ))}

                </table>
              }

            </main>
          </div>
        </div>
      </div>
    )
  );

}

export default DashBoard;
