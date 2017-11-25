import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { LinkContainer } from 'react-router-bootstrap';
import Masonry from 'react-masonry-component';
import * as conf from './config.jsx';

import { Link } from 'react-router-dom';


// export class MostrariTOTS extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     static: propTypes = {
//         data: PropTypes.shape({
//             loading: PropTypes.bool,
//             error: PropTypes.object,
//             categoriaPRODUCTES: PropTypes.array
//         }).isRequired
//     }
//
//     render() {
//         if (this.props.data.loading) {
//             return (<div>Cargando...</div>);
//         }
//
//         if (this.props.data.error) {
//            /* console.log(this.props.data.error)*/
//             return (<div>Ocurrió un error inesperado.</div>);
//         }
//
//         return (
//             <div>
//                 <Masonry
//                     elementType={'ul'}
//                 >
//                     {   this.props.data.categoriaPRODUCTES.map(
//                             (v,i,a) => {
//                                 //console.log(v);
//                                 if (i < 40000) {
//                                     return (
//                                         <li key={i}
//                                             style={{
//                                                 width: `110px`,
//                                                 height: `auto`,
//                                                 display: `inline-block`,
//                                                 border: `1px rgba(0,0,0,.5) solid`,
//                                                 borderRadius: `.3em`,
//                                                 margin: `.3em`,
//                                                 background: `rgba(255,255,255,.8)`
//                                             }}
//                                         >
//                                             <img
//                                                 src={`http://cashflow.colombiaespassion.net/productos/${v.imagen_principal}`}
//                                                 alt={v.descripcion}
//                                                 title={v.descripcion_long_es}
//                                                 style={{
//                                                     position: `relative`,
//                                                     width: `100%`,
//                                                     display: `block`,
//                                                     borderRadius: `.3em`
//                                                 }}
//                                             />
//                                             <div
//                                                 style={{
//                                                     padding: `.3em`
//                                                 }}
//                                             >
//                                                 Referencia: {v.referencia} - Nombre: {v.descripcion}
//                                             </div>
//                                             <div
//                                                 style={{
//                                                     padding: `.3em`
//                                                 }}
//                                             >
//                                                 Colores:
//                                                 <br />
//                                                 {v.galleryColors.map(
//                                                     (v2,i2,a2) => (
//                                                         // <img
//                                                         //     src={`http://cashflow.colombiaespassion.net/productos/${v2.imagen_min}`}
//                                                         //     style={{
//                                                         //         width: `20px`,
//                                                         //         height: `20px`
//                                                         //     }}
//                                                         // />
//                                                         <span
//                                                             key={i2}
//                                                             style={{
//                                                                 background: `${v2.num_color}`,
//                                                                 minWidth: `20px`,
//                                                                 minHeight: `20px`,
//                                                                 border: `1px solid black`,
//                                                                 margin: `.1em`,
//                                                                 display: `inline-block`
//                                                             }}
//                                                             title={`${v2.label_color}`}
//                                                         />
//                                                     )
//                                                 )}
//                                             </div>
//                                         </li>
//                                     );
//                                 }
//                                 return null;
//                             }
//                         )
//                     }
//                 </Masonry>
//             </div>
//         );
//     }
// }

export class MostrariSubcategoriaPRODUCTES extends Component {
    constructor(props) {
        super(props);
    }

