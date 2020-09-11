import React from 'react'
// import styledComponents from 'styled-components'
import Character from './Character'
import styled from 'styled-components'

const FlippyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

function Characters({ data }) {
    return <div>
        <FlippyContainer>
            {
            data.map(aCharacter => {
            return (
                <Character 
                key={aCharacter.id}
                name={aCharacter.name}
                image={aCharacter.image}
                location={aCharacter.location}
                species={aCharacter.species}
                origin={aCharacter.origin}
                />
            )
            })
        }

        </FlippyContainer>
    </div>
}



export default Characters 