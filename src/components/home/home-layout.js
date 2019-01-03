//  CSS
import './home.scss';

import React from 'react';

function HomeLayout(props) {
    return (
        <section className="container">
            {props.children}
        </section>
    )
}


export default HomeLayout;