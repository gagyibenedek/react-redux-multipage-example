import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Scheduler extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <h1>this is step {this.props.state.step}</h1>
                <button onClick={this.props.actions.stepForward}>
                    Next step
                </button>
            </React.Fragment>
        );
    }
}

export default hot(module)(Scheduler);
