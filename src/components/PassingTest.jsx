import React from 'react';

const PassingTest = ({numTest, onClick}) => {
    return (
        <div className="container-test_box-question">
        <p className="container-test__question">{numTest.title}</p>
        <div className="container-test__list-question">
            {numTest.answer.map((el, i) =>
                <button key={el} onClick={() => onClick(i)} className="btn container-test__item-question">{el}</button>
            )}
        </div>
    </div>
    );
};

export default PassingTest;