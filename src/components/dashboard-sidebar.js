import React, { useState, useEffect } from "react";

// import LogoutModal from "./logout-modal";
// import ReactDom from 'react-dom';
import './main.css';
import './style.css';
import LogoFooter from '../components/Images/footer-logo.svg';
import axios from "axios";


function SideBar(props) {
    const [server, setServer] = useState("External");

    const activate = (server) => {
        axios.post('https://kudifx.herokuapp.com/api/v1/edit-server/', { id: "629ffcc1e7cb8140bd3640a0", server })
        .then(res => {
            console.log(res)
        })
    }

    const run = async () => {
        try {
          
    
          const getServer = await axios.get("https://kudifx.herokuapp.com/api/v1/get-server")
    
          setServer(getServer.data)
          console.log({ server: getServer.data })
    
        //   setServer("External")

        } catch (error) {
          return error;
        }
      };

      useEffect(() => {
        run()
      }, []);
      
    return (
        <div className="side-bar">
            <div className="dashboard-logo">
                <img src={LogoFooter} alt="" />
            </div>
            <ul className="navbar">

                <li>
                    <a href="#">

                        <label>
                            <input type="radio" onClick={(ev) => {
                                setServer("Own")
                                activate(ev.target.value)
                            }} value="Own" name="Activated" checked={server === "Own"? true : false} /> <p>Activate</p>
                        </label>
                        {/* <p>Activate</p></input> */}

                        <label>
                            <input type="radio" onClick={(ev) => {
                                setServer("External")
                                activate(ev.target.value)
                            }} value="External" name="Activated" checked={server === "External"? true : false} /> <p>Deactivate</p>
                        </label>
                        {/* <p>Deactivate</p></input> */}
                    </a>
                </li>

                <li>
                    <a href="#" className={props.page === "Black" ? "active-link" : "null"} onClick={() => { props.pagenation("Black") }}>
                        <span className="iconify" data-icon="icon-park-outline:stock-market"></span>
                        <p>Black Market Rate</p>
                    </a>
                </li>

                <li>
                    <a href="#" className={props.page === "ATM" ? "active-link" : "null"} onClick={() => { props.pagenation("ATM") }}>
                        <span className="iconify" data-icon="fluent:money-24-regular"></span>
                        <p>ATM Rates</p>
                    </a>
                </li>

                <li>
                    <a href="#" className={props.page === "CBN" ? "active-link" : "null"} onClick={() => { props.pagenation("CBN") }}>
                        <span className="iconify" data-icon="fluent:building-bank-16-regular"></span>
                        <p>CBN Rates</p>
                    </a>
                </li>

                <li>
                    <a href="#" className={props.page === "Crypto" ? "active-link" : "null"} onClick={() => { props.pagenation("Crypto") }}>
                        <span className="iconify" data-icon="bx:bitcoin"></span>
                        <p>Cryptocurrency</p>
                    </a>
                </li>

            </ul>

            <div className="log-out">
                <a href="#" className='open-logout-modal' onClick={() => props.logout()}>
                    <span className="iconify" data-icon="bx:log-out"></span>
                    <p>Log Out</p>
                </a>
                {/* {isOpen && <LogoutModal setIsClose={setIsOpen} />} */}
            </div>

        </div>
    );
}

export default SideBar;