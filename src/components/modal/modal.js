// CSS
import './modal.scss';

import React from 'react';

function Modal(props) {
    console.log(props)
    return (
        <div className="Modal-bg">
            <div className="Modal">
                { props.children }           
                <span className="Modal-close" onClick={props.handleClick}></span>
            </div>
        </div>
    )
}

export default Modal;
