import React from "react";
import './BlogNewsletter.css';
import './footer.css';
// import footerImg from '../images/footer-bg.jpg'

const MainFooter = () => {

    return(
        <footer>
            <section class="footer-newsletter-container">
                <header>
                    <h3>
                        Subscribe To Hiyalo Newsletter
                    </h3>
                    <p>
                        For market updates and the latest news from Hiyalo, subscribe to our newsletter.
                    </p>
                </header>
                <form action="" class="newsletter-form">
                    <input type="text" placeholder="Enter email address" name="" id=""/>
                    <button>
                        <p>subscribe</p>
                        <span class="iconify" data-icon="ant-design:arrow-up-outlined"></span>
                    </button>
                </form>
            </section>
            <section class="footer-quicklinks-container">
                <div class="quick-links">
                    <p>Company</p>
                    <ul class="footer-nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="quick-links">
                    <p>Terms Of Service</p>
                    <ul class="footer-nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </section>
            <section className="footer-sm-container">
                <main>
                    <p>Follow us</p>
                    <ul class="footer-sm">
                        <li>
                            <a href="#">
                                <span className="iconify" data-icon="akar-icons:twitter-fill"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="iconify" data-icon="bxl:facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="iconify" data-icon="bxl:instagram-alt"></span>
                            </a>
                        </li>
                    </ul>
                    </main>
                <small>
                    <p>© 2022 Hiyalo. All rights reserved.</p>
                </small>
            </section>

        </footer>         
    )

}

export default MainFooter;