import React from 'react';
import './main.css';
import './style.css';
import Logo from '../components/Images/logo.svg';
import LogoFooter from '../components/Images/footer-logo.svg';
import EyeClosed from '../components/Images/eye-slash.svg';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <section className="login-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <form onSubmit={this.handleSubmit} className="sign-up-form">
            <span>
              <label for="text">Email/Username</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                id=""
              />
            </span>
            <span>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                id=""
              />
              <img src={EyeClosed} alt="" />
            </span>
            <span>
              <a href="#">Forgot Password?</a>
            </span>
            <button type="button" onClick={this.handleEvent}>
              Login
            </button>
          </form>
        </section>

        <footer className="footer-container">
          <main>
            <div className="footer-logo">
              <img src={LogoFooter} alt="Kudi-Logo" />
            </div>
            <ul className="footer-links">
              <li>
                {' '}
                <a href="#">About</a>
              </li>
              <li>
                {' '}
                <a href="#"> Contact</a>
              </li>
            </ul>
            <div className="sm-links">
              <a href="#">
                <span
                  className="iconify"
                  data-icon="akar-icons:twitter-fill"
                ></span>
              </a>
              <a href="#">
                <span className="iconify" data-icon="brandico:facebook"></span>
              </a>
              <a href="#">
                <span
                  className="iconify"
                  data-icon="ant-design:instagram-filled"
                ></span>
              </a>
            </div>
          </main>
          <small>© 2022 Kudi FX • All rights reserved</small>
        </footer>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log('submitting');
    console.log(this.state);
  };
}

export default LoginForm;
