import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';


export let

    categoryId = `2`
    ,
    tituloPagina = `Blusas Colombianas`
    ,
    subtituloPagina = `Ropa Colombiana en Europa`
    ,
    telContacto = `(+34) 962 441 478`
    ,
    emailContacto = `ventas@latinmoda.info`
    ,
    whatsappMsg = `34674150202`
    ,

// Imagen de fondo y sus opciones
    fonsPrincipal = `background_blue_v0011.jpg`,
    backgroundSize =  `cover`,
    backgroundRepeat = `no-repeat`,
    backgroundAttachment = `fixed`
    ,

// Tamaño de columna y estilo para las fotos de producto
    amplaria_fitxetes_subcategoria = `220px`
    ,
    estil_fitxetes = {
        width: amplaria_fitxetes_subcategoria,
        height: `auto`,
        display: `inline-block`,
        border: `1px rgba(0,0,0,.5) solid`,
        borderRadius: `.3em`,
        margin: `.4em`,
        background: `rgba(255, 255, 255, 0.25)`
    }

    ,

// Estilo para modulo de filtro
     filtres_posicio = `columna` // `columna` | `bloque`
     ,

// 1er Contenido libre em "Home"
    titulo_contenido = `Vendemos y distribuimos Calidad y Diseño 100% Colombiana.`

    ,

    bloque_contenido =

    <div className="col-sm-12">
        <div className="col-sm-4 col-xs-12" style={{marginBottom: `1em`}}>
            <img className="img-rounded img-responsive" src="./blusas-de-moda-latinmoda.jpg"/>    
        </div>
        <div className="col-sm-4 col-xs-12" style={{marginBottom: `1em`}}>
            <img className="img-rounded img-responsive" src="./blusas-colombianas-latinmoda.jpg"/>
        </div>
        <div className="col-sm-4 col-xs-12" style={{marginBottom: `1em`}}>
            <img className="img-rounded img-responsive" src="./blusas-latinmoda.jpg"/>
        </div>
    </div>
    // texto_contenido =

    //       <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       Donec convallis rutrum magna, a ornare est hendrerit id.
    //       Donec molestie pellentesque auctor. Etiam a dui consequat,
    //       faucibus lorem in, feugiat eros. Vivamus varius suscipit tellus
    //       quis scelerisque. Curabitur eu gravida nisl, non tincidunt tortor.
    //       Nulla sem massa, gravida vel diam non, cursus ullamcorper diam.
    //       Nunc mattis neque ullamcorper sem sagittis lacinia. In eget tellus
    //       vehicula velit posuere tristique ac sed turpis. Nam facilisis nisl
    //       ligula, et vehicula nisi fringilla eget. Suspendisse volutpat sem
    //       ac erat fermentum malesuada. Morbi dictum ipsum id mi scelerisque,
    //       sed aliquet sapien vehicula. Phasellus eu venenatis lacus.</p>

    //       <p>Duis venenatis aliquet magna, quis blandit nulla. Sed viverra aliquam
    //       leo quis posuere. Vivamus pretium orci in magna laoreet, eu consectetur
    //       enim fringilla. Pellentesque tempus magna malesuada sollicitudin
    //       vestibulum. Morbi magna diam, venenatis et risus nec, pellentesque
    //       vehicula purus. Fusce fermentum consequat nibh, sed cursus est tempor
    //       finibus. Nunc blandit arcu sapien. Etiam pharetra dui sed magna
    //       pellentesque tristique. Phasellus in feugiat orci. Nulla id ante metus.
    //       Phasellus ornare ipsum a euismod aliquet. Nulla semper purus nibh,
    //       a malesuada ex placerat et.</p></div>

    ,

    bloque_info =
    <div className="row">
        <section id="content-1-2" className="content-block content-1-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Más Información</h3>
                        <p className="lead">Contacta con nuestro personal especializado.</p>
                        <p>Click en la opción que mas te guste y contacta de inmediato con nuestros asesores para ayudarte en lo que necesitas.
                        Tendremos el gusto de atenderte.</p>
                        <div className="row">
                            <div className="col-sm-5 col-xs-12">
                                <a href="http://m.me/latinmoda" target="_blank" className="btn btn-block btn-primary"><span className="fa fa-cloud-upload"></span> FB Messenger</a>
                            </div>
                            <div className="col-sm-5 col-xs-12">
                                <a href="http://bit.ly/SAC_Latinmoda" target="_blank" className="btn btn-block btn-success"><span className="fa fa-check"></span> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-sm-5 col-sm-offset-1">
                        <img className="img-rounded img-responsive" src="./moda-latina-latinmoda.jpg"/>
                    </div>*/}
                </div>
            </div>
        </section>
    </div>

    ,

    slider =
    <div style={{border: `1em solid white`, borderRadius: `10px`, boxShadow: `8px 8px 20px #000`}}> 
        <div className="slider">   
            <div className="contenedor-img imagenes-slider">
                <img src="./blusas-de-moda-latinmoda.png"/>
                <img src="./blusas-sexis-latinmoda.png"/>
                <img src="./blusas-colombianas-de-moda.png"/>
            </div>
        </div>
    </div> 

    // video_latinmoda =
    //   <div className="container">
    //     <div style={{border: `1em solid white`, borderRadius: `10px`, boxShadow: `8px 8px 20px #000`}} className="row" >
    //       <div className="embed-responsive embed-responsive-16by9">
    //         <iframe className="embed-responsive-item"
    //             src="https://player.vimeo.com/video/240463716">
    //         </iframe>
    //       </div>
    //     </div>
    //   </div>
;
