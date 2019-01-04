// CSS
import './buttons.scss';

import React from 'react';

function addButton(props) {
    const {
        children
    } = props;
    console.log(props)
    return (
        <span className="button--add-circle" onClick={props.handleModalOpen}>
            {children}
        </span>
    )
}

export default addButton;