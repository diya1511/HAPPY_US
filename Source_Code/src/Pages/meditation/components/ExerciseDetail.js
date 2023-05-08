import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './MeditationDetail.css';
import { Link } from 'react-router-dom';

const ExerciseDetail = () => {
  return (
    <div className="container-meditation">
      <div className="contents">
        <Link className="arrowBtn" to="/exercisestart">
          <AiOutlineArrowLeft className="arrow"></AiOutlineArrowLeft>
        </Link>
        <div className="med-details-Feed">
          <div className="sliderImg"></div>

          <div className="mainHeading">
            <h1 className="main-head-text">Beginner Exercises</h1>
          </div>

          <div className="mainPara">
            <p>
              Exercise is an essential aspect of maintaining good health, and
              incorporating it into your daily routine can help you stay fit and
              active. Whether you're a seasoned athlete or just starting out,
              there are many different types of exercises you can do to stay in
              shape, from cardio to strength training and everything in between.
              The key is finding an exercise routine that works for you and that
              you enjoy, so that you'll be motivated to stick with it over the
              long term. One of the biggest benefits of exercise is its impact
              on your mental health. Studies have shown that regular exercise
              can help reduce symptoms of anxiety and depression, improve mood,
              and boost self-esteem. Exercise also releases endorphins, which
              are natural chemicals in the body that help to reduce pain and
              increase feelings of happiness and well-being. So, not only does
              exercise make you physically healthier, but it can also have a
              positive impact on your mental and emotional well-being.
            </p>
          </div>

          <div className="subHeading">
            <h3>What is Exercise?</h3>
          </div>

          <div className="subPara">
            <p>
              When it comes to choosing an exercise routine, it's important to
              consider your personal fitness goals. Are you looking to build
              strength, lose weight, or simply improve your overall fitness
              level? Different types of exercises will help you achieve
              different goals, so it's important to find a routine that aligns
              with what you're looking to achieve. And remember, it's never too
              late to start exercising – even if you've been inactive for a
              while, incorporating exercise into your daily routine can have a
              significant impact on your health and well-being. Exercising is
              not just about building muscles and improving your physique. It is
              also about taking care of your mental health. When you exercise,
              your brain releases endorphins, which are feel-good chemicals that
              can help reduce stress and anxiety. Exercise can also help you
              sleep better, which is important for both your physical and mental
              health. Regular exercise has been shown to reduce symptoms of
              depression and anxiety and improve overall mood. If you're new to
              exercise, it can be overwhelming to know where to start. The most
              important thing is to find something you enjoy and start slowly.
              You don't need to go to a gym or buy expensive equipment to
              exercise. Simple activities like walking, jogging, or cycling can
              be effective for improving your health. You can also try
              bodyweight exercises like push-ups, squats, and lunges, which can
              be done at home without any equipment. It's important to set
              realistic goals when it comes to exercise. Don't expect to see
              results overnight, and don't push yourself too hard too soon.
              Start with small goals and gradually increase the intensity and
              duration of your workouts. It's also important to listen to your
              body and take rest days when you need them. Overexertion can lead
              to injury and burnout, so it's important to find a balance between
              pushing yourself and taking care of yourself. Finally, it's
              important to remember that exercise is just one part of a healthy
              lifestyle. In addition to regular physical activity, you should
              also focus on eating a healthy diet, getting enough sleep, and
              managing stress. By taking care of your body and mind, you can
              live a happier, healthier life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
