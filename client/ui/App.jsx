import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Masonry from 'react-masonry-component';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {
    Card, CardTitle, CardText, CardActions, Button as ButtonCard,
    Footer, FooterSection, FooterDropDownSection, FooterLinkList
} from  'react-mdl';
import sanitizeHtml from 'sanitize-html-react';
//import StackGrid from "react-stack-grid";
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

const
    CategoriaMARQUESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaMARQUES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                marcaId
                nom_marca
             }
    }`,

    CategoriaTALLESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaTALLES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                tallaId
                nom_talla
                label_talla
                orden_talla
                publicar_talla
             }
    }`,

    CategoriaCOLORSQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaCOLORS(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                colorId
                nom_color
                label_color
             }
    }`,

    CategoriaPRODUCTESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaPRODUCTES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
               	id
        		referencia
                descripcion
                categoria
                marca
                precioBase
                proveedor
                descripcion_long_es
                nom_marca
                logo_marca
                nom_categoria
                imagen_principal
                gallery {
                  id
                  producto
                  imagen
                  imagen_min
                  type
                  ppal
                }
                galleryColors {
                  id
                  fotoId
                  colorId
                  num_color
                  label_color
                  imagen_min
                }
             }
    }`,

    TallesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaTALLES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            )
    }`,

    ColorsQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaCOLORS(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            )
    }`,

    MarquesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaMARQUES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            )
    }`,

    ProductesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaPRODUCTES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ) {
                id
                referencia
                descripcion
                categoria
                marca
                precioBase
                precio2
                precio3
                precio4
                precioMiscelaneo
                proveedor
                descripcion_long_es
                nom_marca
                logo_marca
                nom_categoria
                imagen_principal
                gallery {
                    id
                    producto
                    imagen
                    imagen_min
                    type
                    ppal
                }
                galleryColors {
                    id
                    fotoId
                    colorId
                    num_color
                    label_color
                    imagen_min
                }
          }
    }`,

    SubcategoriesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategories(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ) {
                categoriaId
                nom_categoria
            }
        }`
    ;

let variables = {
    apiUrl: "http://api.colombiaespassion.net",
    pageId: "1",
    categoryId: "12",
    subcategoryId: "31",
    sizeId: "21",
    brandId: "4",
    colorId: "17"
};

class NavbarAdaptat extends Component {
    constructor(props) {
        super(props);
    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            subcategories: PropTypes.array
        }).isRequired
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
            //console.log(this.props.data.error)
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Logo</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/">
                                <NavItem eventKey="eK">Inicio</NavItem>
                            </LinkContainer>
                            {
                                this.props.data.subcategories.map(
                                    (v,i,a) => {
                                        return (
                                            <LinkContainer key={i} to={`/${v.nom_categoria.replace(/\s+/g, '')}`}>
                                                <NavItem
                                                    eventKey={i}
                                                    onClick={this.props.subcategoryIdAlState}
                                                    data-subcategory-id={v.categoriaId}
                                                >
                                                    {v.nom_categoria}
                                                </NavItem>
                                            </LinkContainer>
                                        )
                                    }
                                )
                            }
                            <NavDropdown
                                eventKey={this.props.data.subcategories.length + 1}
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                {
                                    this.props.data.subcategories.map(
                                        (v,i,a) => {
                                            return (
                                                <MenuItem key={i} eventKey={`${a.length + 1}.${i}`}>{v.nom_categoria}</MenuItem>
                                            )
                                        }
                                    )
                                }
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

class MostrariTOTS extends Component {
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
                <h1>Productes de la categoria 2...</h1>
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

class MostrariSubcategoriaPRODUCTES extends Component {
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
                <h1>Productes de la categoria 2...</h1>
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

const NavbarAdaptatAmbSubcategories = graphql(SubcategoriesQuery, {
    options: {
        variables
    }
})(NavbarAdaptat);



class MarquesTOTS extends Component {
    constructor(props) {
        super(props);
    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            categoriaMARQUES: PropTypes.array
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
                <ul>
                    {
                        this.props.data.categoriaMARQUES.map(
                            (v,i,a) => {
                                return <li key={i}>{v.nom_marca}</li>
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

class TallesTOTS extends Component {
    constructor(props) {
        super(props);
    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            categoriaTALLES: PropTypes.array
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
                <ul>
                    {
                        this.props.data.categoriaTALLES.map(
                            (v,i,a) => {
                                return <li key={i}>{v.nom_talla}</li>
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

class ColorsTOTS extends Component {
    constructor(props) {
        super(props);
    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            categoriaCOLORS: PropTypes.array
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
                <ul>
                {
                    this.props.data.categoriaCOLORS.map(
                        (v,i,a) => {
                            return (
                                <li key={i}>
                                    <span
                                        style={{
                                            display: `inline-block`,
                                            border: `1px black solid`,
                                            width: `20px`,
                                            height: `20px`,
                                            background: `${v.nom_color}`
                                        }}
                                    />
                                </li>
                            );
                        }
                    )
                }
                </ul>
            </div>
        );
    }
}

class FootrAdaptat extends Component {
    constructor(props) {
        super(props);

    }

    static: propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            subcategories: PropTypes.array
        }).isRequired
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
            //console.log(this.props.data.error)
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            <div>
                <Footer size="mega">
                    <FooterSection type="middle">
                        <FooterDropDownSection title="Features">
                            <FooterLinkList>
                                <a href="#">About</a>
                                <a href="#">Terms</a>
                                <a href="#">Partners</a>
                                <a href="#">Updates</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Details">
                            <FooterLinkList>
                                <a href="#">Specs</a>
                                <a href="#">Tools</a>
                                <a href="#">Resources</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Technology">
                            <FooterLinkList>
                                <a href="#">How it works</a>
                                <a href="#">Patterns</a>
                                <a href="#">Usage</a>
                                <a href="#">Products</a>
                                <a href="#">Contracts</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="FAQ">
                            <FooterLinkList>
                                <a href="#">Questions</a>
                                <a href="#">Answers</a>
                                <a href="#">Contact Us</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                    </FooterSection>
                    <FooterSection type="bottom" logo="Title">
                        <FooterLinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>

                    <FacebookShareButton url="http://www.facebook.com/latinmoda" />
                    <TwitterShareButton url="http://twitter.com/latinmoda"/>
                </Footer>
            </div>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            variables
        };

        this.subcategoryIdAlState = this.subcategoryIdAlState.bind(this);
    }

    subcategoryIdAlState(ev) {
        console.dir(ev.target.dataset);
        let
            variables = Object.assign({}, this.state.variables, {subcategoryId: ev.target.dataset.subcategoryId});

        this.setState({
            variables
        });
    }

    render() {

        let
            MostrariAmbTOTSElsProductes = graphql(CategoriaPRODUCTESQuery, {
                options: {
                    variables: this.state.variables
                }
            })(MostrariTOTS),

            MarquesTOTSCategoria = graphql(CategoriaMARQUESQuery, {
                options: {
                    variables: this.state.variables
                }
            })(MarquesTOTS),

            TallesTOTSCategoria = graphql(CategoriaTALLESQuery, {
                options: {
                    variables: this.state.variables
                }
            })(TallesTOTS),

            ColorsTOTSCategoria = graphql(CategoriaCOLORSQuery, {
                options: {
                    variables: this.state.variables
                }
            })(ColorsTOTS),

            MostrariAmbProductes = graphql(ProductesQuery, {
                options: {
                    variables: this.state.variables
                }
            })(MostrariSubcategoriaPRODUCTES),

//>>>>>>>>>>>>>>>>>>>>>>><< FOOTR - Un per a cada tipus de consulta
            FootrAdaptatAmbSubcategories = graphql(SubcategoriesQuery, {
                options: {
                    variables
                }
            })(FootrAdaptat)
        ;

        class BuscadorColumnaTOTS extends Component {
            constructor(props) {
                super(props);


            }

            render() {
                return (
                    <div>
                        <MarquesTOTSCategoria />
                        <TallesTOTSCategoria />
                        <ColorsTOTSCategoria />
                    </div>
                );
            }
        }

        return (
            <Router>
                <div
                    style={{
                        height: `100%`,
                        display: `grid`,
                        gridTemplateAreas: `
                            "navbar navbar navbar navbar"
                            "columna content content content"
                            "footer footer footer footer"
                        `

                    }}
                >
                    <Route path="/" render={() => (
                        <div
                            style={{
                                gridArea: `navbar`
                            }}
                        >
                            <NavbarAdaptatAmbSubcategories
                                subcategoryIdAlState={this.subcategoryIdAlState}
                            />
                        </div>
                    )}/>
                    <Route path="/" render={() => (
                        <div
                            style={{
                                position: `relative`,
                                gridArea: `columna`
                            }}
                        >
                            <BuscadorColumnaTOTS />
                        </div>
                    )}/>
                    <Route exact path="/" render={() => (
                        <div
                            style={{
                                gridArea: `content`
                            }}
                        >
                            <MostrariAmbTOTSElsProductes />
                        </div>
                    )}/>
                    <Route exact path="/:categoryId" render={() => (
                        <div
                            style={{
                                gridArea: `content`
                            }}
                        >
                            <MostrariAmbProductes />
                        </div>
                    )}/>
                    <Route path="/" render={() => (
                        <div
                            style={{
                                gridArea: `footer`
                            }}
                        >
                            <FootrAdaptatAmbSubcategories
                                subcategoryIdAlState={this.subcategoryIdAlState}
                            />
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
};
