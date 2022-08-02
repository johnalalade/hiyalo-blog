import React from 'react';
import './latest-blog-full.css';

import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/first-blog-img.jpg';
import firstMeme from '../images/2nd-blog-meme-1.jpg';

const WhereToLive = () => {
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

          <div className="blog-article">
            <article>
              <p className="article-header">
                Where to live in Lagos: 5 best places.
              </p>
              <p className="article-subheader">Maya's Valuable Lesson</p>
              <p className="article-main article-qoute">
                It was day 7 of house hunting, Maya was standing on a curb, this
                was the third time that she had almost gotten hit and each time
                the bike man followed her exclamations with a barrage of curses.
                Everything here was weird and even now she didn’t know if to
                laugh or get mad at the audacity and the heft of the curses that
                came with the passing motorcyclists on a pedestrian curb. She
                had little understanding of Yoruba but Oloriburuku seemed to be
                the most insulting word she was used to now. She had managed to
                get off the curb and began to cross the road, weaving through
                the traffic of impatient motorcyclists and mad drivers. Her
                friend had said she was looking in the wrong places for great
                housing options, today she was going to be looking in places
                that mattered. He had started calmly in that serenading baritone
                voice,
                <span className="article-qoute">
                  “See here Maya, I am going to be telling you a lot maybe you
                  should get a jotter.”
                </span>{' '}
              </p>
              <p className="article-main">
                There are very few places in Lagos that have great houses, many
                houses in Lagos are beautiful houses without water but with
                prices through the roof, or landowners that are bat-eyed crazy,
                often the best way to get one is by referrals. Approaching
                friends, family or Property tech companies (like Hiyalo) is
                often a great choice for you — Follow the Hiyalo publication to
                learn more:
              </p>
              <p className="article-main">
                However, even then you need to recognise that the area of choice
                is important, which is why I’ll be talking about 5 areas on the
                mainland for people like Maya who work on the island and what
                the pros and cons are.
              </p>
              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
                {/* <p>Sure, get a carpenter, let’s plank your head.</p> */}
              </span>

              <ol class="article-main">
                <li>
                  1. Yaba: If you’re looking to have a fun life in Lagos and
                  don’t mind a little discomfort there’s Yaba with its proximity
                  to the island for those who work on the island but can’t
                  afford the housing prices there. The nightlife however
                  compensates a lot but like any other house in Lagos. It cuts
                  right through your throat! But accessibility is one of the
                  selling points for this area. And just in case Lagos makes you
                  lose your mind there’s a psychiatric hospital nearby.
                </li>
                <li>
                  2. Ikeja: The capital and business hub of Lagos is one of the
                  few places in Lagos which is strategically built, with clean
                  water to say the least. Expensive, yes, I mean what house in
                  Lagos isn’t expensive or overpriced? But at least you’re sure
                  of being in a protected neighbourhood with such great
                  proximity to many key places in Lagos and even an industrial
                  hub within its region. Ikeja city mall has diverse shopping
                  options to help ease the stress when you’re overwhelmed.
                </li>
                <li>
                  3. Surulere: Not exactly the safest of places, however, this
                  area is often referred to as the centre of Lagos, often people
                  joke about how you can get anywhere in Lagos from Surulere. If
                  you’re on a budget but somehow have to be on the island every
                  morning you might want to look for houses around here. With
                  its bubbling activities, you are sure not to experience the
                  real Lagos!
                </li>
                <li>
                  4. Maryland: The debate is that there’s no light in Lagos not
                  in Maryland though, they seem to beat the odds most times. The
                  roads may yet be the closest you get to working roads, an
                  excellent area to consider. Maryland shopping mall allows you
                  to live like a proper Lagosian: grind hard, spend plenty.
                </li>
                <li>
                  5. Festac: Recently, there’s been a huge influx of people to
                  this area, there’s a reason for this. Festac is one of the few
                  places in Lagos which is properly planned and can boast of
                  infrastructure that maybe be absent in several areas in Lagos,
                  unlike other areas that may segregate a class of Nigerians,
                  the rich and poor seem to find affordable housing in the area.
                  And with proximity to big markets like Ojo, you couldn’t ask
                  for a better living experience.
                </li>
              </ol>
              <p className="article-main article-qoute">
                “Comot for road o, e no get brake” screamed another motorcyclist
                jumping her thoughts. “Shey this place na road”, she retorted.
                If only she knew who would take this stress of house hunting off
                her.
              </p>
            </article>
          </div>
        </main>
      </div>
      <BlogNewsletter />
    </div>
  );
};

export default WhereToLive;
