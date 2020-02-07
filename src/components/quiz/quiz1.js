import React, { useState, useReducer, Fragment } from 'react';
import Question1 from '../question/question1.js';
import Question from '../question/question.js';
import './quiz.scss';

const Quiz = () => {
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
                        return { ...question, answeredCorrectly: true, currentAnswer: action.currentAnswer  };
                    } else {
                        return question;
                    }
                });
            case 'INCORRECT': 
                return state.map(question => {
                    if (question.id === action.id) {
                        return { ...question, answeredCorrectly: false, currentAnswer: action.currentAnswer };
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
    const [ displayAnswers, setDisplayAnswers ] = useState(false)

    return(
        <div className="quiz-container">
            {displayAnswers?
                <Fragment>
                <div className="questions-container">
                    {state.map((item)=> (
                        <Question1 questions={item} dispatch={dispatch} key={item.id}/>
                    ))}
                </div>
                <p className="quiz-score">
                    Score: {state.reduce((total, current) => {
                        return current.answeredCorrectly? total + 1 : total
                    }, 0)}/{state.length}
                </p>
                </Fragment>
            :
                <div className="questions-container">
                    {state.map((item)=> (
                        <Question questions={item} dispatch={dispatch} key={item.id}/>
                    ))}
                </div>
            }
            <div className="button-container">
                <button className="quiz-button" onClick={() => setDisplayAnswers(true)}>Check Answers</button>
                <button className="quiz-button" onClick={() => setDisplayAnswers(false)}>Retake Test</button>
            </div>
        </div>
    )
}

export default Quiz;