import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FreeContent extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return this.props.children;
    }
}
