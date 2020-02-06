import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.pageview('/home')

const Home = () => {

    // useEffect(() => {
    //     ReactGA.pageview('/home')
    // }, [])

    return(
        <h1>Home</h1>
    )
}

export default Home