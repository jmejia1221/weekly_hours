import React, { Component } from 'react';

// Components
import HomeLayout from './home-layout';
import AddButton from '../buttons/circle-button'
import Button from '../buttons/button'
import PanelLayout from '../panel/panel-layout'
import History from '../history/history-layout'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HomeLayout>
                <h1>Weekly Hours</h1>
                <AddButton>+</AddButton>
                <Button type="dark">Dark Mode</Button>
                <PanelLayout data={this.props.data.users} />
                <History data={this.props.data.users} />
            </HomeLayout>
        )
    }
}

export default Home;