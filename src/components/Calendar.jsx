import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cxs from 'cxs';
import classNames from 'classnames';

class Calendar extends Component {
    render() {
        const textStyle = classNames(
            border,
            this.props.state.dirty ? green : red,
        );
        return (
            <React.Fragment>
                <h1>
                    dirty:{' '}
                    <span className={textStyle}>
                        {this.props.state.dirty ? 'true' : 'false'}
                    </span>
                </h1>
                <input
                    type="text"
                    onChange={this.props.actions.changeSetting}
                />
                <button type="button" onClick={this.props.actions.save}>
                    Save
                </button>
                <ul>
                    {this.props.initProps.dates.map(date => (
                        <li key={date.getTime()}>{date.toString()}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

const green = cxs({
    color: 'tomato',
});
const red = cxs({
    color: 'olive',
});
const border = cxs({
    border: '2px solid black',
});

export default hot(module)(Calendar);
