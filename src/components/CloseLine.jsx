import React from 'react';

export default function CloseLine(props) {
    return <div className='drop-line' style={{width: '30px', height: '.3rem', background: 'white', transformOrigin: '50%', ...props.style}}></div>
}