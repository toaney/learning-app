import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Quiz2 from '../components/quiz/quiz2';

const Hyp2 = () => {

    return(
        <div className="content-container">
            <div className="content">
                <div className="content-main">
                    <iframe className="content-video" width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="content-description">
                        <h1>Hypothesis 2</h1>
                        <p>Instant feedback on questions will result in less engagement with the video, but greater engagement with the questions/content.</p>
                        <h4 className="content-description-features">Features:</h4>
                        <ul className="content-description-features-list">
                            <li>score tally is visible at all times</li>
                            <li>question results are displayed immediately after an answer is selected</li>
                            <li>only "Incorrect" is displayed for wrong answers to encourage users to continue analyzing the question</li>
                        </ul>
                    </div>
                </div>
                <div className="content-sidebar">
                    <Quiz2 />
                </div>
            </div>
        </div>
    )
}

export default Hyp2