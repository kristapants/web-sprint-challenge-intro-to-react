import React from 'react'
// import styledComponents from 'styled-components'
import Character from './Character'


function Characters({ data }) {
    return <div>
        <div className='posts-container-wrapper'>
            {
            data.map(aCharacter => {
            return (
                <Character 
                key={aCharacter.id}
                name={aCharacter.name}
                profPic={aCharacter.image}
                />
            )
            })
        }

        </div>
    </div>
}



export default Characters 