import React from 'react';
import { LeftArrow, RightArrow } from './Arrow';

export default function Image(props) {
    return <img style={props.style} className={props.className} src={props.src} alt={props.alt}/>
}

export function ImageWithChild(props) {
    return <div style={{position: 'relative', width: '50%', ...props.style}} className={props.className}>
        <img style={props.imgStyle} className={props.imgClassName} src={props.src} alt={props.alt}/>
        <div style={{position: 'absolute', margin: '0', color: 'white', ...props.childStyle}} className={props.childClassName}>
            <div>
                <h3 className={props.headingClassName}>Traded illegally</h3>
                <p className={`fw-3 fs-0-8 ${props.childTextClassName}`} style={props.childTextStyle}>{props.childText}</p>
            </div>
            <div className='d-flex-row gap-0-6'>
                <LeftArrow />
                <RightArrow />
            </div>
        </div>
    </div>;
}