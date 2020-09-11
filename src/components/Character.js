// import src from '*.bmp';
import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components'

const EachCard = styled.div`
    padding:15px;
`

const CardFields = styled.span`
    font-weight:bold;
    line-height: 1.4;
`

function Character({ name, image, location, species, origin }) {
    return <EachCard>
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
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover'
                }}
            >
            </FrontSide>
            <BackSide
                style={{ 
                    backgroundColor: '#B7E4F999'
                }}
            >
                <div><CardFields>Name:</CardFields> {name}</div>
                <div><CardFields>Location:</CardFields> {location}</div>
                <div><CardFields>Species:</CardFields> {species}</div>
                <div><CardFields>Origin:</CardFields> {origin}</div>
            </BackSide>
        </Flippy>
    </EachCard>
}



export default Character