    // static propTypes = {
    //     data: PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategoriaPRODUCTES: PropTypes.array
    //     }).isRequired
    // }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
           /* console.log(this.props.data.error)*/
            return (<div>Ocurrió un error inesperado.</div>);
        }

        const
            fM = this.props.filtreMarca,
            fT = this.props.filtreTalla,
            fC = this.props.filtreColor,
            Fitxeta = (props) => (
                <li key={props.i}
                    style={ conf.estil_fitxetes }
                >
                    <Link to={`/producto/${props.v.descripcion.trim().toLowerCase().replace(/\s+/g, '.')}.${props.v.id}`} >

                        <img
                            src={`http://cashflow.colombiaespassion.net/productos/${props.v.imagen_principal}`}
                            alt={props.v.descripcion}
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
                            Referencia: {props.v.referencia} - Nombre: {props.v.descripcion}
                        </div>
                        <div
                            style={{
                                padding: `.3em`
                            }}
                        >
                            Colores:
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
                                            arrColors =
                                                props.v.galleryColors.map(
                                                    (v,i,a) => (
                                                        // <img
                                                        //     src={`http://cashflow.colombiaespassion.net/productos/${v2.imagen_min}`}
                                                        //     style={{
                                                        //         width: `20px`,
                                                        //         height: `20px`
                                                        //     }}
                                                        // />
                                                        <span
                                                            key={i}
                                                            style={{
                                                                // background: `${v.num_color}`,
                                                                // minWidth: `20px`,
                                                                // minHeight: `20px`,
                                                                // border: `1px solid black`,
                                                                // margin: `.1em`,
                                                                // display: `inline-block`,

                                                                display: `inline-block`,
                                                                border: `1px black solid`,
                                                                borderRadius: `1em`,
                                                                width: `20px`,
                                                                height: `20px`,
                                                                background: `${v.num_color}`,
                                                                // background: `radial-gradient(ellipse at center, rgba(255,255,255,.05) 0%, ${v.num_color} 100%)`,
                                                                margin: `.2em`
                                                            }}
                                                            title={`${v.label_color}`}
                                                        />
                                                    )
                                                )
                                        ;

                                        return arrColors.concat(props.v.othersColors.map(
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
                                                />
                                            )
                                        ));

                                    })()
                                }
                            </div>
                            Tallas:
                            <div>
                                {props.v.sizes.map(
                                    (v,i,a) => (
                                        <span
                                            key={i}
                                            style={{
                                                // background: `${v.num_color}`,
                                                // minWidth: `20px`,
                                                // minHeight: `20px`,
                                                // border: `1px solid black`,
                                                // margin: `.1em`,
                                                // display: `inline-block`,

                                                display: `grid`,
                                                border: `1px black solid`,
                                                borderRadius: `1em`,
                                                height: `20px`,
                                                background: `white`,
                                                padding: `1em`,
                                                alignContent: `center`,
                                                // background: `radial-gradient(ellipse at center, rgba(255,255,255,.05) 0%, ${v.num_color} 100%)`,
                                                margin: `.2em`,
                                                textAlign: `center`
                                            }}
                                        >{`${v.label_talla}: ${Number(v.existencia_talla)}`}

                                        </span>

                                    )
                                )}
                            </div>
                        </div>
                    </Link>
                </li>
            ),
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
            <div>
                <Masonry
                    elementType={'ul'}
                >
                { fM ?
                    fT ?
                        fC ?
                                // 111
                                alert("111")
                            :   // 110
                                //alert("110")
                            //    (() => {
                                    this.props.data.subcategoriaPRODUCTES
                                        .filter(obj => obj.marca === this.props.filtreMarca.value)
                                        //.map(fitxetaMapper)
                                        .filter(obj => obj.sizes.find((v,i,a) => (v.tallaId === this.props.filtreTalla.value) && (Number(v.existencia_talla) > 0)))
                                        .map(fitxetaMapper)
                        //            ;
                                    // //console.dir("arrResultatFiltres", arrResultatFiltres);
                                    // if (arrResultatFiltres.length > 0) {
                                    //     return arrResultatFiltres.map(fitxetaMapper);
                                    // } else {
                                    //     return <h3>Sin resultados</h3>;
                                    // }
                        //        })()
                        : fC ?
                            // 101
                            //    alert("101")
                                (() => {
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
                                })()
                            :   // 100
                                this.props.data.subcategoriaPRODUCTES
                                    .filter(obj => obj.marca === this.props.filtreMarca.value)
                                    .map(fitxetaMapper)

                    : fT ?
                        fC ?
                            // 011
                                alert("011")
                        : // 010 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< !!!!!!!!!!!!!!
                    //    (() => {
                            // fetch(`http://api.colombiaespassion.net/jsubcategories/data/products/?pageId=1&categoryId=2&subcategoryId=34`)
                            //     .then(res => res.json())
                            //     .then(res =>
                            //         res.map(
                            //             (v,i,a) => {
                            //               fetch(`http://api.colombiaespassion.net/jgeneral/data/products/?productId=${v.id}`)
                            //                 .then(res => res.json())
                            //                 .then(res => {
                            //                     arrProductesAmbTalles.push(res);
                            //                 })
                            //                 .then(res => console.dir(arrProductesAmbTalles))
                            //             }
                            //         )
                            //     )
                            //     return <h1>010</h1>;
                        //let filtratsPerTalla = new Promise((resolve, reject) => {
                                //resolve(
                                this.props.data.subcategoriaPRODUCTES
                                    .filter(obj => obj.sizes.find((v,i,a) => (v.tallaId === this.props.filtreTalla.value) && (Number(v.existencia_talla)>0)))
                                    .map(fitxetaMapper)
                                //);
                        //     });
                        //
                        //     filtratsPerTalla.then(result => result.map(fitxetaMapper));
                        // })()
                            //.then(res => res.map(fitxetaMapper))



                            //.then(res => console.dir(arrProductesAmbTalles))

                                //Promise.all(
                                //    let array = [];

                                //    this.props.data.subcategoriaPRODUCTES
                                        // .forEach(
                                        //     (v,i,a) => {
                                                // fetch(`http://api.colombiaespassion.net/jgeneral/data/products/?productId=${v.id}`)
                                                //     .then(res => res.json())
                                                //     // .then(res => arrProductesAmbTalles.push(res))
                                                //     // .then(() =>
                                                //     //     console.dir("aPT:", arrProductesAmbTalles)
                                                //     // )
                                                //     .then(res => console.dir(res))



                                                    // .then(res => (
                                                    //     <Fitxeta
                                                    //         key={i}
                                                    //         v={v}
                                                    //         i={i}
                                                    //         a={a}
                                                    //     />
                                                    // ))

                                                    //.then(res => console.dir("array:", arrProductesAmbTalles))
                                                    //.then(res => console.dir("res:", res))
                                            //    ;
                                        //     console.dir(v);
                                        //     }
                                        // )
                            //    )
                                //.then( res =>
                                // );

                    : fC ?
                        // 001
                            //alert("001")
                            (() => {

                                this.props.data.subcategoriaPRODUCTES
                                .forEach(
                                    (v,i,a) => {
                                        if (v.galleryColors.find((obj) => obj.colorId === this.props.filtreColor.colorId)) {
                                             arrProdsColor.push(v);
                                            //console.dir(v);
                                        }
                                    }
                                );
                                console.dir("arrProdsColor", arrProdsColor);
                                return arrProdsColor.map(fitxetaMapper);
                                // return arrProdsColor.map(
                                //     (v,i,a) => {
                                //         return <h1>{v.descripcion}</h1>;
                                //     }
                                // );
                                                                                                    //
                                                                                                    // fetch("http://api.colombiaespassion.net/jsubcategories/data/products/?pageId=1&categoryId=2&subcategoryId=34")
                                                                                                    //     .then(res => res.json())
                                                                                                    //     //.then(res => res.find(obj => obj.galleryColors.colorId ==="4"))
                                                                                                    //     // .then(res => console.dir(res))
                                                                                                    //     .then(res => res
                                                                                                    //         .forEach(
                                                                                                    //             (v,i,a) => {
                                                                                                    //               if (v.galleryColors.find((obj) => obj.colorId==="5")) {
                                                                                                    //                   arrProdsColor.push(v);
                                                                                                    //               }
                                                                                                    //             }
                                                                                                    //         )
                                                                                                    //     )
                                                                                                    //     .then(res =>
                                                                                                    //         //console.dir(arrProdsColor)
                                                                                                    //         arrProdsColor.map(fitxetaMapper)
                                                                                                    //     );
                                    // console.dir("arrProdsColor", arrProdsColor);
                                    //return null;

                            })()
                        :
                        // 000
                           this.props.data.subcategoriaPRODUCTES
                                .map(fitxetaMapper)
                }
                </Masonry>
            </div>
        );
    }
}
