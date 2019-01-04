// CSS
import './table.scss';

import React from 'react';

// Components
import TableRow from './table-row'

function Table(props) {
    return (
        <section>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th className="link text--left">
                            <span className="link--underline">Tasks</span>
                        </th>
                        <th className="link text--center">
                            <span className="link--underline">Hours</span>
                        </th>
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
                        <td className="link text--right">
                            <strong className="link--underline">Total</strong>
                        </td>
                        <td className="link text--center">
                            <strong className="link--underline">Hours</strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Table;