import React, { useState, useContext} from 'react';
import {Context} from '../main'
import tick from '../img/tick.svg'
import PassingTest from '../components/PassingTest';
import ResultTest from '../components/ResultTest';

const Test = () => {
    const { test } = useContext(Context)
    console.log(test);
    const questions = [{ id: 1, title: '1.	We  ___ good people. ', answer: ['are', 'be', 'is', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 0 },
    { id: 2, title: '2.__________ two sons. ', answer: ['she have', 'she is', 'she get', 'she has got', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 0 },
    { id: 3, title: '3.Mary _________ like basketball.', answer: ['doesnt', 'not dont', 'do not', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 0 },
    { id: 4, title: '4.They re reading. What __________ doing? ', answer: ['they', ' are they', 'is they', 'they are', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 0 }]
    const [step, setStep] = useState(0)
    const [result, setResult] = useState(0)
    const numTest = questions[step]
    const clickVriant = (i) => {
        // console.log(i, step);
        setStep(step + 1)
        if(numTest.result === i){
            setResult(result+1)
        }       
        console.log(result);
    }
    return (
        <section className='test-page'>
            <div className="test-page__container container-test">
                <ul className="conteiner-test__list">
                    {questions.map(el =>
                        <li key={el.id} className="container-test__item">{
                            step >= el.id ?
                                <img src={tick} alt="tick" />
                                :
                                el.id
                        }</li>
                    )}
                </ul>
                {step !== questions.length ?
                    <PassingTest numTest={numTest} onClick={clickVriant} />
                    :
                    <ResultTest result={result} />
                }


            </div>
            
        </section>
    );
};

export default Test;