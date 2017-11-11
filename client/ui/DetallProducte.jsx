import React, { Component } from 'react';
import * as conf from './config.jsx';
import sanitizeHtml from 'sanitize-html-react';

export default class MainContentProducte extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        //this.props.productIdAlState(this.props.productId);
    }

    componentWillReceiveProps() {

    }

    render() {

        console.dir(this.props.data);

        return (
            [
                <div
                    key='columna'
                    style={{
                        gridArea: conf.filtres_posicio
                    }}
                >
                    <div
                        style={{
                            display: `grid`,
                            gridTemplateColumns: `1fr 1fr`,
                            gridTemplateRows: `auto`,
                            gridAutoFlow: `row dense`,
                            position: `-webkit-sticky`,
                            position: `sticky`,
                            top: `20px`,
                            margin: `20px`
                        }}
                    >
                        {   this.props.data.producteDETALLS
                                ? this.props.data.producteDETALLS[0].gallery.map(
                                        (v,i,a) => {
                                            return (
                                                <img
                                                    key={i}
                                                    src={`http://images.colombiaespassion.net/${v.imagen_min}`}
                                                    style={{
                                                        maxWidth: `110px`
                                                    }}
                                                 />
                                            );
                                        }
                                    )
                                : "Carregant..."
                        }
                    </div>
                    <div
                        style={{
                            position: `sticky`,
                            top: `20px`
                            // ,
                            // height: `100%`
                        }}
                    >

                        {   this.props.data.producteDETALLS
                                ? this.props.data.producteDETALLS[0].tallas.map(
                                        (v,i,a) => {
                                            return (
                                                <span
                                                    key={i}
                                                    style={{
                                                        background: `${v.num_color}`,
                                                        width: `20px`,
                                                        height: `20px`,
                                                        border: `1px solid black`,
                                                        display: `block`
                                                    }}
                                                 />
                                            );
                                        }
                                    )
                                : "Carregant..."
                        }
                    </div>
                </div>
            ,
                <div
                    key='central'
                    style={{
                        gridColumnStart: `2`,
                        gridColumnEnd: `span 2`,
                        gridRowStart: `2`,
                        gridRowEnd: `span 1`
                    }}
                >
                    {this.props.data.producteDETALLS
                        ? <img
                            src={`http://images.colombiaespassion.net/${this.props.data.producteDETALLS[0].imagen_principal}`}
                            style={{
                                width: `100%`,
                                borderRadius: `1.5vw`,
                                marginBottom: `20px`
                            }}
                          />
                        : "Carregant..."
                    }
                </div>
            ,
                <div
                    key='detall'

                >
                    {this.props.data.producteDETALLS
                        ? <div
                            style={{
                                padding: `20px`
                            }}
                          >
                            <h2
                            style={{
                                //textAlign: `center`,
                                //margin: `-20px`
                            }}>
                                {this.props.data.producteDETALLS[0].descripcion}
                            </h2>
                            <div dangerouslySetInnerHTML={{
                                __html: sanitizeHtml(this.props.data.producteDETALLS[0].descripcion_long_es)
                            }}/>
                          </div>
                        : null
                    }
                </div>
            ]
        );
    }
}
