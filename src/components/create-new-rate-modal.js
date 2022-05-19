import axios from 'axios';
import React, { useState } from 'react';
import currencies from './currencies';
import './main.css';
import './style.css';


const CreateNewRateModal = ({ closeCreateNewModal, page, cleanUp, atm }) => {
    const [name, setName] = useState("")
    const [symbol, setSymbol] = useState("")
    const [buy, setBuy] = useState("0")
    const [sell, setSell] = useState("0")
    const [curren, setCurren] = useState("")
    const [sym, setSym] = useState("AED")

    const create = () => {

        axios.post("https://kudifx.herokuapp.com/api/v1/create-price", { currency_name: (page === "Black" ? curren : name), currency_symbol: (page === "Black" ? sym : symbol), buy_price: buy, sell_price: sell, atm: atm, currency_image: "https://www.google.com" })
            .then(res => {
                console.log(res.data)
                cleanUp()
                closeCreateNewModal(false)
            })
            .catch(err => {
                console.log({
                    error: err
                })
            })
    }

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
                    <br />
                    <div className="buy-sell-price">
                        <span>
                            <label for="text">Currency</label>

                            {page === "ATM" && <input type="text" placeholder="currency" name="" value={name} onChange={(ev) => {
                                setName(ev.target.value)
                            }} id="" />}

                            {page === "Black" && <select value={curren} onChange={(ev) => {
                                setCurren(ev.target.value)
                                setSym(currencies.filter(c => c.name === ev.target.value)[0].cc)
                            }} >
                                {currencies.map((cu, ix) => (
                                    <option key={ix}>{cu.name}</option>
                                ))}
                            </select> }
                        </span>

                        <span>
                            <label for="price">Symbol</label>
                            {page === "Black" && <input type="price" value={sym} /> }

                            {page === "ATM" && <input type="price" value={symbol}
                                onChange={(ev) => {
                                    setSymbol(ev.target.value)
                                }} />}
                        </span>
                    </div>

                    <div className="buy-sell-price">
                        <span>
                            <label for="price">Buy Price</label>
                            <input type="price" value={buy} onChange={(ev) => {
                                setBuy(ev.target.value)
                            }} />
                        </span>

                        {page === "Black" && <span>
                            <label for="selling-price">Sell Price</label>
                            <input type="selling-price" value={sell} onChange={(ev) => {
                                setSell(ev.target.value)
                            }} />
                        </span>
                        }

                    </div>
                </form>
                <div className="create-rate-btn">
                    <button onClick={() => {
                        create()
                    }}>Create Rate</button>
                </div>
            </section>
        </div>
    );
};

export default CreateNewRateModal;