// CSS
import './table.scss';

import React from 'react';

// Components
import TableRow from './table-row'

function Table(props) {
    let total = [];
    props.data.week.map((week) => {
        console.log(week.hours)
        total.push(week.hours);
    })
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
                        props.data.week.map((week, index) => {
                            return <TableRow key={index} data={week} />
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td className="link text--right padding--20">
                            <strong className="link--underline">Total</strong>
                        </td>
                        <td className="link text--center">
                            <strong className="link--underline">
                                {
                                    total.reduce((total, hour) => total + hour)
                                } Hours
                            </strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Table;