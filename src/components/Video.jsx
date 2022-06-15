import React from 'react';

function Video(props) {
    return <video className={props.className} width={props.width} controls>
            <source width='100%' src={props.src} type="video/mp4"/>
            </video>
}

export default Video;