import React, { useState } from "react";

const QuestionLess = ({ onChildData }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0);

  const addAnswer = () => {
    if (answers.length <= 3) {
      setAnswers([...answers, '']);
    }
  };

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleRadioChange = (event) => {
    setSelectedAnswerIndex(Number(event.target.value));
  };

  const handleNextQuestionClick = (event) => {
    event.preventDefault();
    onChildData({ question, answers, selectedAnswerIndex });
  };

  return (
    <div>
      <label>
        Название вопроса
        <input 
          type="text" 
          value={question} 
          onChange={(event) => setQuestion(event.target.value)} 
          name="questionInput" 
        />
      </label>
      {answers.map((value, index) => (
        <div key={index}>
          <label>
            Введите текст:
            <input
              type="text"
              value={value}
              onChange={(event) => handleAnswerChange(index, event)}
            />
          </label>
          <input 
            type="radio" 
            value={index}
            onChange={handleRadioChange} 
            name="answerRadio" 
          />
        </div>
      ))}
      <button type="button" onClick={addAnswer}>Добавить Ответ</button>
      <button type="button" onClick={handleNextQuestionClick}>Следующий вопрос</button>
    </div>
  );
}

export default QuestionLess;