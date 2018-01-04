import React, { Component } from 'react';
import * as conf from './config.jsx';
import sanitizeHtml from 'sanitize-html-react';

export default class MainContentProducte extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedImgSrc: ""
        };

    //    this.canviaImatge = this.canviaImatge.bind(this);
    }

    componentDidMount() {
        //this.props.productIdAlState(this.props.productId);
    }

    componentWillReceiveProps() {

    }

    // canviaImatge({props}) {
    //     this.setState({
    //         selectedImgSrc: `http://images.colombiaespassion.net/${props.v.imagen_min}`
    //     })
    // }

    render() {

        console.dir(this.props.data);
// display: `grid`,
// gridTemplateColumns: `1fr 1fr`,
// gridTemplateRows: `auto`,
// gridAutoFlow: `row dense`,
        return (
            [
                <div
                    key='columna'
                    style={{
                        gridArea: conf.filtres_posicio,
                        gridArea: `min`
                    }}
                >
                    <div
                        style={{
                            /*display: `flex`,
                            flexWrap: `wrap`,*/
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
                                                    key={this.props.i}
                                                    src={`http://images.colombiaespassion.net/${v.imagen_min}`}
                                                    style={{
                                                        maxWidth: `110px`,
                                                        flexGrow: `1`,
                                                        flexShrink: `1`,
                                                        margin: `.5em`,
                                                        borderRadius: `3px`
                                                    }}
                                                    onClick={() => {
                                                        console.dir(v);
                                                        this.setState({
                                                            selectedImgSrc: `http://images.colombiaespassion.net/${v.imagen_min}`
                                                        });
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
                        gridArea: `fot`
                    }}
                >
                    {this.props.data.producteDETALLS
                        ? <img
                            src={this.state.selectedImgSrc ? this.state.selectedImgSrc : `http://images.colombiaespassion.net/${this.props.data.producteDETALLS[0].gallery[0].imagen_min}`}
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
                    style={{
                        gridArea: `tex`
                    }}
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

// gridColumnStart: `2`,
// gridColumnEnd: `span 2`,
// gridRowStart: `2`,
// gridRowEnd: `span 1`
