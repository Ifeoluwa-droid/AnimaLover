import React from 'react';
import {transform_rotate_neg_180} from '../styles';


function LeftArrow() {
    return <div className='arrow-btn'>
        <div className='arrow'>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </div>;
}

function RightArrow() {
    return <div className='arrow-btn' style={transform_rotate_neg_180}>
         <div className='arrow'>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </div>;
}

export {LeftArrow, RightArrow};