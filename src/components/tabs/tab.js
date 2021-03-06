import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.children)
    }

  render() {
    return (
      <div className="tabset">
        {this.props.children.map((child, i) => {
            let activeTabClass = `tabset__tab`;
            if (child.key === this.props.active) {
                activeTabClass = `${activeTabClass} ${activeTabClass}--active`;
            }
            return (
                <div key={i} className={activeTabClass}
                    onClick={() => {
                        this.props.onChange(child.key);
                    }}>
                    {child}
                </div>
            );
        })}
      </div>
    );
  }

}

export default Tab;