import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


const Hyp3 = () => {

    useEffect(() => {
        ReactGA.pageview('/hyp3')
    }, [])

    return(
        <h1>Hyp3</h1>
    )
}

export default Hyp3