import React from 'react';
import './other-blog.css';
// import blogImage1 from '../images/blog-img2.jpg';
// import blogImage2 from '../images/blog-img3.jpg';
// import blogImage3 from '../images/blog-img4.jpg';

const OtherBlogs = () => {
  const otherBlogData = [
    {
      overviewImg: require('../images/blog-img2.jpg'),
      readTime: '5mins',
      writtenBy: 'Managment',
      blogTitle: 'Where to live in Lagos:5 best places',
      overviewText:
        'It was day 7 of house hunting, Maya was standing on a curb, this was the third time that she had almost gotten hit and each time the bike man followed her exclamations with a barrage of curses. ',
      ReadLink: 'Read more',
    },
    {
      overviewImg: require('../images/blog-img.jpg'),
      readTime: '5mins',
      writtenBy: 'Managment',
      blogTitle: 'Where to live in Lagos:5 best places',
      overviewText:
        'It was day 7 of house hunting, Maya was standing on a curb, this was the third time that she had almost gotten hit and each time the bike man followed her exclamations with a barrage of curses. ',
      ReadLink: 'Read more',
    },
    {
      overviewImg: require('../images/blog-img4.jpg'),
      readTime: '5mins',
      writtenBy: 'Managment',
      blogTitle: 'Where to live in Lagos:5 best places',
      overviewText:
        'It was day 7 of house hunting, Maya was standing on a curb, this was the third time that she had almost gotten hit and each time the bike man followed her exclamations with a barrage of curses. ',
      ReadLink: 'Read more',
    },
    {
      overviewImg: require('../images/blog-img3.jpg'),
      readTime: '5mins',
      writtenBy: 'Managment',
      blogTitle: 'Where to live in Lagos:5 best places',
      overviewText:
        'It was day 7 of house hunting, Maya was standing on a curb, this was the third time that she had almost gotten hit and each time the bike man followed her exclamations with a barrage of curses. ',
      ReadLink: 'Read more',
    },
    {
      overviewImg: require('../images/blog-img2.jpg'),
      readTime: '5mins',
      writtenBy: 'Managment',
      blogTitle: 'Where to live in Lagos:5 best places',
      overviewText:
        'It was day 7 of house hunting, Maya was standing on a curb, this was the third time that she had almost gotten hit and each time the bike man followed her exclamations with a barrage of curses. ',
      ReadLink: 'Read more',
    },
  ];
  return (
    <section class="other-blogs">
      <div className="blog-others">
        {otherBlogData.map((blogSmall, idx) => {
          return (
            <div className="blog-small">
              <img src={`${blogSmall.overviewImg}`} alt="" data-aos="fade-up" />
              <article>
                <small data-aos="fade-up">
                  <p>{blogSmall.readTime}</p>
                  <p>{blogSmall.writtenBy}</p>
                </small>
                <h5 data-aos="fade-up">{blogSmall.blogTitle}</h5>
                <p data-aos="fade-up">{blogSmall.overviewText} </p>
                <a href="#" data-aos="fade-up">
                  <p>{blogSmall.ReadLink}</p>
                  <span
                    class="iconify"
                    data-icon="ant-design:arrow-up-outlined"
                  ></span>
                </a>
              </article>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default OtherBlogs;
