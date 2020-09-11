import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// import styledComponents from 'styled-components'

function Character({ name }) {
    return <div>
        <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
        >
            <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
            >
                RICK
            </FrontSide>
            <BackSide
                style={{ backgroundColor: '#175852'}}
            >
                ROCKS
            </BackSide>
        </Flippy>
    </div>
}



export default Character