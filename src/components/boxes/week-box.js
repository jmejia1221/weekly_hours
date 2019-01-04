// CSS
import './boxes.scss'

import React, { PureComponent } from 'react';

class WeekBox extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="week-box--white week-box--shadow">
                <div className="week-box__week">
                    <div className="week-box__week--text">Week</div>
                    <div className="week-box__week--hours">{ this.props.total_hours } Hours</div>
                </div>
                <div className="week-box__date">
                    <div className="week-box__date--start">{ this.props.beginning_date }</div>
                    <div className="week-box__date--end">{ this.props.end_date }</div>
                </div>
            </div>
        )
    }
}


export default WeekBox;