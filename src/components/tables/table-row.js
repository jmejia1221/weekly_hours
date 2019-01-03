import React from 'react';

function TableRow(props) {
    return(
        <tr>
            <td>{ props.data.day }</td>
            <td>{ props.data.hours }</td>
        </tr>
    )
}

export default TableRow;