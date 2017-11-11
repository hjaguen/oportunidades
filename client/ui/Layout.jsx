import React, { Component } from 'react';
import * as conf from './config.jsx';

export default class Layout extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div
                style={conf.layoutStyle}
            >
                {this.props.children}
            </div>
        )
    }
}
