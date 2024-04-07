import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._tests = [
            {
                id: 1, title: 'По Английскому', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.	We  ___ good people. ', answer: ['are', 'be', 'is', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 0 },
                    { title: '2.__________ two sons. ', answer: ['she have', 'she is', 'she get', 'she has got', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 3 },
                    { title: '3.Mary _________ like basketball.', answer: ['doesnt', 'not dont', 'do not', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 0 },
                    { title: '4.They re reading. What __________ doing? ', answer: ['they', ' are they', 'is they', 'they are', 'Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда'], result: 1 },]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
            {
                id: 2, title: 'По математике', description:'Описание теста нужно добавить в создание', test: [
                    { title: '1.  2 + 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '2.  4 - 2', answer: ['2', '9', '1', '4'], result: 0 },
                    { title: '3.  2 * 2', answer: ['3', '1', '10', '4'], result: 3 },
                    { title: '4.  6 / 2', answer: ['3', '1', '10', '4'], result: 0 },
                ]
            },
        ]
        makeAutoObservable(this)
    }
    setTest(tests){
        this._tests = tests;
    }
    get tests(){
        return this._tests
    }

}