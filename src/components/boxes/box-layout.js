import React from 'react';

function BoxLayout(props) {
    return (
        <section className={`box-layout ${props.scroll ? 'box-layout--scroll' : '' }`}>
            <article className="box-layout__child">
                {
                    props.title &&
                    <h5 className="title title--underline">{props.title}</h5>
                }
                {props.children}
            </article>
        </section>
    )
}

export default BoxLayout;