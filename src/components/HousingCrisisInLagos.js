import React from 'react';
import './latest-blog-full.css';

import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/4th-blog-img.jpeg';
import firstMeme from '../images/4th-blog-meme-1.png';

const HousingCrisis = () => {
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
                How does that saying go? The most important things in life are
                free? Maya wasn’t having that today. She gave her friend a stern
                look after the words left her mouth, Beatrice was giggling. And
                the only funny thing in the room was her account balance
                compared to the estimated cost she had made to get an apartment.
                She had spent the past hour lamenting about her woes. She was on
                the verge of losing it and even as her friend offered her moral
                support, saying all the positive things you would hear in a TED
                talk, she felt mocked. 
              </p>
            <p className='article-main'>
            The housing crisis in Nigeria would drive
                anyone crazy and today when she wasn't wallowing in self-pity as
                usual. She was puzzled as to why it was that way. Beatrice
                wasn’t helping very much, she is the kind of friend that makes
                dark humor while the doctor placed you in ICU. She picked up her
                phone, today she was going to do some internet surfing and get
                her answers. 
            </p>
            <p className='article-main'>
            She did get her answers, five reasons for the crime
                scene that was Nigeria’s housing space.
            </p>
              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
                <p>
                  Join the waitlist at the end of the article to find that
                  perfect house!
                </p>
              </span>
              <p className="article-main">
                At the top of the magazine was the name of the agency, the one
                whose office she currently sat in. The houses were mesmerising
                and she was relieved for a second that finally here she was at
                the right place and about to find the right apartment. He was
                standing in front of his office, The consulting agent, whose
                plush reception area they had all been waiting in. His bulging
                tummy seemed too much of a burden, but Maya was willing to trust
                this man with her housing troubles regardless. He beckoned to
                Maya. As she closed the door behind her. They came to mind. The
                five factors to consider before taking an apartment.
              </p>
              <span className="blog-meme">
                <img className="" src={firstMeme} alt="" />
              </span>
              <ol class="article-main">
                <li>
                  <b>Cost of building materials.</b> According to a CHAF
                  analysis, construction costs and infrastructure costs made up
                  a total of 62% of housing costs. Even using the cheapest
                  materials does not make up for these crippling expenses. Costs
                  like this ensure that it is almost impossible to build
                  affordable housing. Very many of these housing materials are
                  imported, and as the naira continues in a free fall, this
                  means that there is an ever-increasing cost when it comes to
                  making quality, durable and affordable housing.
                </li>
                <li>
                  <b>Demand & Supply.</b> Basic economics teaches us that when
                  scarcity exists for a particular product that has a high
                  demand, it is only natural for the prices to skyrocket as the
                  suppliers manipulate the situation to maximize profit. As more
                  people move to Lagos due to work shortages in other parts of
                  the country, there exists a raging demand which can hardly be
                  met. There are yet no innovative or lasting solutions found
                  yet to meet the housing shortage or even the job shortages
                  causing this migration to urban areas.
                </li>
                <li>
                  <b>Middlemen. </b> Contractors take as much as a 35% cut when
                  it comes to house development, this is not the only middleman
                  in the game, there is also the agent, who for renters, is
                  their biggest nightmare. There are instances where the
                  processing fee for an agent costs as much as the yearly rent.
                  At the end of the day for those who wish to buy, build or rent
                  a house all of these middlemen contribute to driving up the
                  cost.
                </li>
                <li>
                  <b>A Poor Populace.</b> All of the above factors contribute to
                  driving up house prices, but this particular factor
                  contributes to the quality of houses that are built. Although
                  Lagos has a fairly large middle class, however, the cost of
                  living is so high that very many do not have much to spare on
                  renting or buying a house. For this reason, creating
                  affordable housing means a drastic cut-down. Contractors are
                  forced to use building materials of lower quality and optimize
                  space as the cost per square meter does not match what the
                  average Lagosian can afford. What we have at the end of the
                  day are falling buildings, cracked houses, leaking roofs, and
                  kiosk-like houses.
                </li>
                <li>
                  <b>Lack of Intervention.</b>For some reason, very many
                  luxurious apartments exist in Lagos that have no occupants,
                  just as well as many ‘affordable’ houses are mere shackles
                  used as tools for extortion. This is a tell-tale of how the
                  government remains negligent in enforcing housing policies and
                  providing solutions to one of Lagos’s biggest problems. Not
                  direct causation but correlated nonetheless are the bad roads
                  and terrible traffic which causes Lagosians to seek houses
                  within proximity of their workplace thus driving up demand.
                  Interventions toward these direct causes and correlated events
                  remain largely unseen.
                </li>
              </ol>
              <p className="article-main">
              Maya was mesmerized by how much she had learned on the internet. Beatrice was snoring loudly, awake or not, she always had to be a disturbance. She thought of Hiyalo and how its payment solution would provide immense helped solve all the problems.
              </p>
              <p className='article-main'>
              Hiyalo is a property tech company that allows a flexible payment option for those who can foot housing costs upfront. Maya thought of how innovative a solution it was, the middlemen wouldn’t go away so she had to pay that and if she waited too long to save up the balance, then the house was gone. She had reckoned that she was part of the poor populace — who could not save up enough in time to get the juiciest houses —but with Hiyalo, she could get her dream house and pay conveniently.
              </p>
            </article>
          </div>
        </main>
      </div>
      <BlogNewsletter />
    </div>
  );
};
export default HousingCrisis;
