import React, { useReducer, Fragment } from 'react';
import Question2 from '../question/question2.js';
import './quiz.scss';

const Quiz2 = () => {
    const initialState = [
        {
            id: '3e1',
            question: "Where do you find a prefix in a word?",
            answers: ["The beginning", "The middle", "The end", "The definition"], 
            correctAnswer: "The beginning",
            currentAnswer: null,
            answeredCorrectly: false
        }, 
        {
            id: '3e2',
            question: 'Which prefix DOES NOT mean "not"?',
            answers: ["non", "semi", "un", "ir"], 
            correctAnswer: "semi",
            currentAnswer: null,
            answeredCorrectly: false
        }, 
        {
            id: '3e3',
            question: 'What is the meaning of the prefix "anti"?',
            answers: ["before", "against", "too much", "cure"], 
            correctAnswer: "against",
            currentAnswer: null,
            answeredCorrectly: false
        },
        {
            id: '3e4',
            question: 'What is the meaning of the prefix "micro"?',
            answers: ["cook", "large", "small", "before"], 
            correctAnswer: "small",
            currentAnswer: null,
            answeredCorrectly: false
        }, 
        {
            id: '3e5',
            question: "Where do most prefixes originate from?",
            answers: ["Arabic & Amharic", "French & English", "Greek & Latin", "Czech & Dutch"], 
            correctAnswer: "Greek & Latin",
            currentAnswer: null,
            answeredCorrectly: false
        }, 
        {
            id: '3e6',
            question: "Which is NOT a prefix mentioned in the video?",
            answers: ["inter", "macro", "ex", "tele"], 
            correctAnswer: "ex",
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
            <div className="quiz-score-container">
                <p className="quiz-score">
                    Score: {state.reduce((total, current) => {
                        return current.answeredCorrectly? total + 1 : total
                    }, 0)}/{state.length}
                </p>
            </div>
            <div className="questions-container">
                {state.map((item)=> (
                    <Question2 questions={item} dispatch={dispatch} key={item.id}/>
                ))}
            </div>
        </Fragment>
    )
}

export default Quiz2;