import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Quiz1 from '../components/quiz/quiz1';
// import ReactGA from 'react-ga';

const Hyp1 = () => {
    // useEffect(() => {
    //     ReactGA.pageview('/hyp1')
    // }, [])

    return(
        <div className="content">
            <main className="main">
                <h1>Hypothesis 1</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Quiz1 />
            </main>
        </div>
    )
}

export default Hyp1