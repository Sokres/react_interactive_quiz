import React from 'react';

const ResultTest = ({result}) => {
    return (
        <div className="container-test_box-question">
        <p className="container-test__question">Поздравляю вы прошли тест</p>
        <div className="container-test__list-question">
            {result}
        </div>
    </div>
    );
};

export default ResultTest;