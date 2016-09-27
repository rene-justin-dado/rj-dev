import React from 'react'
import {Link} from 'react-router'

export default React.createClass ({
  render () {
    return (
      <div className="cultural-blogs">
        <Link className="cultural-blog-post-link" to="">
          <h1>C1 - Cultural Reflection</h1>
        </Link>
        <div className="blog-post">
          <h2>What's your take on the DBC/EDA experience?</h2>
          <p className="blog-post-content">To sum it up very simply, it seems to be a very community-centric type of system, not unlike a good (non-toxic) gaming community. Everyone will have their own skills and experiences to bring to the table and their own goals and motivations to work towards. However, I get the sense that, at least from what I got from my own cohort so far, we're all in it for the same reason at the end of the day. We're here to learn and we can lean on each other when it comes down to building our skills.</p>
        </div>
        <div className="blog-post">
          <h2>What are your impressions?</h2>
          <p className="blog-post-content">I'm in love with the system already. It actually hits very close to home, I think. As a gamer, having been part of several gaming communities, I've drawn a few comparisons between EDA and the communities I've experienced. While the goal in gaming is mainly to have fun (unless you're <em>that</em> type of person... XD), part of the experience is learning the rules of a game, testing out new things and developing skills that are useful within the game world. EDA, I feel, seems to build a community where fun, experimentation and skill development are simply applied to the real world, rather than a virtual one.</p>
        </div>
        <div className="blog-post">
          <h2>How do you see yourself engaging with this type of culture?</h2>
          <p className="blog-post-content">Very strongly. Quite happily. Being an introvert is a struggle no matter what community/culture you engage with, but <em>everyone</em> needs other people; cooperation is the entire basis for our species' rise to prominence on this planet. And as I mentioned, I've already noted some similarities with communities I engage with, so the adjustment should be minimal.</p>
        </div>
        <div className="blog-post">
          <h2>Have your expectations of EDA changed? If so, how?</h2>
          <p className="blog-post-content">No. I knew from the start that the point was to shake up the way education is delivered. Ever since I got to engage with my cohort, any trepidation I might have had was overshadowed by the excitement about all the possibilities this type of engagement would have.</p>
        </div>
        <div className="blog-post">
          <h2>Are you excited to participate in this kind of learning environment? Does it make you nervous?</h2>
          <p className="blog-post-content">Absolutely ecstatic! EDA has opened up a new playground for me. I realise now that I have access to resources and training opportunities, accessible <em>at will</em> from a global network of information. And there are people out there, even beyond EDA who are happy and willing to lend a hand. It also doesn't hurt that my cohort has been colossaly amazing. NIKAU!!!</p>
        </div>
      </div>
    )
  }
})
