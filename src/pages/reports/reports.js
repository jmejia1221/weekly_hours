import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HTTP } from '../../common';

// Components
import ReportLayout from './reports-layout';
import Tabset from '../../components/tabs/tabset';
import Tab from '../../components/tabs/tab';
import Header from '../../components/header/header';
import BoxWrapper from '../../components/boxes/box-wrapper';
import BoxLayout from '../../components/boxes/box-layout';
import WeekBox from '../../components/boxes/week-box';
import PanelLayout from '../../components/panel/panel-layout';
import Button from '../../components/buttons/button';

class Report extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            user: {},
            dataUser: []
        }
    }

    componentDidMount() {
        HTTP.get('reports/').then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <ReportLayout>
                <Link to="/">
                    <Header title="Team Reports" publicUrl="/reports" modal={false} />
                </Link>
                <Tabset>
                    <Tab title="All">
                        <BoxWrapper>
                            {
                                this.props.data.users.map((user, index) => {
                                    return (
                                        <BoxLayout scroll={true} key={index} title={user.user}>
                                            {
                                                user.history.slice(0, 3).map((userHistory, i) => {
                                                    return (
                                                        <WeekBox key={i} {...userHistory} />
                                                    )
                                                })
                                            }
                                        </BoxLayout>
                                    )
                                })
                            }
                        </BoxWrapper>
                    </Tab>
                    <Tab title="This Week">
                        {
                            this.props.data.users.map((user, index) => {
                                console.log(user)
                                return <PanelLayout key={index} data={user} />
                            })
                        }
                    </Tab>
                    <Tab title="Request">
                        Hello 3
                    </Tab>
                </Tabset>
            </ReportLayout>
        )
    }
}

export default Report;