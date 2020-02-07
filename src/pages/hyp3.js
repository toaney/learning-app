import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Quiz3 from '../components/quiz/quiz3';

const Hyp3 = () => {

    return(
        <div className="content-container">
            <div className="content-header">
            </div>
            <div className="content">
                <div className="content-centered">
                    <div className="content-description">
                        <h1>Hypothesis 3</h1>
                        <p>Placing questions below the video out of sight will result in greater engagement with the video.</p>
                        <h4 className="content-description-features">Features:</h4>
                        <ul className="content-description-features-list">
                            <li>page loads with questions out of sight</li>
                            <li>correct answers are displayed after user clicks "Check Answers"</li>
                            <li>"Retake Test" button encourages users to improve their score</li>
                        </ul>
                    </div>
                    <iframe className="content-video" width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>Review</h3>
                    <Quiz3 />
                </div>
            </div>
        </div>
    )
}

export default Hyp3