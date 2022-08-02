import React from 'react';
import {useNavigate} from 'react-router-dom';
import './latest-blog-full.css';
import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/5th-blog-img.jpeg';
import firstMeme from '../images/6th-blog-meme-1.jpeg';
import secondMeme from '../images/6th-blog-meme-2.jpeg';
// import thirdMeme from '../images/5th-blog-meme-3.jpeg';
import forthMeme from '../images/5th-blog-meme-4.jpeg';
// import fifthMeme from '../images/5th-blog-meme-5.jpeg';

const StopMovingToLagos = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="blog-view-container">
        <main>
          <div className="blog-img-2">
            <img src={FirstBlogImg} alt="" />
          </div>
          <header>
            <div className="back-btn">
            <button onClick={() => navigate(-1)}>
                <span class="iconify" data-icon="bx:arrow-back"></span>
              </button>
              <p>Blogs | The MVP Launch</p>
            </div>
            <div className="share-btn">
              <button>
                <p>Copy Link</p>
                <span class="iconify" data-icon="entypo:link"></span>
              </button>
              <button>
                <span
                  class="iconify"
                  data-icon="akar-icons:twitter-fill"
                ></span>
              </button>
              <button>
                <span class="iconify" data-icon="bxl:facebook"></span>
              </button>
              <button>
                <span class="iconify" data-icon="bxl:instagram-alt"></span>
              </button>
            </div>
          </header>

          <div className="blog-article">
            <article>
              <p className="article-header">
                Five factors to consider before taking an apartment.
              </p>
              <p className="article-subheader">Maya's Valuable Lesson</p>
              <p className="article-main">
                The general consensus has been that moving to Lagos will change
                things for the better. It was like all your dreams came through
                the minute your feet stepped onto the ground of this city. Today
                I was at the beach looking at the waves and watching the number
                of people sprawled all over this stretch of white sand. I liked
                the fact that this part of the city existed, that I could get
                such a relaxed vibe from thousand of Lagosians in the same spot.
                But I knew that like me, many of them were feeling rushed as the
                minutes went by.
              </p>
              <p className="article-main">
                It really didn’t ever go away completely. Forgotten for a moment
                at most but it always came back. This rushed feeling was the
                same feeling that had made me yank myself from the safety of my
                parent’s house to move here and find my purpose. There were so
                many of us, and that was the problem.{' '}
                <span className="blog-qoute">
                  “Hi, You seem to be solving the mystery of the universe with
                  that focused face of yours staring into nothing. Mind if I
                  helped you figure it out?.”
                </span>
              </p>
              <p className="article-main">
                A fine black man was standing over me holding two drinks in his
                hand. He had a very nice smile. and had the body that should
                belong on a model. I was blushing just watching him stand there
                with his head tilted and mouth in a huge smile. “Sure.” He
                stretched out his hand handing me a drink —They looked so strong
                with all those popping veins. I began to wonder how long I had
                been lost in my thoughts, enough for him to notice and get us
                drinks.
              </p>
              <p className="article-main">
                <span className="blog-qoute">
                  “Well. It’s nothing. Lagos just has me in my feelings on most
                  days.”
                </span>
                I said making space for him to sit.
              </p>
              <p className="article-main">
                <span>“Why is that?” </span> He said, watching with amusement in
                his bright white eyes. Those words struck a nerve. And off I
                went. Stories after stories of what had transpired in these past
                days of my house hunting. His giggles and laughter kept me going
                and soon I was exaggerating events to make him smile some more.
              </p>
              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
                <p>Does it get better at any point?</p>
              </span>
              <p className="article-main">
                <span>
                  “Why though? Why are more people coming here and at what point
                  will they stop?”
                </span>
                I asked, taking a sip of my drink and a break from a long rant.
              </p>
              <p className="article-main">
                <span className="blog-qoute">
                  “It is pretty obvious don’t you think? Actually, I have three
                  reasons I came up with. I call them the three G’s. Gigantic
                  opportunities. Good LIfe. Great Infrastructure “
                </span>
                He said pulling up three fingers. There was no wedding band on
                them which was great news — at least I thought so.
              </p>

              <span className="blog-meme">
                <img className="" src={secondMeme} alt="" />
                <p>Urban Migration cannot be wished away</p>
              </span>
              <p class="article-main">
                His explanation was simple. As a doctor who had worked in
                different places at different points in his life, he had seen
                how much better a person’s life could get just because of these
                G’s.
              </p>

              <p className="article-main">
                <b>Gigantic opportunities </b> meant better pay and access to a
                level of financial breakthrough you couldn’t have anywhere else.
                A relative in Lagos who was paid well was the reason he had seen
                many of his patients live another day.
              </p>
              <p className="article-main">
                <b>Good Life </b> meant a happier life in general. Memories are everything for many people what meaning does life have for a person if it isn’t spent having tons of good things that only a city could provide. Running water. Recreational centres. Stable Electricity. You name it.
              </p>
              <p className="article-main">
                <b>Great infrastructure </b> was the determining factor for many of his patients, some of who had died because they couldn’t get access to a type of treatment that was only available in developed cities that had the infrastructure for these things.
              </p>

              <p className="article-main">
              The Biggest problem however was wherever people went in search of a better life meant that the increasing population needed more resources: housing, water, healthcare etc. If these resources weren’t being developed fast enough then you have LAGOS.
              </p>
              <p className="article-main">
                <b>Expensive </b> because too many people are trying to buy the few resources available.things.
              </p>
              <p className="article-main">
                <b>Stressful </b> because there was hardly any infrastructure to ensure ease of the life of the average Nigerian.
              </p>
              <p className="article-main">
                <b>Unsafe </b> because too many people who hope to get paying jobs here hardly get any and result in other means to fund that life.
              </p>

              <p className="article-main">
                But why wasn’t she leaving too? Ibadan was a saner clime but
                here she was, munching gala and sipping her water. The answer
                really was simple, she thought, maybe Lagos really didn’t give
                you the cars in a year but it was the only place that could get
                you closer to one. Maybe there weren’t huge mansions waiting to
                be occupied, but living in a tiny cubicle here in the city was a
                beacon of hope for many.
              </p>

              <p className="article-main">
                A City of Excellence? Not really, it was a city of dying dreams
                hoping to come alive.
              </p>

              <span className="blog-meme">
                <img className="" src={forthMeme} alt="" />
                <p>What is my crime really? Existing in this accursed city?</p>
              </span>

              <p className="article-main">
                <span>
                  “Oga, you just wan use mouth odour kill person for here, make
                  you face that side, no dey shout for my face”,
                </span>
                a young lady who had occupied the seat Maya vacated grumbled.
                Maya almost burst out laughing, as the provoking mouth went into
                a barrage of curses leaning further into the young woman’s face.
                It was like a scene out of a Nollywood movie. “Even person wey
                done die no dey smell like this, nawa”, the young lady retorted
                pulling away and holding onto her nose. There was collective
                laughter on the bus. The hulk of a man turned back with his red
                eyes, again opening his provoking mouth to give everyone a piece
                of his mind. I was seated just right behind him, directly in the
                line of fire, and when the bus lunged forward, making him hit
                his head, everyone laughed again, provoking him further. I knew
                it was now or never.
              </p>

              <p className="article-main">
                I was too glad to alight and walk the remaining distance home.
                Everything might suck but when it stinks, that’s where I draw
                the line. Thankfully, the estate gate wasn’t locked yet and few
                retail shops were.
              </p>
              <p className="article-main">
                A Nollywood movie was playing on the huge screen as I stood in
                front of one of the shops buying myself groceries. It was one of
                those comedy movies but the sight of the legendary Mama-G meant
                there was wickedness to come. How ironic? Wasn’t life as a
                Lagosian a true tragi-comedy?
              </p>

              {/* <span className="blog-meme">
                <img className="" src={fifthMeme} alt="" />
                <p>
                  WHop on the next bus and follow the publication at Hiyalo!
                </p>
              </span> */}
            </article>
          </div>
        </main>
      </div>
      <BlogNewsletter />
    </div>
  );
};
export default StopMovingToLagos;
