import React from 'react';
import './latest-blog-full.css';

import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/first-blog-img.jpg';
import firstMeme from '../images/1st-blog-meme-1.jpg';
import secondMeme from '../images/1st-blog-meme-2.jpg';
import thirdMeme from '../images/1st-blog-meme-3.jpg';

const BlogFull = () => {
  return (
    <div>
      <div className="blog-view-container">
        <main>
          <div className="blog-img-2">
            <img src={FirstBlogImg} alt="" />
          </div>
          <header>
            <div className="back-btn">
              <button>
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

          <div class="blog-article">
            <article>
              <p class="article-header">
                House hunting in Lagos: A Nigerian's story of struggle
              </p>
              <p class="article-main">
                I did not know which was the worst shock of all, the grin on the
                old man’s face, the proximity of the room’s window to a
                foul-smelling gutter or the price that just left his lips, in
                front of me was the smallest room I had ever seen, and one part
                of the ceiling looked like it would cave in if it rained heavily
                one more night. I had asked for an apartment and even if we were
                over my budget by 60%, I kept getting these shabby prison cells
                as an offer. The old man caught me looking at the ceiling and
                grinned sheepishly.{' '}
                <span className="article-qoute">
                  “Once you pay money now, for your front we go call carpenter
                  make him come fix am”,
                </span>{' '}
                he said in a hoarse voice that sounded almost like a whisper.
              </p>
              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
                <p>Sure, get a carpenter, let’s plank your head.</p>
              </span>
              <p class="article-main">
                I think you would need more than a carpenter, maybe an actual
                house for a start; I thought of Onyinye, a plus-size girl that
                doubled as a close friend. There was no way she could fit
                through that door. There was the sound of water dripping
                somewhere, and suddenly I had a flashback of me standing in my
                aunt's small apartment at Agege, ankle-deep in water after a
                long day at the market; It had been a horrible night of securing
                a leaking water pipe while staving off sleep, never again! His
                red eyes scanned my face waiting for a response, I’m quite sure
                he could not wait to get back to his bottle and game of drafts
                which I had pulled him away from earlier. I knew he could see
                the disgust on my face. I had never been one to hide my
                displeasure even if I tried. This was the fourth house we had
                been to in the last 24 hours, and every time you thought it
                would get better because he named a higher price than the
                previous ones, it only got worse. “Baba all these houses wey you
                dey show me shey na still for that same price? “His smile was
                gone and I knew what would come next was the grumbling; this was
                a constant with Lagos agents, especially after they had failed
                at trying to sell you an aboki kiosk for the price of a mansion.
              </p>
              <span className="blog-meme">
                <img className="" src={secondMeme} alt="" />
                <p>How much does salvation cost again?</p>
              </span>
              <p className="article-main article-qoute">
                “Madam, na the only houses you fit get for that price like this’
                ‘ he said scratching his chin and neck. Which kain house you
                want? I get nice place wey no far from here but na your money go
                talk”. My money was not talking? It was bad enough that I was
                settling for a place far away from my workplace, a decision that
                would cost me my sleep and valuable time in traffic, and now,
                more money? It took another long walk of almost 20 minutes
                before we got to the “house which was not far”.
              </p>

              <p className="article-main">
                As we stepped into the compound, a ball shot past my head
                missing me by an inch. Kids? Could this day get any worse? It
                was a beautiful compound with plenty of space. It was noisy too,
                with barking dogs and yelling kids, a double disaster that I
                certainly did want to be part of. The Old man was soon kicking
                the ball around with the kids. I knew I did not want to stay
                here but if I said the kids were the reason, he would blow off.
                People here always just assume you would love kids like it was a
                virtue expected of everyone. Standing in the room, I knew it
                wasn’t worth the price, but it was the only house where any sane
                person could live. My face must have given me away again because
                next came his hoarse voice, “Madam, be like say na Island you go
                go because house wey you go like no dey this mainland”. He
                walked out, staggering a bit and adjusting his falling trousers.
                Then a middle-aged woman walked in, with her hair bonnet and a
                wrapper tied loosely at her chest. She took one long
                disapproving look at me. I could see her staring at my chest
                probably covering my exposed cleavage with layers of clothing
                and the blood of Jesus, in her mind. This must be the landlady
                he had told me about, he had called her crazy and suggested I be
                careful, almost like he feared her himself. Her response to my
                greeting was a grumble. And when she spoke her voice was as
                unpleasant as her looks. “Are you and your husband getting the
                place together?” I nodded no. She grimaced even more. I had
                heard stories of landlords discriminating against female tenants
                but nothing prepared me for what she said next,
                <span>
                  “Are you sure you will be able to pay the rent on time by
                  yourself?”
                </span>
                I didn’t need to hear more before I brushed past her and walked
                out — why do all the houses in Lagos have such narrow doors? I
                imagined her shocked face as I walked away, so I swayed my hips
                to enrage her.
              </p>
              <span className="blog-meme">
                <img className="" src={thirdMeme} alt="" />
                <p>
                  It’s not by renting a house, do you have mansions in heaven?
                </p>
              </span>
              <p className="article-main">
                I made sure to give the old man a dirty eye on my way out. He
                came running after me asking lots of questions and begging that
                I slow down a bit. It must have been a funny sight for anyone to
                watch this small man scramble after me as I took long strides.
                Luckily for me, there was a bike man (motorcyclist) just outside
                the house. I was speaking to him when I heard a growl. The
                landlady had let out one of the dogs. A huge dog charging toward
                me, spittle from its mouth flying everywhere. I swiftly mounted
                the bike as I screamed loudly at the bike man to move. We had
                gone a good distance from the house when I turned back and saw
                the most hilarious sight ever. The old man climbing a ladder
                leaning against the house wall as he screamed—it was a shrill
                feminine yell, and the dog tugging at his trouser as he held
                onto the ladder with both of his hands. Lagos was a mad place
                like Onyinye had warned 6 months ago when I first moved here,
                but this?! This was nothing like I had imagined. I believe many
                of us have been in Maya’s situation and have similar stories, we
                would like to hear your stories too.
              </p>
            </article>
          </div>
        </main>
      </div>
      <BlogNewsletter/>
    </div>
  );
};

export default BlogFull;
