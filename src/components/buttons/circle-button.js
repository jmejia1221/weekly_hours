// CSS
import './buttons.scss';

import React from 'react';

function addButton(props) {
    const {
        children
    } = props;
    return (
        <span className="button--add-circle">
            {children}
        </span>
    )
}

export default addButton;