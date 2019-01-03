import React from 'react';

// Components
import WeekBox from '../boxes/week-box';

function History(props) {
    return (
        <section>
            <header>
                <h4>Work History</h4>
            </header>
            <div className="box">
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