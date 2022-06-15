import React from 'react';

function Link(props) {
    return <li className={props.className}><a href={props.href}>{props.link}</a></li>;
}

export default Link;