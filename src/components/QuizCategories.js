import React from 'react';
import { Link } from 'react-router-dom';
import quizData from '../data/quizData.json';
import '../style/QuizCategories.css';

const QuizCategories = () => {
  return (
    <>
      <div className="content-container">

        <div className="content-details">
          <h2 className="content-heading">Review Your Recorded Responses</h2>
          <p className="content-paragraph">Your responses are automatically recorded, so you can watch them after your interview and know exactly how you came across.</p>
          <button className="content-button">Get Started</button>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Images/OIP.jpeg`} alt="Sample" className="content-image" />
      </div>
      <div className="content-container">

        <div className="content-details">
          <h2 className="content-heading">Take Mock Interviews On Your Own</h2>
          <p className="content-paragraph">Take unlimited interviews and master your skills from anywhere. No awkward meetups required</p>
           
        </div>
        <img src={`${process.env.PUBLIC_URL}/Images/OIP.jpeg`} alt="Sample" className="content-image" />
      </div>
      <div className="content-container">

        <div className="content-details">
          <h2 className="content-heading">Practice for the Pressure</h2>
          <p className="content-paragraph"> </p>
          <button className="content-button">Begin</button>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Images/images.jpeg`} alt="Sample" className="content-image" />
      </div>
      <div className="content-container">

        <div className="content-details">
          <h2 className="content-heading">Review Your Recorded Responses</h2>
          <p className="content-paragraph">Your responses are automatically recorded, so you can watch them after your interview and know exactly how you came across.</p>
          <button className="content-button">Get Started</button>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Images/OIP.jpeg`} alt="Sample" className="content-image" />
      </div>


      <div className="quiz-categories">
        <h1 className="header"> Industries!!</h1>
        <div className="category-grid">
          {quizData.categories.map((category, index) => (
            <Link to={`/quiz/${category.name}`} key={index} className="category-link">
              <div className="category-box">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-name">{category.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizCategories;
