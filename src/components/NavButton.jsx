import React from 'react';

export default function NavButton(props) {
    return <button className={props.className} style={{appearance: 'none', border: 'none', outline: 'none', background: 'transparent', ...props.style}} onClick={props.onClick}>
                {props.child}
        </button>
}