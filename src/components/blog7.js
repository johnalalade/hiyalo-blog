import React from 'react';
import { useNavigate } from 'react-router-dom';
import './latest-blog-full.css';
import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/5th-blog-img.jpeg';
import firstMeme from '../images/7th-blog-meme-1.png';
import secondMeme from '../images/7th-blog-meme-2.jpeg';
// import forthMeme from '../images/5th-blog-meme-4.jpeg';
// import fifthMeme from '../images/5th-blog-meme-5.jpeg';

const HeIsMarried= () => {
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
                If he does any of these three things he’s married.
              </p>
              <p className="article-subheader">Maya's Valuable Lesson</p>
              <p className="article-main">
                Bode held my hand and helped me to my feet, now standing by his
                side, I realised how tall he actually was. Every passing second
                with him came with some more exciting revelations that made me
                feel like I was living some kind of dream and anytime soon I
                would be rudely awakened. I definitely was soon rudely awakened.
                She came with her full hair flying around her. Bode appeared to
                freeze for a moment, looking around before he put on a broad
                smile and outstretched his hands to pick her up.
              </p>
              <p className="article-main">
                “Daddy!”. Daddy? How was this little Indian kid his child?
                “Where’s your mom?” He asked still looking around. “You have a
                kid?” I asked him in bewilderment. He didn’t reply to me, his
                eyes fixated on someone coming from the distance. She had a
                scarf wrapped around her head like a Muslim woman, she looked
                Indian too, I could see her resemblance to the young girl. And
                when she spoke, her English seemed impeccable. She seemed really
                expensive and way older than Bode. “Hi, honey. We were done
                shopping and I decided to come here and pick you up. Did you get
                my message on Instagram?” Honey? Bode was married and I didn’t
                know. But I could swear that like 10 minutes ago, he was
                flirting with me.
              </p>

              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
                <p>
                  Aren’t we all higher animals? Lagos men just bring the high.
                </p>
              </span>

              <p className="article-main">
                Beatrice had told me several stories of how all the fine wealthy
                men in Lagos were married, and that at some point you just had
                to decide if you could leave with the guilt and go ahead with
                the relationship — this had been her defence for being with her
                current boyfriend. Bode turned to me and said, “Maya, meet my
                fiancee”. Okay, that was the explanation for the lack of a ring
                on his finger. “Asalamalakum”, she said turning to me with the
                cutest smile. Bode still wouldn’t look at me, all the lust had
                left his eyes. He seemed to be clenching his jaw. I was amused.
                I recalled Beatrice’s three-point proof to show that a man is
                married. She had sat across the room, sipping on her drink.
              </p>

              <span className="blog-meme">
                <img className="" src={secondMeme} alt="" />
                <p>Played like the keys of a piano.</p>
              </span>

              <p className="article-main">
                I could hear her voice now, laughing hysterically as I told her
                my story. Her three-point had been glaring now that I thought of
                it.
              </p>

              <p className="article-main">
                <b>1.</b> If he is in a serious relationship, then be rest
                assured that he would definitely not give you his social media
                handle. Bode had said to me that he wasn’t on most socials and
                he often only used LinkedIn to reach out to his clients and
                maybe a bit of Tiktok for fun, but just now his wife had asked
                him if he didn’t get her message on Instagram.
              </p>
              <p className="article-main">
                <b>2. </b> He won’t let go of his phone. I had a habit of
                scrolling through people’s galleries and just when he had shown
                me a meme on his phone to emphasize a point of his and I had
                swiped, he suddenly pulled his phone away. Making a joke about
                me running away with his phone, I thought it was weird at the
                time but he had backed it up with his irresistible laughter.
              </p>
              <p className="article-main">
                <b>3. </b> He didn’t give me his number. He did ask for my
                number like I had wanted him to. But It just dawned on me that
                he didn’t even ask for mine. And I wish he had, I wanted to send
                him a very long message, a really wordy one too.
              </p>

              <p className="article-main">
                He said an awkward goodbye, patting me on my back like he hadn't
                been rubbing my feet like 20 minutes ago and telling me about
                how he had grown up in a staunch Christian home. Suddenly he had
                a wife named Amina.
              </p>

              <p className="article-main">
                My phone buzzing in my bag jolted me back from my thoughts. It
                was Beatrice. She sounded very excited. It was some good news.
                “Hey Girl! Hiyalo launches on the 31st of July! Can’t wait for
                us to finally get our place together!” She went on babbling
                about all the things we could do to make our house heaven.
              </p>
              <p className="article-main">
                Another 30 minutes of excited rambling before I cut the call and
                made a promise to call her back with the most exciting gist. His
                message came in, “I’m so sorry Maya I was going to tell you
                eventually. We have a connection, you won’t let it just die like
                that, would you?” I let out the biggest cackle. Wasn’t God
                wonderful? He sent me an SMS. Time to send back a strongly
                worded reply.
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
export default HeIsMarried;
