import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { graphql } from 'react-apollo';
import {
    Button,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {
    Card, CardTitle, CardText, CardActions, Button as ButtonCard,
    Footer, FooterSection, FooterDropDownSection, FooterLinkList
} from  'react-mdl';
import sanitizeHtml from 'sanitize-html-react';
//import StackGrid from "react-stack-grid";

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as conf from './config.jsx';
import NavbarAdaptat from './NavBar.jsx';
import {
    MostrariTOTS,
    MostrariSubcategoriaPRODUCTES
} from './Mostraris.jsx';
import {
    CategoriaMARQUESQuery,
    CategoriaTALLESQuery,
    CategoriaCOLORSQuery,
    CategoriaPRODUCTESQuery,
    TallesQuery,
    ColorsQuery,
    MarquesQuery,
    ProductesQuery,
    SubcategoriesQuery
} from './Queries.jsx';
import FootrAdaptat from './Footer.jsx';
import FreeContent from './FreeContent.jsx';


let variables = {
    apiUrl: "http://api.colombiaespassion.net",
    pageId: "1",
    categoryId: conf.categoryId,
    subcategoryId: "31",
    sizeId: "21",
    brandId: "4",
    colorId: "17"
};



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

        let arrOpts = [];

        this.props.data.categoriaMARQUES.map(
            (v,i,a) => {
                arrOpts.push({
                    value: v.marcaId,
                    label: v.nom_marca
                })
            }
        )

        return (
            <div
                style={{
                    margin: `1em auto`
                }}
            >
                <Select
                    options={arrOpts}
                    onChange={(val) => alert(val.label)}
                    placeholder="Filtrar por marca..."
                />
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

        let arrOpts = [];

        this.props.data.categoriaTALLES.map(
            (v,i,a) => {
                arrOpts.push({
                    value: v.tallaId,
                    label: v.nom_talla
                })
            }
        )

        return (
            <div
                style={{
                    margin: `3em auto`
                }}
            >
                <Select
                    options={arrOpts}
                    onChange={(val) => alert(val.label)}
                    placeholder="Filtrar por talla..."
                />
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
            <div
                style={{
                    marginTop: `3em`
                }}
            >
                {
                    this.props.data.categoriaCOLORS.map(
                        (v,i,a) => {
                            return (
                                <span
                                    key={i}
                                    style={{
                                        display: `inline-block`,
                                        border: `1px black solid`,
                                        width: `20px`,
                                        height: `20px`,
                                        background: `${v.nom_color}`,
                                        margin: `.2em`
                                    }}
                                    title={v.label_color}
                                />
                            );
                        }
                    )
                }

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
                    <div
                        style={{
                            background: `rgba(255,255,255,.7)`,
                            width: `90%`,
                            maxWidth: `400px`,
                            margin: `14em 3em`,
                            padding: `2em`,
                            borderRadius: `1em`
                            // ,
                            // position: `fixed`
                        }}
                    >

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
                        gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                        gridTemplateAreas: `
                            "navbar navbar navbar navbar"
                            "columna content content content"
                            "footer footer footer footer"
                        `,
                        backgroundImage: `url(${conf.fonsPrincipal})`,
                        backgroundSize: conf.backgroundSize,
                        backgroundRepeat: conf.backgroundRepeat,
                        backgroundAttachment: conf.backgroundAttachment
                    }}
                >
                    <Route
                        path="/"
                        render={() => (
                            <div
                                style={{
                                    gridArea: `navbar`
                                }}
                            >
                                <NavbarAdaptatAmbSubcategories
                                    subcategoryIdAlState={this.subcategoryIdAlState}
                                    fluid
                                    inverse
                                />
                            </div>
                        )}
                    />
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

                            <FreeContent children={conf.primer_contingut} />

                            <FreeContent>
                                {conf.primer_contingut}
                            </FreeContent>

                            <FreeContent>
                                <div>
                                    Ací voldria un paràgraf... que posaré ara:
                                    <p> Ja veus... podria passar-me el dia escrivint en HTML pla... tal volta deguera fer-ho.
                                    </p>
                                </div>
                            </FreeContent>

                            <FreeContent>
                                {conf.segon_lliure}
                            </FreeContent>
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
