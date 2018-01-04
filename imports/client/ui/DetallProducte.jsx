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
                                                    onMouseOver={() => {
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
                                padding: `20px`,
                                background: `rgba(255,255,255,.3)`,
                                margin: `1em`,
                                borderRadius: `2em`
                            }}
                          >
                            <h2
                                style={{
                                    //textAlign: `center`,
                                    //margin: `-20px`
                                    marginTop: `0`,
                                    fontVariant: `small-caps`,
                                    //text-align: center;
                                    textTransform: `capitalize`,
                                    fontFamily: `'Comfortaa', sans-serif`,
                                    fontSize: `2.5em`
                                }}
                            >{this.props.data.producteDETALLS[0].descripcion}
                            </h2>
                            <span
                                style={{
                                    fontStyle: `italic`,
                                    fontVariant: `small-caps`,
                                    position: `relative`,
                                    bottom: `1em`,
                                    textAlign: `right`,
                                    display: `block`,
                                    fontWeight: `bolder`,
                                    fontSize: `1.5em`
                                }}
                            >{this.props.data.producteDETALLS[0].nom_marca}
                            </span>
                            {
                                (this.props.data.producteDETALLS[0].descripcion_long_es && (this.props.data.producteDETALLS[0].descripcion_long_es !== "null"))
                                ?   <div
                                        style={{
                                            background: `rgba(255,255,255,.25)`,
                                            padding: `1em`,
                                            borderRadius: `1em`,
                                            fontFamily: `'Comfortaa', sans-serif`
                                        }}
                                        dangerouslySetInnerHTML={{
                                        __html: sanitizeHtml(this.props.data.producteDETALLS[0].descripcion_long_es)
                                    }}/>
                                : null
                            }


                            {this.props.data.producteDETALLS[0].tallas.map(
                                   (v,i,a) => {
                                       let
                                        colorHex = v.num_color.slice(1),
                                        colorDec = parseInt(colorHex, 16),
                                        invertDec = 16777215 - colorDec,
                                        invertHex = invertDec.toString(16)
                                    ;


                                       return (
                                           <span
                                               key={i}
                                               style={{
                                                   background: `${v.num_color}`,
                                                   padding: `.2em`,
                                                   minWidth: `28px`,
                                                   minheight: `20px`,
                                                   border: `1px solid black`,
                                                   display: `inline-block`,
                                                   borderRadius: `1em`,
                                                   margin: `.2em`,
                                                   textAlign: `center`,
                                                   fontWeight: `bold`,
                                                   color: `#${invertHex}`
                                               }}
                                               title={v.labelColor}
                                            >{v.label_talla}
                                            </span>
                                       );
                                   }
                               )
                           }

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
