import React from 'react';

function BoxLayout(props) {
    return (
        <section className="box-layout">
            <article className="box-layout__child">
                {props.children}
            </article>
        </section>
    )
}

export default BoxLayout;