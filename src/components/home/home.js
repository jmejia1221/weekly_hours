import React, { Component } from 'react';

// Components
import HomeLayout from './home-layout';
import AddButton from '../buttons/circle-button';
import Button from '../buttons/button';
import PanelLayout from '../panel/panel-layout';
import History from '../history/history-layout';
import ModalLayout from '../modal/modal-layout';
import Modal from '../modal/modal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
        this.handleModalToggle = (event) => {
            this.setState({
                modalVisible: !this.state.modalVisible,
            })
        }
    }
    render() {
        return (
            <HomeLayout>
                <div className="row margin--20">
                    <div className="col-xs-3">
                        <h1 className="home-title">Weekly Hours</h1>
                        <div className="margin--left-10 add-hours">
                            <AddButton handleModalOpen={this.handleModalToggle}>+</AddButton>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        <div className="float--right margin--top-10">
                            <Button type="dark">Dark Mode</Button>
                        </div>
                    </div>
                </div>
                <PanelLayout data={this.props.data.users} />
                <History data={this.props.data.users} />
                {
                    this.state.modalVisible &&
                    <ModalLayout>
                        <Modal handleClick={this.handleModalToggle}>
                            <h1>This is a Modal</h1>
                        </Modal>
                    </ModalLayout>
                }
            </HomeLayout>
        )
    }
}

export default Home;