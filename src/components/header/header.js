import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                            {
                                this.props.publicUrl === '/' ? 
                                <NavLink to="/reports">
                                    <Button>View Reports</Button>
                                </NavLink>
                                :
                                <NavLink to="/">
                                    <Button>Home</Button>
                                </NavLink>
                            }
                            <Button type="dark">Dark Mode</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;