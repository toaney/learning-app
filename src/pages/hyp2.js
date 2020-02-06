import React, { useEffect } from 'react';
import Quiz2 from '../components/quiz/quiz2';
// import ReactGA from 'react-ga';

const Hyp2 = () => {
    // useEffect(() => {
    //     ReactGA.pageview('/hyp1')
    // }, [])

    return(
        <div className="content">
            <main className="main">
                <h1>Hypothesis 2</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Quiz2 />
            </main>
        </div>
    )
}

export default Hyp2