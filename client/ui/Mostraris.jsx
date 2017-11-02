import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import Masonry from 'react-masonry-component';
import * as conf from './config.jsx';

export class MostrariTOTS extends Component {
    constructor(props) {
        super(props);
    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            categoriaPRODUCTES: PropTypes.array
        }).isRequired
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
           /* console.log(this.props.data.error)*/
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            <div>
                <Masonry
                    elementType={'ul'}
                >
                    {   this.props.data.categoriaPRODUCTES.map(
                            (v,i,a) => {
                                //console.log(v);
                                if (i < 40000) {
                                    return (
                                        <li key={i}
                                            style={{
                                                width: `110px`,
                                                height: `auto`,
                                                display: `inline-block`,
                                                border: `1px rgba(0,0,0,.5) solid`,
                                                borderRadius: `.3em`,
                                                margin: `.3em`,
                                                background: `rgba(255,255,255,.8)`
                                            }}
                                        >
                                            <img
                                                src={`http://cashflow.colombiaespassion.net/productos/${v.imagen_principal}`}
                                                alt={v.descripcion}
                                                title={v.descripcion_long_es}
                                                style={{
                                                    position: `relative`,
                                                    width: `100%`,
                                                    display: `block`,
                                                    borderRadius: `.3em`
                                                }}
                                            />
                                            <div
                                                style={{
                                                    padding: `.3em`
                                                }}
                                            >
                                                Referencia: {v.referencia} - Nombre: {v.descripcion}
                                            </div>
                                            <div
                                                style={{
                                                    padding: `.3em`
                                                }}
                                            >
                                                Colores:
                                                <br />
                                                {v.galleryColors.map(
                                                    (v2,i2,a2) => (
                                                        // <img
                                                        //     src={`http://cashflow.colombiaespassion.net/productos/${v2.imagen_min}`}
                                                        //     style={{
                                                        //         width: `20px`,
                                                        //         height: `20px`
                                                        //     }}
                                                        // />
                                                        <span
                                                            key={i2}
                                                            style={{
                                                                background: `${v2.num_color}`,
                                                                minWidth: `20px`,
                                                                minHeight: `20px`,
                                                                border: `1px solid black`,
                                                                margin: `.1em`,
                                                                display: `inline-block`
                                                            }}
                                                            title={`${v2.label_color}`}
                                                        />
                                                    )
                                                )}
                                                <br />
                                                Tallas:
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            }
                        )
                    }
                </Masonry>
            </div>
        );
    }
}

export class MostrariSubcategoriaPRODUCTES extends Component {
    constructor(props) {
        super(props);
    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            subcategoriaPRODUCTES: PropTypes.array
        }).isRequired
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
           /* console.log(this.props.data.error)*/
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            <div>
                <Masonry
                    elementType={'ul'}
                >
                    {   this.props.data.subcategoriaPRODUCTES.map(
                            (v,i,a) => {
                                //console.log(v);
                                if (i < 40000) {
                                    return (
                                        <li key={i}
                                            style={{
                                                width: conf.amplaria_fitxetes_subcategoria,
                                                height: `auto`,
                                                display: `inline-block`,
                                                border: `1px rgba(0,0,0,.5) solid`,
                                                borderRadius: `.3em`,
                                                margin: `.3em`,
                                                background: `rgba(255,255,255,.8)`

                                            }}
                                        >
                                            <img
                                                src={`http://cashflow.colombiaespassion.net/productos/${v.imagen_principal}`}
                                                alt={v.descripcion}
                                                title={v.descripcion_long_es}
                                                style={{
                                                    position: `relative`,
                                                    width: `100%`,
                                                    display: `block`,
                                                    borderRadius: `.3em`
                                                }}
                                            />
                                            <div
                                                style={{
                                                    padding: `.3em`
                                                }}
                                            >
                                                Referencia: {v.referencia} - Nombre: {v.descripcion}
                                            </div>
                                            <div
                                                style={{
                                                    padding: `.3em`
                                                }}
                                            >
                                                Colores:
                                                <br />
                                                {v.galleryColors.map(
                                                    (v2,i2,a2) => (
                                                        // <img
                                                        //     src={`http://cashflow.colombiaespassion.net/productos/${v2.imagen_min}`}
                                                        //     style={{
                                                        //         width: `20px`,
                                                        //         height: `20px`
                                                        //     }}
                                                        // />
                                                        <span
                                                            key={i2}
                                                            style={{
                                                                background: `${v2.num_color}`,
                                                                minWidth: `20px`,
                                                                minHeight: `20px`,
                                                                border: `1px solid black`,
                                                                margin: `.1em`,
                                                                display: `inline-block`
                                                            }}
                                                            title={`${v2.label_color}`}
                                                        />
                                                    )
                                                )}
                                                <br />
                                                Tallas:
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            }
                        )
                    }
                </Masonry>
            </div>
        );
    }
}