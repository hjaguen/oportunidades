import React, { Component } from 'react';
import * as conf from './config.jsx';

export default class Layout extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div
                style={{
                    height: `100%`,
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                    gridTemplateAreas: `
                        "navbar navbar navbar navbar"
                        ${conf.layoutTemplateArea}
                        "present present present present"
                        "footer footer footer footer"
                    `,
                    backgroundImage: `url(${conf.fonsPrincipal})`,
                    backgroundSize: conf.backgroundSize,
                    backgroundRepeat: conf.backgroundRepeat,
                    backgroundAttachment: conf.backgroundAttachment
                }}
            >
                {this.props.children}
            </div>
        )
    }
}
