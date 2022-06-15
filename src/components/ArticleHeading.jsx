import React from 'react';

function ArticleHeading(props) {
    return  <small className='fw-2'><strong>{props.serial}</strong> - {props.label}</small>;
}

export default ArticleHeading;