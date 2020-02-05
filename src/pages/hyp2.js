import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Hyp2 = () => {

    useEffect(() => {
        ReactGA.pageview('/hyp2')
    }, [])

    return(
        <h1>Hyp2</h1>
    )
}

export default Hyp2