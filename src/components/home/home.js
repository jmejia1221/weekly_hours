import React, { Component } from 'react';

// Components
import HomeLayout from './home-layout';
import AddButton from '../buttons/circle-button'
import MainButton from '../buttons/button'

class Home extends Component {
    render() {
        return (
            <HomeLayout>
                <h1>Weekly Hours</h1>
                <AddButton />
                <MainButton name="Add" />
            </HomeLayout>
        )
    }
}

export default Home;