import React, { useState } from 'react';
import QuestionLess from '../components/QuestionLess';

const Admin = () => {
    const [questionLes, setQuestionLes] = useState([])
    const addAnElement = (e) => {
        e.preventDefault()
        setQuestionLes([...questionLes, ''])
    }
    // Состояние для хранения данных из дочерних компонентов
  const [childDataCollection, setChildDataCollection] = useState([]);

  // Функция для обработки данных из дочерних компонентов
  const handleChildData = (data) => {
    setChildDataCollection(prevData => [...prevData, data]);
  };

  // Обработчик нажатия кнопки в родительском компоненте
  const handleButtonClick = () => {
    // Выполняем необходимые действия с данными из всех дочерних компонентов
    console.log('Данные из дочерних компонентов:', childDataCollection);
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
                        <QuestionLess onChildData={handleChildData} />
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