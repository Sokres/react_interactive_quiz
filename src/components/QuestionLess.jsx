import { useEffect, useState } from "react";

const QuestionLess = ({onDataFromChild}) => {
    const [inputValues, setInputValues] = useState(['']);
    const [inputRadioValues, setInputRadioValues] = useState(0);
    // Функция для добавления нового input поля
    const addInputField = () => {
        if (inputValues.length <= 3) {
            setInputValues([...inputValues, '']);

        }
    };
    const handleChangeRadio = (e) => {
        setInputRadioValues(e.target.value);
    };
    // Обработчик изменения значения ввода для конкретного input поля
    const handleChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    };
    // useEffect(() => {
    //     onDataFromChild(inputValues);
    // }, [inputValues]);
    onDataFromChild(inputValues)
    console.log(inputValues);
    return (
        <div>
            <label>
                Название вопроса
                <input type="text" name="input1" />
            </label>
            {inputValues.map((value, index) => (
                <div key={index}>
                    <label>
                        Введите текст:
                        {/* Управляемый input */}
                        <input
                            type="text"
                            value={value}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </label>
                    <input value={index} onChange={handleChangeRadio} type="radio" name="radio" />
                </div>
            ))}
            <button type="button" onClick={addInputField}>Добавить Ответ</button>
        </div>
    );
}

export default QuestionLess;