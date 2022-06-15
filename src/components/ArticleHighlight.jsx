import React from 'react';
import ArticleHeading from './ArticleHeading';
import Heading from './Heading';
import Button from './Button';


function ArticleHighlight(props) {
    return (
        <div style={props.style} className={props.className}>
            <ArticleHeading 
                serial={props.serial}
                label={props.label}
            />
            <Heading 
                className={props.titleClassName}
                text={props.title}
            />
            <Button 
               className ={props.buttonClassName}
               href={props.articleLink}
               text={props.buttonText}
            />
        </div>
    );
}

export default ArticleHighlight;