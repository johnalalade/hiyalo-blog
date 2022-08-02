import React from 'react';
import './latest-blog-full.css';

import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/5th-blog-img.jpeg';
import firstMeme from '../images/5th-blog-meme-1.jpeg';
import secondMeme from '../images/5th-blog-meme-2.jpeg';
import thirdMeme from '../images/5th-blog-meme-3.jpeg';
import forthMeme from '../images/5th-blog-meme-4.jpeg';
import fifthMeme from '../images/5th-blog-meme-5.jpeg';
const NollywoodLying = () => {
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
                Five factors to consider before taking an apartment.
              </p>
              <p className="article-subheader">Maya's Valuable Lesson</p>
              <p className="article-main">
                I was sitting on a public bus today with the smell of faeces
                assaulting my nostrils. The young man beside me kept engaging
                the driver in a heated argument about his choice of route. He
                seemed very angry and the louder he yelled the more pungent the
                smell, he reminded me of hulk only that he wasn’t green all
                over, just making me feel green in the face — I was nauseous.
              </p>
              <p className="article-main">
                I remembered an article I had read that morning, something about
                different mouth odours and what they said about your body by
                Healthline — if I remember clearly, a mouth that smelt that way
                meant he was full of shit that he had to let out. He was very
                persistent about vocalizing his displeasure and I could only
                fervently pray that I could change my seat soon.
              </p>
              <p className="article-main">
                The chance came as the older woman behind me alighted and
                decided to do the tough walk past the standstill traffic
                situation. It was late night and even if we had been in a spot
                for over an hour, I wasn’t going to take the risk of getting
                nabbed tonight by walking.
              </p>
              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
                <p>The city that never sleeps. No rest for the hustlers?</p>
              </span>
              <p className="article-main">
                There were so many people on the road and it was way past 10 pm.
                My new seat partner, the elderly man in traditional attire,
                smelt refreshingly nice and I was amused by the level of
                diversity you could experience inside a small tight bus like
                ours. Lagos was filled with all sorts of persons and that number
                was on the rise. Although there is a dispute on what the
                population of Lagos is, the World population review places that
                number at approximately 15 million people. I recalled growing up
                in Ibadan and just thinking of how lucky my cousins were to live
                in Lagos. In the Nollywood movies, I had watched as a little
                girl, they all seemed to live in duplexes and had big cars with
                gardeners and cooks.
              </p>
              <p className="article-main">
                When Maya first moved to Lagos, the first shock she received was
                from her cousins, holidaying at their house was not as she
                imagined. The mosquitoes were vicious, when it rained it smelt
                so bad outside, and the house was built not as she had imagined,
                there were no aesthetics or space with eye-catching colours. She
                had moved here years later and it remained the same, maybe even
                worsening as the years went by.
              </p>
              <p className="article-main">
                Her phone’s backlight came on, distracting her thoughts, there
                was a new publication from Hiyalo in her mail, her favourite
                property tech company. Getting notifications like this from them
                was what held her sanity together, they were really her only
                hope left with the housing madness. Signing up on their waitlist
                was her best decision so far and as she tapped the power button
                to reserve her battery life, she knew victory was hers once they
                launched.
              </p>
              <span className="blog-meme">
                <img className="" src={secondMeme} alt="" />
                <p>I don suffer no be small, na him make I come this Lagos</p>
              </span>
              <p class="article-main">
                The Nollywood movies she had watched were so convincing, the
                ghetto boy who moved from the city to Lagos and came back within
                a year with a big car and good looks. And the ladies with their
                rich husbands who they met in Lagos and thus saved from penury —
                just thinking of it now she could see how misogynistic it was
                for the women to only find a financial breakthrough by marrying
                up.
              </p>

              <p className="article-main">
                Sadly, even that bit wasn’t true and there were hardly any rich
                husbands here. Just struggling young men with audacity willing
                to swindle you out of your own penny and a handful of
                middle-class married men with more audacity. She sighed heavily
                as the bus entered another pothole, while it wound its way
                between inner street roads to beat the highway traffic.
              </p>

              <span className="blog-meme">
                <img className="" src={thirdMeme} alt="" />
                <p>Carry me dey go, Lagos carry me dey go, my Canaan land.</p>
              </span>

              <p className="article-main">
                Why did they keep coming anyways all of these people? Every now
                and then there was a truckload of refugees arriving in the city,
                and literally, they were. She had seen some of them herself,
                raggedy-looking people shipped in from the north, all clumped
                into the open back of a truck.
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
              <p className='article-main'>
                A Nollywood movie was playing on the huge screen as I stood in
                front of one of the shops buying myself groceries. It was one of
                those comedy movies but the sight of the legendary Mama-G meant
                there was wickedness to come. How ironic? Wasn’t life as a
                Lagosian a true tragi-comedy?
              </p>

              <span className="blog-meme">
                <img className="" src={fifthMeme} alt="" />
                <p>WHop on the next bus and follow the publication at Hiyalo!</p>
              </span>
            </article>
          </div>
        </main>
      </div>
      <BlogNewsletter />
    </div>
  );
};
export default NollywoodLying;
