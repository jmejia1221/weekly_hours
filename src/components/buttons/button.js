import React from 'react';

/**
 * 
 * @param {children} props 
 * @param {type} props  primary, secondary
 */

function Button(props) {
    const {
        children,
        type,
        onClick
    } = props;

    return (
        <button onClick={onClick} className={`button button--${type}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'primary'
}

export default Button;