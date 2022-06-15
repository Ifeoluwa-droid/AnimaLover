import React from 'react';
import ArticleHeading from './ArticleHeading';
import * as styles from '../styles';
import {LeftArrow, RightArrow} from './Arrow';
import Button from './Button';

function Article(props) {
    return <div className={`article ${props.articleClassName}`} style={{...styles.articleBgDarkStyle, ...props.articleStyle}}>
            <ArticleHeading 
                serial={props.serial}
                label={props.label}
            />
            <h3 className={props.titleClassName}>{props.title}</h3>
            <p className={props.contentClassName}>{props.content}</p>
            <div className='d-flex-row justify-space-between align-end'>
                {props.displayArrows && <div className='d-flex-row gap-0-6'>
                    <LeftArrow />
                    <RightArrow />
                </div>}
                {
                    props.slide &&  <p className='fw-3'><strong style={{fontSize: '1.2rem'}}>01</strong>/32</p>
                }
            </div>
            {props.hasButtons && <div className={`article-btns ${props.btnContainerClassName}`}>
                <Button 
                    className={props.leftButtonClassName}
                    text={props.leftButtonText}
                />
                <Button 
                    className={props.rightButtonClassName}
                    text={props.rightButtonText}
                />
            </div>}
        </div>;
}

export default Article;