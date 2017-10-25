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


const
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
    categoryId: "18",
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
                                        <LinkContainer key={i} to={`/categoria/${v.categoriaId}`}>
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
        );
    }
}

class Mostrari extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
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
                                if (i < 40) {
                                    return (
                                        <li key={i}
                                            style={{
                                                width: `100px`,
                                                display: `inline-block`
                                            }}
                                        >
                                            Referencia: {v.referencia} - Nombre: {v.descripcion}
                                            <img
                                                src={`http://cashflow.colombiaespassion.net/productos/${v.imagen_principal}`}
                                                alt={v.descripcion}
                                                title={v.descripcion_long_es}
                                                style={{
                                                    width: `100px`
                                                }}
                                            />
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
            MostrariAmbProductes = graphql(ProductesQuery, {
                options: {
                    variables: this.state.variables
                }
            })(Mostrari)
        ;

        return (
            <Router>
                <div>
                    <Route path="/" render={() => (
                        <NavbarAdaptatAmbSubcategories subcategoryIdAlState={this.subcategoryIdAlState} />
                    )}/>
                    <Route exact path="/" render={() => (
                        <div>
                            <h1>Component INICIAL!</h1>
                            <div>
                                <h2>Weeeee</h2>
                            </div>
                        </div>
                    )}/>
                    <Route path="/categoria/:categoryId" render={({ match }) => {
                        return <MostrariAmbProductes />;
                    }}/>
                </div>
            </Router>
        );
    }
};
