import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Calendar extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <h1>dirty: {this.props.state.dirty ? 'true' : 'false'}</h1>
                <input
                    type="text"
                    onChange={this.props.actions.changeSetting}
                />
                <button onClick={this.props.actions.save}>Save</button>
            </React.Fragment>
        );
    }
}

export default hot(module)(Calendar);
