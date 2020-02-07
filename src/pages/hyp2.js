import React, { useEffect } from 'react';
import Quiz2 from '../components/quiz/quiz2';
// import ReactGA from 'react-ga';
// import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//     gtmId: 'GTM-55PQJ8C',
//     dataLayer: {
//         page: 'hyp2'
//     }
// }

const Hyp2 = () => {
    // useEffect(() => {
    //     TagManager.dataLayer(tagManagerArgs)
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