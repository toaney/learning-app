import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Quiz from '../components/quiz/quiz';
// import ReactGA from 'react-ga';

const Hyp1 = () => {
    // useEffect(() => {
    //     ReactGA.pageview('/hyp1')
    // }, [])

    return(
        <div className="content">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <main className="main">
                <h1>Hyp1</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mRdMYuNeAng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Quiz />
            </main>
        </div>
    )
}

export default Hyp1