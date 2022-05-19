import React from "react";

// import LogoutModal from "./logout-modal";
// import ReactDom from 'react-dom';
import './main.css';
import './style.css';
import LogoFooter from '../components/Images/footer-logo.svg';


function SideBar(props) {
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="side-bar">
        <div className="dashboard-logo">
            <img src={LogoFooter} alt=""/>
        </div>
        <ul className="navbar">
            <li>
                <a href="#" className={props.page === "Black" ?"active-link" : "null"} onClick={() => {props.pagenation("Black")}}>
                    <span className="iconify" data-icon="icon-park-outline:stock-market"></span>
                    <p>Black Market Rate</p>
                </a>
            </li>
            <li>
                <a href="#" className={props.page === "ATM" ?"active-link" : "null"} onClick={() => {props.pagenation("ATM")}}>
                    <span className="iconify" data-icon="fluent:money-24-regular"></span>
                    <p>ATM Rates</p>
                </a>
            </li>
            <li>
                <a href="#" className={props.page === "CBN" ?"active-link" : "null"} onClick={() => {props.pagenation("CBN")}}>
                    <span className="iconify" data-icon="fluent:building-bank-16-regular"></span>
                    <p>CBN Rates</p>
                </a>
            </li>
            <li>
                <a href="#" className={props.page === "Crypto" ?"active-link" : "null"} onClick={() => {props.pagenation("Crypto")}}>
                    <span className="iconify" data-icon="bx:bitcoin"></span>
                    <p>Cryptocurrency</p>
                </a>
            </li>
        </ul>
        <div className="log-out">
            <a href="#" className='open-logout-modal' onClick={( )=> props.logout()}>
                <span className="iconify" data-icon="bx:log-out"></span>
                <p>Log Out</p>
            </a>    
            {/* {isOpen && <LogoutModal setIsClose={setIsOpen} />} */}
        </div>

    </div>
    );
}

export default SideBar;