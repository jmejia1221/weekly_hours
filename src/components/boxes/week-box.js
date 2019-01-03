// CSS
import './boxes.scss'

import React, { PureComponent } from 'react';

class WeekBox extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="box--white box--shadow">
                <div>
                    <span>Week</span>
                    <span>{ this.props.total_hours }</span>
                </div>
                <div>
                    <span>{ this.props.beginning_date }</span>
                    <span>{ this.props.end_date }</span>
                </div>
            </div>
        )
    }
}


export default WeekBox;