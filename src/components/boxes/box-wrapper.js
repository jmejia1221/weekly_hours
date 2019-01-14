import React from 'react';

function BoxWrapper(props) {
    return(
        <section className="box-wrapper">
            {props.children}
        </section>
    )
}

export default BoxWrapper;