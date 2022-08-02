import React from 'react';
import './latest-blog.css';
import FirstBlogImg from '../images/first-blog-img.jpg' 

const FirstBlog = () => {
  return (
    <main className="first-blog">
      <div className="blog-img">
        <img src={FirstBlogImg} alt="" data-aos="fade-up" />
      </div>
      <div className="post-overview">
        <small data-aos="fade-up">
          <p>12mins Read</p>
          <p>By Management</p>
        </small>

        <article data-aos="fade-up">
          <h4>The Hiyalo MVP Launch</h4>
          <p className="second" data-aos="fade-up">
            House hunting in Lagos: A Nigerian’s story of struggle
          </p>
          <p data-aos="fade-up">
          I did not know which was the worst shock of all, the grin on the old man’s face, the proximity of the room’s window to a foul-smelling gutter or the price that just left his lips, in front of me was the smallest room I had ever seen, and one part of the ceiling looked like it would cave in if it rained heavily one more night...
          </p>
        </article>
        <button className="read-more-btn" data-aos="fade-up">
          <p>Continue Reading </p>
          <span className="iconify" data-icon="ant-design:arrow-up-outlined"></span>
        </button>
      </div>
    </main>
  );
};

export default FirstBlog;
