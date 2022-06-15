import React from 'react';


function Button(props) {
    return <a style={{width: 'fit-content'}} className={props.className} href={props.href}>{props.text}</a>;
}

export default Button;