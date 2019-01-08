import React from 'react';

import './tabs.scss';
// Components
import Tab from './tab';


class Tabset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: this.props.children[0].props.title};
  }
  render() {
    const content = {};
    return (
        <div>
            {
                this.props.title &&
                <h1>{ this.props.title }</h1>
            }
            <Tab
                active={this.state.active}
                onChange={active => this.setState({active})}>
                {
                    this.props.children.map((tab) => {
                        content[tab.props.title] = tab.props.children;
                        return (
                            <div key={tab.props.title}>{tab.props.title}</div>
                        )
                    })
                }
            </Tab>
            <section>
                {content[this.state.active]}
            </section>
        </div>
    );
  }
};
export default Tabset;