import React, { useState, Fragment } from 'react'
// import ReactGA from 'react-ga';

const Sidebar = () => {
    const [ count, setCount ] = useState(0)

    const buttonClick = () => {
        setCount(count + 1)
        // ReactGA.event({
        //     category: 'sidebar',
        //     action: 'button click',
        //   });
    }

    return (
        <Fragment>
            <h5>Summary</h5>
            <p><button onClick={() => buttonClick()}>Click</button></p>
            <p>{count}</p>
        </Fragment>
    )
}

export default Sidebar