import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import ReportLayout from './reports-layout';
import Tabset from '../../components/tabs/tabset';
import Tab from '../../components/tabs/tab';
import Header from '../../components/header/header';
import BoxLayout from '../../components/boxes/box-layout';
import WeekBox from '../../components/boxes/week-box';
import PanelLayout from '../../components/panel/panel-layout';

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
        fetch("http://localhost:8000/reports/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    dataUser: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log(error);
            }
        )

    }

    render() {
        return (
            <ReportLayout>
                <Header title="Team Reports" modal={false} />
                <Link to="/">Home</Link>
                {/* <div>{JSON.stringify(this.state.dataUser)}</div> */}
                <Tabset>
                    <Tab title="All">
                        <div className="row">
                            <BoxLayout>
                                {
                                    this.props.data.users[0].history.map((user, index) => {
                                        return (
                                            <WeekBox key={index} {...user} />
                                        )
                                    })
                                }
                            </BoxLayout>
                            <BoxLayout>
                                {
                                    this.props.data.users[0].history.map((user, index) => {
                                        return (
                                            <WeekBox key={index} {...user} />
                                        )
                                    })
                                }
                            </BoxLayout>
                            <BoxLayout>
                                {
                                    this.props.data.users[0].history.map((user, index) => {
                                        return (
                                            <WeekBox key={index} {...user} />
                                        )
                                    })
                                }
                            </BoxLayout>
                        </div>
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