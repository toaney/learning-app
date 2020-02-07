import React, { useState, useEffect, Fragment} from 'react';
import "./question.scss";

const Question3 = ({dispatch, questions}) => {
    const [ choice1, setChoice1 ] = useState(questions.answers[0])
    const [ choice2, setChoice2 ] = useState(questions.answers[1])
    const [ choice3, setChoice3 ] = useState(questions.answers[2])
    const [ choice4, setChoice4 ] = useState(questions.answers[3])
    const [ selected, setSelected ] = useState("")
    
    useEffect(() => {
        setSelected(questions.currentAnswer)
    })

    const handleClick = (e) => {
        let userAnswer = e.target.value
        // update local state for selected radio button
        setSelected(userAnswer)

        // dispatch user action
        if(userAnswer === questions.correctAnswer){
            dispatch({
                type: 'CORRECT',
                id: questions.id,
                currentAnswer: userAnswer,
                answeredCorrectly: true
            })
        } else {
            dispatch({
                type: 'INCORRECT',
                id: questions.id,
                currentAnswer: userAnswer,
                answeredCorrectly: false
            })
        }
    }

    return(
        <Fragment>
            <label>{questions.question}</label>
            <p className="answer-choice">A. <input type="radio" id={`${questions.id}${choice1}`} name={questions.id} checked={selected === choice1} value={choice1} onClick={(e) => handleClick(e)} /><label for={`${questions.id}${choice1}`} className="answer-label">{choice1}</label></p>
            <p className="answer-choice">B. <input type="radio" id={`${questions.id}${choice2}`} name={questions.id} checked={selected === choice2} value={choice2} onClick={(e) => handleClick(e)} /><label for={`${questions.id}${choice2}`} className="answer-label">{choice2}</label></p>
            <p className="answer-choice">C. <input type="radio" id={`${questions.id}${choice3}`} name={questions.id} checked={selected === choice3} value={choice3} onClick={(e) => handleClick(e)} /><label for={`${questions.id}${choice3}`} className="answer-label">{choice3}</label></p>
            <p className="answer-choice">D. <input type="radio" id={`${questions.id}${choice4}`} name={questions.id} checked={selected === choice4} value={choice4} onClick={(e) => handleClick(e)} /><label for={`${questions.id}${choice4}`} className="answer-label">{choice4}</label></p>
            {questions.currentAnswer === questions.correctAnswer?
                <p className="answer-correct">Correct!</p>
            :
                <p className="answer-incorrect">{`Incorrect. The correct answer is: ${questions.correctAnswer}`}</p>
            }
        </Fragment>
    )
}

export default Question3