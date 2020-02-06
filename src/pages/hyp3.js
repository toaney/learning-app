import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Quiz3 from '../components/quiz/quiz3';
// import ReactGA from 'react-ga';

const Hyp3 = () => {
    // useEffect(() => {
    //     ReactGA.pageview('/hyp1')
    // }, [])

    return(
        <div className="content">
            <main className="main">
                <h1>Hypothesis 3</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Quiz3 />
            </main>
        </div>
    )
}

export default Hyp3