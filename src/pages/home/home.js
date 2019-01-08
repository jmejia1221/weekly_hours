import React, { Component } from 'react';

// Components
import HomeLayout from './home-layout';
import Button from '../../components/buttons/button';
import PanelLayout from '../../components/panel/panel-layout';
import History from '../../components/history/history-layout';
import ModalLayout from '../../components/modal/modal-layout';
import Modal from '../../components/modal/modal';
import Header from '../../components/header/header';

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
                <Header title="Weekly Hours" modal={true} handleClickModal={this.handleModalToggle} />
                <PanelLayout data={this.props.data.users[0]} />
                <History data={this.props.data.users} />
                {
                    this.state.modalVisible &&
                    <ModalLayout>
                        <Modal handleClick={this.handleModalToggle}>
                            <h1>Add Week</h1>
                            <div className="float--right">
                                <Button>Create</Button>
                            </div>
                        </Modal>
                    </ModalLayout>
                }
            </HomeLayout>
        )
    }
}


export default Home;