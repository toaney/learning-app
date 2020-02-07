import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.pageview('/home')

const Home = () => {
    return(
        <div className="content-container">
            <div className="content">
                <div className="content-centered">
                    <div className="content-description">
                        <h1>eSpark Code Challenge</h1>
                        <p>Welcome to the eSpark Code Challenge.</p>
                        <p>Use the navigation bar above to explore different UI configurations intended to encourage different user behavior. See below for an overview of the different hypotheses and their features.</p>
                        <p>This project was built using React Hooks and records metrics using Google Analytics and Google Tag Manager.</p>

                        <div className="hypotheses-container">
                            <h3>Hypothesis 1</h3>
                            <p>Keeping the video visible at all times will encourage greater video engagement.</p>
                            <h5 className="content-description-features">Features:</h5>
                            <ul className="content-description-features-list">
                                <li>video remains in view at all times</li>
                                <li>questions presented in a scrollable sidebar</li>
                                <li>correct answers are displayed after user clicks "Check Answers"</li>
                                <li>"Retake Test" button encourages users to improve their score</li>
                            </ul>

                            <h3>Hypothesis 2</h3>
                            <p>Instant feedback on questions will result in less engagement with the video, but greater engagement with the questions/content.</p>
                            <h5 className="content-description-features">Features:</h5>
                            <ul className="content-description-features-list">
                                <li>score tally is visible at all times</li>
                                <li>question results are displayed immediately after an answer is selected</li>
                                <li>only "Incorrect" is displayed for wrong answers to encourage users to continue analyzing the question</li>
                            </ul>

                            <h3>Hypothesis 3</h3>
                            <p>Placing questions below the video out of sight will result in greater engagement with the video.</p>
                            <h5 className="content-description-features">Features:</h5>
                            <ul className="content-description-features-list">
                                <li>page loads with questions out of sight</li>
                                <li>correct answers are displayed after user clicks "Check Answers"</li>
                                <li>"Retake Test" button encourages users to improve their score</li>
                            </ul>

                            <h3>Hypothesis 4</h3>
                            <p>Disabling questions for a period of time (20 seconds) will result in greater video engagement as users will not be able to skip the video and engage in questions immediately.</p>
                            <h5 className="content-description-features">Features:</h5>
                            <ul className="content-description-features-list">
                                <li>video remains in view at all times</li>
                                <li>questions are not immediately active</li>
                                <li>questions presented in a scrollable sidebar</li>
                                <li>correct answers are displayed after user clicks "Check Answers"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home