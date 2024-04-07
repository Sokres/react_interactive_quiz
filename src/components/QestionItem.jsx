import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEST_ROUTE } from './AppRouter';

const QestionItem = ({test}) => {
    const navigate = useNavigate();
    return (
        <li className="question__item item-test">
            <h2 className="item-test__title">{test.title}</h2>
            <p className="item-test__test">{test.description}</p>
            <button onClick={() =>navigate('test/' + test.id)} className="item-test__btn btn">Пройти</button>
        </li>
    );
};

export default QestionItem;