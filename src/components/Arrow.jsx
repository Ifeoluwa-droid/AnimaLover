import React from 'react';
import {transformRotateNeg180} from '../styles';


function LeftArrow() {
    return <div className='arrow-btn'>
        <div className='arrow'>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </div>;
}

function RightArrow() {
    return <div className='arrow-btn' style={transformRotateNeg180}>
         <div className='arrow'>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </div>;
}

export {LeftArrow, RightArrow};