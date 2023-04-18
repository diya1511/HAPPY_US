import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import './styles.css';

const MeditationDetail = () => {
  return (
    <div className="container">
      <button className="arrowBtn">
        <AiOutlineArrowLeft className="arrow"></AiOutlineArrowLeft>
      </button>

      <div className="sliderImg"></div>

      <div className="mainHeading">
        <h1>Meditation for beginners</h1>
      </div>

      <div className="mainPara">
        <p>
          Meditation is something anyone can do, anytime, anywhere — even
          someplace loud. It’s easy to learn and involves some pretty basic
          techniques. Like anything new, the more we meditate, the more
          comfortable we’ll get spending time with our mind. It doesn’t take
          long to feel the benefits of a regular meditation practice. Research
          shows that Headspace can reduce stress in 10 days. And thousands of
          studies have shown mindfulness and meditation can positively impact
          mental and physical health. So, no matter why we want to start
          meditating — to feel less stressed, get better sleep, be more focused,
          or improve relationships — every meditation is one step closer to
          building healthier habits for a happier mind. We’ll get started
          together. Then by the end of this article, we’ll be more familiar with
          how to meditate and be ready to practice on our own.
        </p>
      </div>

      <div className="subHeading">
        <h3>What is Meditation?</h3>
      </div>

      <div className="subPara">
        <p>
          Meditation is the practice of intentionally spending time with our
          mind. We take time out of our busy days to sit, breathe, and try to
          remain focused on our breath. Doing this helps us become more aware of
          our thoughts, act more compassionately toward ourselves and others,
          and connect with the present moment. People might associate meditation
          with sitting in silence and stopping all of our thoughts and feelings
          to become calm. But that’s not really how the mind works, and neither
          does meditation. Rather than trying to stop our thoughts, we practice
          letting thoughts come and go. How do we do this? Let’s think of
          thoughts like traffic in the mind, always zipping by. Sometimes we see
          a flashy car and chase after it, kind of like when we get caught up in
          analyzing or judging a thought or when we get lost in a daydream.
          Other times, we see a roadblock ahead and try to resist it, like we do
          when we think or feel something uncomfortable. Meditation trains us to
          notice the traffic without chasing or fighting it — just to let the
          thought come. Then gently shift our focus away from it and back onto
          our breath — to let the thought go. The more we practice, the more we
          can see thoughts for what they are: just thoughts. It’ll get easier to
          let them go and “get out of our heads” to be more engaged in what
          we’re doing, whether we’re spending time with family, making time for
          self-care, or working against a deadline.
        </p>
      </div>
    </div>
  );
};

export default MeditationDetail;
