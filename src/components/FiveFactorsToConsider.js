import React from 'react';
import './latest-blog-full.css';

import BlogNewsletter from './BlogNewsletter';
import FirstBlogImg from '../images/first-blog-img.jpg';
import firstMeme from '../images/3rd-blog-meme-1.jpeg';

const FiveFactoresToConsider = () => {
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
                Today, Maya was sitting in a plush office wondering if she
                wasn’t about to get swindled, this housing agency was different,
                the office was built aesthetically and there was a air
                conditioner blasting in the corne. The elderly woman who was the
                receptionist didn’t seem to mind her at all. She was playing
                what sounded like a skit and letting out a wheeze, and weird
                sounds that sounded like she was choking — have you ever noticed
                how terribly some people’s laughs could sound? The woman by her
                side placed a magazine in front of her and started saying
                something in a hoarse voice, all she could make out were the
                words
                <span className="article-qoute">“Omo mi”</span> before she got
                lost in a barrage of words that we were Yoruba — it’s shocking
                how Lagos despite being a blended city of different people from
                different cultures, everyone just expected you to understand
                Yoruba. Well, she didn’t.
                <span className="article-qoute">“Ma, mi o gbo”,</span> Maya
                replied, repeating the one phrase that Becky had said would
                communicate her lack of understanding. The woman sighed, then
                made pointing gestures managing to utter the words,{' '}
                <span className="article-qoute">“ which one fine pass?”</span>{' '}
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
                  <b>1. Location.</b> This was necessary, Maya’s least favourite time
                  of the day was in the morning when she had to get out of bed
                  at 4 am struggling with other commuters for limited buses. The
                  nearest market where you could get anything tangible from her
                  house was a bus trip away, basically reasonable was out of
                  reach. She asked her friend who she stayed with and how she
                  managed at all. The only response she gave was laughter and a
                  wave of the hand.
                </li>
                <li>
                  <b>2. Neighbourhood.</b> This particular one she couldn’t compromise
                  on and the the major reason was a funny event. She had been at
                  her aunt’s when they heard sporadic shoots, soon they were all
                  on the ground. Hands over their heads. Her aunt became
                  dramatic, she prayed, cried and even threw up, even with her
                  naked fear at the time she couldn’t help but have a good laugh
                  watching her aunt act that way. No more neighbourhoods with
                  gang fights that she told herself and the man as she gave him
                  a description of what she was looking for.
                </li>
                <li>
                  <b>3. Building plan. </b> Nothing was worse than the small windows and
                  doors that plagued the Lagos ‘kiosks’ that her agents had
                  shown her. Bathrooms look like they were added as a design.
                  Kitchens were just narrow cubicles that reminded you of
                  offices from the 80s, you could touch both walls if you
                  outstretched your arms. You would think they had used a
                  6-year-old’s drawing as a housing plan.
                </li>
                <li>
                  <b>4. Building amenities.</b> You would think this means houses with
                  running water until you realise it’s not just that, it’s also
                  housing with proper drainage systems like sinks that work,
                  plumbing that doesn’t leak and most importantly an intact roof
                  to keep out the rains in the rainy season. Be sure to look for
                  cracks and leakages, especially in the ceiling, walls and
                  pipes.
                </li>
                <li>
                  <b>5. People.</b>This was a subjective one for Maya, a factor
                  she would always consider. People in Lagos are mad and since
                  her last encounter in the precious episode with the landlady
                  who chased her out with a dog. She was very certain that she
                  wouldn’t ever take such a risk again. So, no crazy landladies,
                  landlords or neighbours.
                </li>
              </ol>
              <p className="article-main">
                It was a productive meeting, productive because this was the
                first time she had seen apartments that surpassed her
                expectations. However, her woes remained, she still had to pay
                upfront, an enormous amount she could not afford without
                installments. She was sad now, and thinking, a solution ran
                through her mind. Hiyalo was buzzing answer in her head, she had
                seen a waitlist somewhere — here actually.
              </p>
            </article>
          </div>
        </main>
      </div>
      <BlogNewsletter />
    </div>
  );
};
export default FiveFactoresToConsider;
