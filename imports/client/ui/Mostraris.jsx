import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { LinkContainer } from 'react-router-bootstrap';
import Masonry from 'react-masonry-component';
import * as conf from './config.jsx';

import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Counter from './Counter';

export class MostrariSubcategoriaPRODUCTES extends Component {
    constructor(props) {
        super(props);
    }

    resetQuantity(){

    }
    addToCart(image, name, price, id, quantity){
        this.setState({
            selectedProduct: {
                image: image,
                name: name,
                price: price,
                id: id,
                quantity: quantity
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct);
        })
        this.setState({
            buttonLabel: "✔ ADDED"
        }, function(){
            setTimeout(() => {
                this.setState({ 
                    buttonLabel: "ADD TO CART",
                    selectedProduct: {} 
                });
            }, 5000);
        });
    }
    
    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
           /* console.log(this.props.data.error)*/
            return (<div>Ocurrió un error inesperado.</div>);
        }

        class Fitxeta extends Component {
            constructor(props) {
                super(props);

                this.state = {
                    imagenActual: props.v.imagen_principal
                }
            }

            render() {
                return (this.props.v.imagen_principal && this.props.v.imagen_principal !== "null")
                ?
                    <li
                        key={this.props.i}
                        style={ conf.estil_fitxetes }
                    >
                        <Link
                            to={`/producto/${this.props.v.descripcion.trim().toLowerCase().replace(/\s+/g, '.')}.${this.props.v.id}`}
                            style={{
                                textDecoration: `none`
                            }}
                        >
                            <LazyLoad height={560} offset={[-200, 0]} >
                                <img
                                    src={`http://cashflow.colombiaespassion.net/productos/${this.state.imagenActual}`}
                                    alt={this.props.v.descripcion}
                                    style={{
                                        position: `relative`,
                                        width: `100%`,
                                        display: `block`,
                                        borderRadius: `.3em`
                                    }}
                                />
                                <div
                                    style={{
                                        padding: `.3em`,
                                        marginBottom: `.1em`,
                                        position: `absolute`,
                                        bottom: `.5em`,
                                        width: `100%`,
                                        background: `rgba(255,255,255,.8)`
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: `bold`,
                                            textAlign: `center`
                                        }}
                                    >{this.props.v.referencia}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: `.9em`,
                                            lineHeight: `.8em`,
                                            fontStyle: `italic`
                                        }}
                                    >{this.props.v.descripcion}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: `.9em`,
                                            lineHeight: `.8em`,
                                            fontStyle: `italic`,
                                            textAlign: `right`,
                                            fontWeight: `bold`,
                                            marginTop: `.4em`
                                        }}
                                    >{this.props.v.nom_marca}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        padding: `.3em`,
                                        position: `absolute`,
                                        bottom: `5em`,
                                        width: `100%`,
                                        background: `rgba(255,255,255,.8)`

                                    }}
                                >
                                    
                                        <div
                                            style={{
                                                display: `flex`,
                                                justifyContent: `center`,
                                                flexWrap: `wrap`,
                                                alignItems: `center`
                                            }}
                                        >
                                            {
                                                (() => {
                                                    let
                                                        arrColors = this.props.v.galleryColors.map(
                                                                (v,i,a) => (
                                                                    <span
                                                                        key={i}
                                                                        style={{
                                                                            display: `inline-block`,
                                                                            border: `1px black solid`,
                                                                            borderRadius: `1em`,
                                                                            width: `20px`,
                                                                            height: `20px`,
                                                                            background: `${v.num_color}`,
                                                                            margin: `.2em`
                                                                        }}
                                                                        title={`${v.label_color}`}
                                                                        onMouseOver={()=>{
                                                                            this.setState({
                                                                                imagenActual: v.imagen_min
                                                                            })
                                                                        }}
                                                                    />
                                                                )
                                                            )
                                                    ;

                                                    return arrColors.concat(this.props.v.othersColors.map(
                                                        (v,i,a) => (
                                                            <span
                                                                key={i}
                                                                style={{
                                                                    display: `inline-block`,
                                                                    border: `1px black solid`,
                                                                    borderRadius: `0em`,
                                                                    width: `18px`,
                                                                    height: `18px`,
                                                                    background: `${v.num_color}`,
                                                                    margin: `.3em`,
                                                                    transform: `rotate(45deg)`
                                                                }}
                                                                title={`${v.nom_color}`}
                                                                onMouseOver={()=>{
                                                                }}
                                                            />
                                                        )
                                                    ));

                                                })()
                                            }
                                        </div>
                                </div>
                                {/*<Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} resetQuantity={this.resetQuantity}/>
                                <div className="product-action">
                                    <button type="button" onClick={this.addToCart.bind(this, image, name, price, id, quantity)}>{this.state.buttonLabel}</button>
                                </div>*/}
                            </LazyLoad>
                        </Link>
                    </li>
                :
                    null
            }
        }

        const
            fitxetaMapper = (v,i,a) => {
                //console.log(v);
                if (i < 40000) {
                    return (
                        <Fitxeta
                            key={i}
                            v={v}
                            i={i}
                            a={a}
                        />
                    );
                }
                return null;
            }
        ;

        let
            arrProductesAmbTalles = [],
            arrProdsColor = [],
            arrResultatFiltres = []
        ;

        return (
            <Masonry
                elementType={'ul'}
            >
            {
                (() => {

                    const
                        fM = this.props.filtreMarca ? "1" : "0",
                        fT = this.props.filtreTalla ? "1" : "0",
                        fC = this.props.filtreColor ? "1" : "0"
                    ;

                    switch (`${fM}${fT}${fC}`) {
                        case "111": {
                            //alert("111");
                            this.props.data.subcategoriaPRODUCTES
                                .filter(obj => obj.marca === this.props.filtreMarca.value)
                                //.map(fitxetaMapper)
                                .filter(obj => obj.sizes.find((v,i,a) => (v.tallaId === this.props.filtreTalla.value) && (Number(v.existencia_talla) > 0)))
                                .forEach(
                                    (v,i,a) => {
                                        if (v.galleryColors.find((obj) => obj.colorId === this.props.filtreColor.colorId)) {
                                             arrProdsColor.push(v);
                                            //console.dir(v);
                                        }
                                    }
                                );
                                //console.dir("arrProdsColor", arrProdsColor);
                            //    return arrProdsColor.map(fitxetaMapper);
                                if (arrProdsColor.length > 0) {
                                    return arrProdsColor.map(fitxetaMapper);
                                } else {
                                    return <h3>Sin resultados</h3>;
                                }
                            break;
                        }
                        case "110": {
                            //alert("110");
                            return this.props.data.subcategoriaPRODUCTES
                                .filter(obj => obj.marca === this.props.filtreMarca.value)
                                //.map(fitxetaMapper)
                                .filter(obj => obj.sizes.find((v,i,a) => (v.tallaId === this.props.filtreTalla.value) && (Number(v.existencia_talla) > 0)))
                                .map(fitxetaMapper);
                            break;
                        }
                        case "101": {
                            //alert("101");
                            this.props.data.subcategoriaPRODUCTES
                                .filter(obj => obj.marca === this.props.filtreMarca.value)
                                //.map(fitxetaMapper)
                                .forEach(
                                    (v,i,a) => {
                                        if (v.galleryColors.find((obj) => obj.colorId === this.props.filtreColor.colorId)) {
                                             arrResultatFiltres.push(v);
                                            //console.dir(v);
                                        }
                                    }
                                )
                            ;
                            //console.dir("arrResultatFiltres", arrResultatFiltres);
                            if (arrResultatFiltres.length > 0) {
                                return arrResultatFiltres.map(fitxetaMapper);
                            } else {
                                return <h3>Sin resultados</h3>;
                            }
                            break;
                        }
                        case "100": {
                            //alert("100");
                            return this.props.data.subcategoriaPRODUCTES
                                .filter(obj => obj.marca === this.props.filtreMarca.value)
                                .map(fitxetaMapper);
                            break;
                        }
                        case "011": {
                            //alert("011");
                            this.props.data.subcategoriaPRODUCTES
                                .filter(obj => obj.sizes.find((v,i,a) => (v.tallaId === this.props.filtreTalla.value) && (Number(v.existencia_talla)>0)))
                                .forEach(
                                    (v,i,a) => {
                                        if (v.galleryColors.find((obj) => obj.colorId === this.props.filtreColor.colorId)) {
                                             arrProdsColor.push(v);
                                            //console.dir(v);
                                        }
                                    }
                                );
                                //console.dir("arrProdsColor", arrProdsColor);
                            //return arrProdsColor.map(fitxetaMapper);
                            if (arrProdsColor.length > 0) {
                                return arrProdsColor.map(fitxetaMapper);
                            } else {
                                return <h3>Sin resultados</h3>;
                            }
                            break;
                        }
                        case "010": {
                            //alert("010");
                            return this.props.data.subcategoriaPRODUCTES
                                .filter(obj => obj.sizes.find((v,i,a) => (v.tallaId === this.props.filtreTalla.value) && (Number(v.existencia_talla)>0)))
                                .map(fitxetaMapper);
                            break;
                        }
                        case "001": {
                            //alert("001");
                            this.props.data.subcategoriaPRODUCTES
                                .forEach(
                                    (v,i,a) => {
                                        if (v.galleryColors.find((obj) => obj.colorId === this.props.filtreColor.colorId)) {
                                             arrProdsColor.push(v);
                                            //console.dir(v);
                                        }
                                    }
                                );
                            //console.dir("arrProdsColor", arrProdsColor);
                            //return arrProdsColor.map(fitxetaMapper);
                            if (arrProdsColor.length > 0) {
                                return arrProdsColor.map(fitxetaMapper);
                            } else {
                                return <h3>Sin resultados</h3>;
                            }
                            break;
                        }
                        case "000": {
                            //alert("000");
                            return this.props.data.subcategoriaPRODUCTES
                                 .map(fitxetaMapper);
                            break;
                        }
                    }
                })()
            }
            </Masonry>
        );
    }
}
