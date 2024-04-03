import React, { useContext } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import QestionItem from '../components/QestionItem';

const Qestions = observer(() => {
    const { test } = useContext(Context)
    return (
        <section className='question'>
            <ul className="question__list">
                {test.tests.map(test =>
                    <QestionItem key={test.id} test={test} />
                )}


            </ul>
        </section>
    );
});

export default Qestions;