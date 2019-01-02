import React from 'react';

function MainButton(props) {
    return (
        <button className={props.type === 'secondary' ? 'button--secondary' : 'button--primary'}>
            {props.name}
        </button>
    )
}

export default MainButton;