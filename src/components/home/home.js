import React, { Component } from 'react';

// Components
import HomeLayout from './home-layout';
import AddButton from '../buttons/circle-button'
import Button from '../buttons/button'
import PanelLayout from '../panel/panel-layout'
import History from '../history/history-layout'

class Home extends Component {
    render() {
        return (
            <HomeLayout>
                <h1>Weekly Hours</h1>
                <AddButton>+</AddButton>
                <Button type="dark">Dark Mode</Button>
                <PanelLayout />
                <History />
            </HomeLayout>
        )
    }
}

export default Home;