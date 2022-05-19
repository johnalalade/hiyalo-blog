import React, { useState } from 'react';
import './main.css';
import './style.css';
import axios from "axios";


const EditBlackMarketRate = ({ closeEditBlackMarketRate, id, buy, sell, currency_name, currency_symbol, cleanUp, page }) => {

    const [bp, setBp] = useState(buy)
    const [sp, setSp] = useState(sell)
    const [cur, setCur] = useState(currency_name)

    const edit = () => {
        axios.put(`https://kudifx.herokuapp.com/api/v1/update-price/${id}`, { currency_name: cur, currency_symbol, buy_price: bp, sell_price: sp, id })
            .then(res => {
                console.log(res.data)
                cleanUp()
                closeEditBlackMarketRate(false)
            })
            .catch(err => {
                console.log({ err })
            })
    }

    return (
        <div className="modal-container">
            <section className="new-rate-modal">
                <div className="new-rate-header">
                    <h5>Edit Current Rate </h5>
                    <button className="close-modal-btn" onClick={() => closeEditBlackMarketRate(false)}>
                        <span className="iconify" data-icon="clarity:window-close-line"></span>
                    </button>

                </div>
                <form action="">
                    <div className="currency">
                        <label for="text">Currency</label>
                        <input type="text" placeholder="select currency" name="" id="" defaultValue={currency_name} onChange={(ev) => {
                            setCur(ev.target.value)
                        }} />
                    </div>
                    <div className="buy-sell-price">
                        <span>
                            <label for="price">Buy Price</label>
                            <input type="price" defaultValue={buy} onChange={(ev) => {
                                setBp(ev.target.value)
                            }} />
                        </span>
                        {page === "Black" &&
                            <span>
                                <label for="selling-price">Sell Price</label>
                                <input type="selling-price" defaultValue={sell} onChange={(ev) => {
                                    setSp(ev.target.value)
                                }} />
                            </span>
                        }

                    </div>
                </form>
                <div className="create-rate-btn">
                    <button onClick={edit}>Save Changes</button>
                </div>
            </section>

        </div>
    );


}

export default EditBlackMarketRate;

