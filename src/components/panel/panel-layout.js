import React from 'react';

// Components
import PanelHeader from './panel-header'; 
import Button from '../buttons/button'; 
import PanelBody from './panel-body';
import Table from '../tables/table';

function PanelLayout(props) {
    return (
        <section>
            <PanelHeader>
                <h4>
                    John Mejia
                    <span>17 / Sep / 2018 to 17 / Sep / 2018</span>
                </h4>
                <Button>Add</Button>
            </PanelHeader>
            <PanelBody>
                <Table data={props.data} />
            </PanelBody>
        </section>
    )
}


export default PanelLayout;