import React from 'react';

export default function Heading(props) {
    return <h2 className={props.className}>{props.text}</h2>;
}