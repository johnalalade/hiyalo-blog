import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './BlogNewsletter.css';

const BlogNewsletter = () => {
  const url = 'https://hiyalo-backend.herokuapp.com/waitlist/add-waitlist';
  const [userEmail, Data] = useState('');

  const submit = (event) => {
    event.preventDefault();
    Axios.post(url, {
      email: userEmail,
    }).then((res) => {
      console.log(res);
    });
  };
  const handle = (event) => {
    Data(event.target.value);
    console.log(event.target.value);
  };

  return (
    <section className="blog-newsletter-container">
      <main>
        <header>
          <h3 data-aos="fade-up">Subscribe To Hiyalo Newsletter</h3>
          <p data-aos="fade-up">
            For market updates and the latest news from Hiyalo, subscribe to our
            newsletter.
          </p>
        </header>
        <form action="" onSubmit={(event) => submit(event)} className="newsletter-form">
          <input
            onChange={(event) => handle(event)}
            value={userEmail.email}
            type="text"
            placeholder="Enter email address"
            name=""
            id=""
            data-aos="fade-up"
          />
          <button type='submit' data-aos="fade-up">
            <p>subscribe</p>
            <span
              className="iconify"
              data-icon="ant-design:arrow-up-outlined"
            ></span>
          </button>
        </form>
      </main>
    </section>
  );
};

export default BlogNewsletter;
