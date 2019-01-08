import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

// Components
import AddButton from '../buttons/circle-button';
import Button from '../buttons/button';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="row margin--20">
                <div className="col-xs-3">
                    <h1 className="home-title">{ this.props.title }</h1>
                    {
                        this.props.modal &&
                        <div className="margin--left-10 add-hours">
                            <AddButton handleModalOpen={this.props.handleClickModal}>+</AddButton>
                        </div>
                    }
                </div>
                <div className="col-xs-9">
                    <div className="float--right margin--top-10">
                        <div className="group-buttons">
                            <BrowserRouter>
                                <div>
                                    {/* <NavLink exact to="/reports">View Reports</NavLink> */}
                                    <Link to="/reports">Reports</Link>
                                </div>
                                {/* <Button>View Reports</Button> */}
                            </BrowserRouter>
                            <Button type="dark">Dark Mode</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;