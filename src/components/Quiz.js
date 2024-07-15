import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData.json';
import '../style/Quiz.css';

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const categoryData = quizData.categories.find(cat => cat.name === category);
    if (categoryData) {
      setQuestions(categoryData.questions);
    }
  }, [category]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (questions[currentQuestion].answer === selectedAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    navigate('/results', { state: { score: score, total: questions.length } });
    return null;
  }

  return (
    <div className="quiz">
      <h2>{category}</h2>
      {questions.length > 0 && (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className={`option ${selectedAnswer === option ? 'selected' : ''}`}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
