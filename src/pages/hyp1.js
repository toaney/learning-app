import React from 'react';
import Quiz1 from '../components/quiz/quiz1';

const Hyp1 = () => {
    return(
        <div className="content-container">
            <div className="content">
                <div className="content-main">
                    <iframe className="content-video" width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng?enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="hyp1iFrame"></iframe>
                    <div className="content-description">
                        <h1>Hypothesis 1</h1>
                        <p>Keeping the video visible at all times will encourage greater video engagement.</p>
                        <h4 className="content-description-features">Features:</h4>
                        <ul className="content-description-features-list">
                            <li>video remains in view at all times</li>
                            <li>questions presented in a scrollable sidebar</li>
                            <li>correct answers are displayed after user clicks "Check Answers"</li>
                            <li>"Retake Test" button encourages users to improve their score</li>
                        </ul>
                    </div>
                </div>
                <div className="content-sidebar">
                    <Quiz1 />
                </div>
            </div>
        </div>
    )
}

export default Hyp1