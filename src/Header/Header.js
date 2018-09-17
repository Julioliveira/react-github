import React from 'react';
import './Header.css';

const header = (props) =>{
    return(
        <div className="Header">
            <div className="title">{props.title}</div>
        </div>
    )
};

export default header