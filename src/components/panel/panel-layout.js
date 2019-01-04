// CSS
import './panel.scss';

import React from 'react';

// Components
import PanelHeader from './panel-header'; 
import Button from '../buttons/button'; 
import PanelBody from './panel-body';
import Table from '../tables/table';

function PanelLayout(props) {
    return (
        <section>
            <div className="panel panel--white panel--shadow padding--20">
                <PanelHeader>
                    <div className="row">
                        <h4 className="title subtitle col-xs-11">
                            John Mejia
                            <span className="panel__header--date">17 / Sep / 2018 to 17 / Sep / 2018</span>
                        </h4>
                        <div className="col-xs-1">
                            <Button className="rigth">Add</Button>
                        </div>
                    </div>
                </PanelHeader>
                <PanelBody>
                    <Table data={props.data} />
                </PanelBody>
            </div>
        </section>
    )
}


export default PanelLayout;