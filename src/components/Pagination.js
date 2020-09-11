import React from 'react';

function Pagination({ onClickPrev, onClickNext }) {
    return <div>
        <div className='pagination-wrapper'>
            <a onClick={onClickPrev}>prev</a>
            <a onClick={onClickNext}>next</a>
            
        </div>
    </div>
}



export default Pagination 

