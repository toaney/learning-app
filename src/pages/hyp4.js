import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Quiz4 from '../components/quiz/quiz4';

const Hyp4 = () => {
    const [ sidebarClass, setSidebarClass ] = useState("content-sidebar disabled")

    useEffect(()=> {
        const timer = setTimeout(() => {
            setSidebarClass("content-sidebar")
          }, 20000);
          return () => clearTimeout(timer);
    }, [])

    return(
        <div className="content-container">
            <div className="content">
                <div className="content-main">
                    <iframe className="content-video" width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="content-description">
                        <h1>Hypothesis 4</h1>
                        <p>Disabling questions for a period of time (20 seconds) will result in greater video engagement as users will not be able to skip the video and engage in questions immediately.</p>
                        <h4 className="content-description-features">Features:</h4>
                        <ul className="content-description-features-list">
                            <li>video remains in view at all times</li>
                            <li>questions are not immediately active</li>
                            <li>questions presented in a scrollable sidebar</li>
                            <li>correct answers are displayed after user clicks "Check Answers"</li>
                        </ul>
                    </div>
                </div>
                <div className={sidebarClass}>
                    <Quiz4 />
                </div>
            </div>
        </div>
    )
}

export default Hyp4