import React from 'react';

function TableRow(props) {
    return(
        <tr>
            <td className="row-description">
                <strong>{ props.data.day }</strong> - 
                <input className="input-reset input__description" defaultValue={ props.data.description } />
            </td>
            <td className="row-hours">
                <input className="input-reset input__hours text--center" defaultValue={ props.data.hours } />
            </td>
        </tr>
    )
}

export default TableRow;