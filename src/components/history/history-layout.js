// CSS
import './history.scss';

import React from 'react';

// Components
import WeekBox from '../boxes/week-box';

function History(props) {
    return (
        <section>
            <header>
                <h4 className="sub-title history-title">Work History</h4>
            </header>
            <div className="week-box">
                {
                    props.data[0].history.map((user, index) => {
                        return <WeekBox key={index} {...user} />
                    })
                }
            </div>
        </section>
    )
}

export default History;