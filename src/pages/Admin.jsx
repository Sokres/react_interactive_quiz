import React, { useState } from 'react';
import QuestionLess from '../components/QuestionLess';

const Admin = () => {
    const [questionLes, setQuestionLes] = useState([])
    const addAnElement = (e) => {
        e.preventDefault()
        setQuestionLes([...questionLes, ''])
    }
    const [dataFromChild, setDataFromChild] = useState([]);

    // Функция обратного вызова, которая будет вызываться из дочернего компонента
    const handleDataFromChild = (data) => {
      setDataFromChild(prevData => [...prevData, data]);
    };

    // Обработчик нажатия кнопки в родительском компоненте
    const handleButtonClick = () => {
      // Действия с данными из дочернего компонента
      console.log('Данные из дочернего компонента:', dataFromChild);
    };
    
    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        // Действия по отправке формы, например, отправка на сервер или обработка локально
        console.log('Отправлено: ', { answer: inputValues, result: parseInt(inputRadioValues) });
        // Сбрасываем значения всех input полей после отправки формы
    };

    return (
        <form >
            {
                questionLes.map((el, i) => (
                    <div key={i}>
                        <QuestionLess onDataFromChild={handleDataFromChild} />
                    </div>
                )
                )
            }
            <button onClick={addAnElement} >Добавить вопрос</button>
            <button type='button' onClick={handleButtonClick}>Получить данные</button>
        </form>
    );
};

export default Admin;