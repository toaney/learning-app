import React, { useState, useEffect, useReducer, Fragment } from 'react';
import Question2 from '../question/question2.js'

const Quiz2 = () => {
    const initialState = [
        {
            id: '3e1',
            question: "Question 1 sample text?",
            answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
            correctAnswer: "answer 1",
            currentAnswer: null,
            answeredCorrectly: false
        }, 
        {
            id: '3e2',
            question: "Question 2 sample text?",
            answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
            correctAnswer: "answer 2",
            currentAnswer: null,
            answeredCorrectly: true
        }, 
        {
            id: '3e3',
            question: "Question 3 sample text?",
            answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
            correctAnswer: "answer 3",
            currentAnswer: null,
            answeredCorrectly: false
        },
        {
            id: '3e4',
            question: "Question 4 sample text?",
            answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
            correctAnswer: "answer 1",
            currentAnswer: null,
            answeredCorrectly: false
        }, 
        {
            id: '3e5',
            question: "Question 5 sample text?",
            answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
            correctAnswer: "answer 2",
            currentAnswer: null,
            answeredCorrectly: true
        }, 
        {
            id: '3e6',
            question: "Question 6 sample text?",
            answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
            correctAnswer: "answer 3",
            currentAnswer: null,
            answeredCorrectly: false
        }
    ]

    const quizReducer = (state, action) => {
        switch (action.type) {
            case 'CORRECT': 
                return state.map(question => {
                    if (question.id === action.id) {
                        return { ...question, answeredCorrectly: true, currentAnswer: action.answer  };
                    } else {
                        return question;
                    }
                });
            case 'INCORRECT': 
                return state.map(question => {
                    if (question.id === action.id) {
                        return { ...question, answeredCorrectly: false, currentAnswer: action.answer };
                    } else {
                        return question;
                    }
                });
            default: 
                return state;
        }
    }

    const [ state, dispatch ] = useReducer(
        quizReducer,
        initialState
    )

    return(
        <Fragment>
            <p>
                correct: {state.reduce((total, current) => {
                    return current.answeredCorrectly? total + 1 : total
                }, 0)}/{state.length}
            </p>
            {state.map((item)=> (
                <Question2 questions={item} dispatch={dispatch} key={item.id}/>
            ))}
        </Fragment>
    )
}

export default Quiz2;