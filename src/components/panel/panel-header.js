// CSS
import './panel.scss';

import React from 'react';

function PanelHeader(props) {
    return (
        <header className="panel__header">
            {props.children}
        </header>
    )
}

export default PanelHeader;
