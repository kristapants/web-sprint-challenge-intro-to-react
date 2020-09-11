import React from 'react';
import styled from 'styled-components'

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    }
`

const PaginationButton = styled.button`
    background-color: #f0f0f0;
    border: 1px solid black;
    border-radius: 8px;
    padding: 5px;
    color: #FB646799;
    transition: all 0.4s ease-in-out;
    font-size: 3rem;
    &:hover {
        transition: all 0.4s ease-in-out;
        color: #f0f0f0;
        background-color: #fb646799;
`

function Pagination({ onClickPrev, onClickNext, hasPrev, hasNext }) {
    return <div>
        <PaginationWrapper>

                {(hasPrev) ?  <PaginationButton onClick={onClickPrev}>Previous</PaginationButton> : ' '}

                {(hasNext) ? <PaginationButton onClick={onClickNext}>Next</PaginationButton> : ' '}

        </PaginationWrapper>
    </div>
}



export default Pagination 

