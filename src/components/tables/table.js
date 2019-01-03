import React from 'react';

// Components
import TableRow from './table-row'

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data[0].week.map((week, index) => {
                        return <TableRow key={index} data={week} />
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>Hours</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;