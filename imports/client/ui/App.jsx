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
//import NavbarAdaptat from './NavBar.jsx';
import NavbarAdaptat from './NavBarExp.jsx';
import {
    //MostrariTOTS,
    MostrariSubcategoriaPRODUCTES
} from './Mostraris.jsx';
import * as Qs from './Queries.jsx';
import FootrAdaptat from './Footer.jsx';
import FreeContent from './FreeContent.jsx';
import Radium, { StyleRoot } from 'radium';
import MainContentProducte from './DetallProducte.jsx';

import * as Stylo from './StyledComponents.jsx';

FreeContent = Radium(FreeContent);


let variables = {
    apiUrl: "http://api.colombiaespassion.net",
    pageId: "1",
    categoryId: conf.categoryId,
    subcategoryId: "31",
    sizeId: "21",
    brandId: "4",
    colorId: "17",
    productId: ""
};



const NavbarAdaptatAmbSubcategories = graphql(Qs.SubcategoriesQuery, {
    options: {
        variables
    }
})(NavbarAdaptat);



class MarquesSUBCAT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectValue: this.props.filtreMarca || null,
            searchable: this.props.searchable,
            clearable: true
        };

        this.updateValue = this.updateValue.bind(this);

    }

    // static propTypes = {
    //     data: PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategoriaMARQUES: PropTypes.array
    //     }).isRequired
    // };

    static defaultProps = {
        ...Component.defaultProps,
        label: 'Marques:',
        searchable: true
    }

    // componentWillReceiveProps(nextProps) {
    //     const locationChanged = nextProps.location !== this.props.location
    // }

    updateValue(nouVal) {
        // this.props.history.push(`${location.pathname}/marca/${this.state.selectValue.label.trim().replace(" ", ".").toLowerCase()}.${this.state.selectValue.value}`, {
        //     selectValue: nouVal
        // });

        if (!location.pathname.includes("/marca/")) {
            (this.props.filtreMarca)
                ?
                    this.props.history.push(`${location.pathname}/marca/${this.props.filtreMarca.label.trim().replace(" ", ".").toLowerCase()}.${this.props.filtreMarca.value}`, {
                        selectValue: nouVal
                    })
                :
                    this.props.history.push(`${location.pathname}/marca/${nouVal.label.trim().replace(" ", ".").toLowerCase()}.${nouVal.value}`, {
                        selectValue: nouVal
                    })

            // this.setState({
            //     selectValue: nouVal
            // })
            ;
        } else {
            (nouVal)
                ? this.props.history.push(`../marca/${nouVal.label.trim().replace(" ", ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                })
                : (() => {
                    this.props.history.push(`..`);
                    this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                  })()
        }

        //console.log("Selected: ", nouVal);
        this.props.filtrantMarca(nouVal);
    }

    componentDidUpdate() {
        console.log("State: ", this.state);
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

        this.props.data.subcategoriaMARQUES.map(
            (v,i,a) => {
                arrOpts.push({
                    value: v.marcaId,
                    label: v.nom_marca
                });
            }
        )

        return (
            <div
                style={{
                    margin: `1em auto`
                }}
            >
                <Select
                    id="marca-select"
                    ref={(marcaSelect) => this.marcaSelect = marcaSelect}
                    options={arrOpts}
                    name="selected-marca"
                    onChange={this.updateValue}
                    value={this.state.selectValue}
                    placeholder="Filtrar por marca..."
                    searchable={this.state.searchable}
                    clearValueText="Desactivar el filtro"
                />
            </div>
        );
    }
}

class TallesSUBCAT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectValue: this.props.filtreTalla || null,
            searchable: this.props.searchable,
            clearable: true
        };

        this.updateValue = this.updateValue.bind(this);
    }

    // static propTypes = {
    //     data: PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategoriaTALLES: PropTypes.array
    //     }).isRequired
    // }

    static defaultProps = {
        ...Component.defaultProps,
        label: 'Talles:',
        searchable: true
    }


    updateValue(nouVal) {

        if (!location.pathname.includes("/talla/")) {
            (this.props.filtreTalla)
                ?
                    this.props.history.push(`${location.pathname}/talla/${this.props.filtreTalla.label.trim().replace(" ", ".").toLowerCase()}.${this.props.filtreTalla.value}`, {
                        selectValue: nouVal
                    })
                :
                    this.props.history.push(`${location.pathname}/talla/${nouVal.label.trim().replace(" ", ".").toLowerCase()}.${nouVal.value}`, {
                        selectValue: nouVal
                    })

            // this.setState({
            //     selectValue: nouVal
            // })
            ;
        } else {
            (nouVal)
                ? this.props.history.push(`../talla/${nouVal.label.trim().replace(" ", ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                })
                : (() => {
                    this.props.history.push(`..`);
                    this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                  })()
        }
                    // this.setState({
                    //     selectValue: nouVal
                    // });
        //console.log("Selected: ", nouVal);
        this.props.filtrantTalla(nouVal);
    }

    componentDidUpdate() {
        console.log("TallaState: ", this.state);
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

        this.props.data[this.props.data.variables.queryVariant].map(
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
                    id="talla-select"
                    options={arrOpts}
                    ref={(tallaSelect) => this.tallaSelect = tallaSelect}
                    options={arrOpts}
                    name="selected-talla"
                    onChange={this.updateValue}
                    value={this.state.selectValue}
                    placeholder="Filtrar por talla..."
                    searchable={this.state.searchable}
                />
            </div>
        );
    }
}

class ColorsSUBCAT extends Component {
    constructor(props) {
        super(props);

        this.filtraPerColor = this.filtraPerColor.bind(this);
    }

    // static propTypes = {
    //     data: PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategoriaCOLORS: PropTypes.array
    //     }).isRequired
    // }

    filtraPerColor(ev) {

                                if (!location.pathname.includes("/color/")) {
                                    (this.props.filtreColor)
                                    ?
                                    this.props.history.push(`../color/${this.props.filtreColor.label_color.trim().replace(" ", ".").toLowerCase()}.${this.props.filtreColor.colorId}`, {
                                        filtreColor: {
                                            colorId: ev.target.dataset['colorid'],
                                            nom_color: ev.target.dataset['nomcolor'],
                                            label_color: ev.target.dataset['labelcolor']
                                        }
                                    })
                                    :
                                    this.props.history.push(`../color/${ev.target.dataset['labelcolor'].trim().replace(" ", ".").toLowerCase()}.${ev.target.dataset['colorid']}`, {
                                        filtreColor: {
                                            colorId: ev.target.dataset['colorid'],
                                            nom_color: ev.target.dataset['nomcolor'],
                                            label_color: ev.target.dataset['labelcolor']
                                    }})

                                    // this.setState({
                                    //     selectValue: nouVal
                                    // })
                                    ;
                                } else {
                                    (ev.target.dataset['colorid'])
                                        ? this.props.history.push(`../color/${ev.target.dataset['labelcolor'].trim().replace(" ", ".").toLowerCase()}.${ev.target.dataset['colorid']}`, {
                                            filtreColor: {
                                                colorId: ev.target.dataset['colorid'],
                                                nom_color: ev.target.dataset['nomcolor'],
                                                label_color: ev.target.dataset['labelcolor']
                                        }})
                                        : this.props.history.push(location.pathname);
                                }

                                //console.log("Selected: ", nouVal);
            //    this.props.filtrantMarca(nouVal);



        ev.target.style.border = "3px solid fuchsia";
        this.props.filtrantColor(ev);
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
                    marginTop: `3em`,
                    display: `flex`,
                    justifyContent: `center`,
                    flexWrap: `wrap`
                }}
            >
                {
                    (() => [
                                this.props.data[this.props.data.variables.queryVariant].map(
                                    (v,i,a) => {
                                        return (
                                            (this.props.filtreColor && this.props.filtreColor.colorId === v.colorId)
                                            ?   <Link
                                                    key={i}
                                                    to={`../color/${v.label_color.trim().replace(" ", ".").toLowerCase()}.${v.colorId}`}
                                                >
                                                    <span
                                                        key={i}
                                                        style={{
                                                            display: `inline-block`,
                                                            border: `4px fuchsia solid`,
                                                            borderRadius: `1em`,
                                                            width: `20px`,
                                                            height: `20px`,
                                                            background: `${v.nom_color}`,
                                                            margin: `.2em`,
                                                            transform: `scale(1.4)`
                                                        }}
                                                        data-nomcolor={v.nom_color}
                                                        data-labelcolor={v.label_color}
                                                        data-colorid={v.colorId}

                                                        title={v.label_color}
                                                        onClick={this.filtraPerColor}
                                                    />
                                                </Link>
                                            :
                                                (this.props.filtreColor)
                                                ?
                                                    // (()=>{
                                                        //alert("location");
                                                        <Link
                                                            key={i}
                                                            to={`../color/${v.label_color.trim().replace(" ", ".").toLowerCase()}.${v.colorId}`}
                                                        >
                                                            <span
                                                                key={i}
                                                                style={{
                                                                    display: `inline-block`,
                                                                    border: `1px black solid`,
                                                                    borderRadius: `1em`,
                                                                    width: `20px`,
                                                                    height: `20px`,
                                                                    background: `${v.nom_color}`,
                                                                    margin: `.2em`
                                                                }}
                                                                data-nomcolor={v.nom_color}
                                                                data-labelcolor={v.label_color}
                                                                data-colorid={v.colorId}

                                                                title={v.label_color}
                                                                onClick={this.filtraPerColor}
                                                            />
                                                        </Link>
                                                    // })()
                                                :
                                                    <Link
                                                        key={i}
                                                        to={`${location.pathname}/color/${v.label_color.trim().replace(" ", ".").toLowerCase()}.${v.colorId}`}
                                                    >
                                                        <span
                                                            key={i}
                                                            style={{
                                                                display: `inline-block`,
                                                                border: `1px black solid`,
                                                                borderRadius: `1em`,
                                                                width: `20px`,
                                                                height: `20px`,
                                                                background: `${v.nom_color}`,
                                                                margin: `.2em`
                                                            }}
                                                            data-nomcolor={v.nom_color}
                                                            data-labelcolor={v.label_color}
                                                            data-colorid={v.colorId}

                                                            title={v.label_color}
                                                            onClick={this.filtraPerColor}
                                                        />
                                                    </Link>
                                        );
                                    }
                                )
                            ,
                                (this.props.filtreColor)
                                    ?
                                         <span
                                            key="x"
                                            style={{
                                                display: `flex`,
                                                border: `4px white solid`,
                                                borderRadius: `1em`,
                                                minWidth: `20px`,
                                                height: `20px`,
                                                background: `fuchsia`,
                                                alignItems: `center`,
                                                padding: `12px 1px`,
                                                paddingRight: `0px`,
                                                color: `white`,
                                                fontWeight: `bold`,
                                                fontSize: `2em`,
                                                fontFamily: `initial`,
                                                margin: `auto 2px`,
                                                cursor: `pointer`,
                                                marginTop: `-3px`
                                            }}
                                            data-nomcolor=""
                                            data-labelcolor=""
                                            data-colorid=""

                                            title="Desactivar el filtro"
                                            onClick={() => {
                                                this.props.history.push(`..`);
                                                //alert(location.pathname.substring(0,location.pathname.length-1));
                                                this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                                                //alert(location.pathname.substr(location.pathname.length - 1, 1));
                                                // this.props.history.replace(`${location.pathname}/..`.substr(`${location.pathname}/..`.length - 1, 1));
                                                this.props.colorIdAVariables(null);
                                            }}
                                        >&times;
                                        </span>
                                    :
                                        null
                        ]
                        // ()
                        //     ?

                        //return arrayColors;
                        //     :
                        // ;

                    )()
                }

            </div>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            variables,
            filtreMarca: null,
            filtreTalla: null,
            filtreColor: null
        };

        this.variables = variables;

        //this.filtreMarca = null;

        this.subcategoryIdAlState = this.subcategoryIdAlState.bind(this);
        this.marcaIdAVariables = this.marcaIdAVariables.bind(this);
        this.tallaIdAVariables = this.tallaIdAVariables.bind(this);
        this.colorIdAVariables = this.colorIdAVariables.bind(this);
        //this.productIdAlState = this.productIdAlState.bind(this);
        this.filtrantMarca = this.filtrantMarca.bind(this);
        this.filtrantTalla = this.filtrantTalla.bind(this);
        this.filtrantColor = this.filtrantColor.bind(this);
        this.desactivaFiltres = this.desactivaFiltres.bind(this);
    }

    marcaTallaUpdate(m, t) {
        this.props.history.push(`../marca-talla/${this.props.filtreMarca.label.trim().replace(" ", ".").toLowerCase()}-${this.props.filtreTalla.label.trim().replace(" ", ".").toLowerCase()}.${this.props.filtreMarca.value}.${this.props.filtreTalla.value}`);
    }

    marcaColorUpdate(m, c) {

    }

    tallaColorUpdate(t, c) {

    }




    marcaTallaColorUpdate(m, t, c) {

    }




    subcategoryIdAlState(ev) {
        console.dir(ev.target.dataset);
        let
            variables = Object.assign({}, this.state.variables, {subcategoryId: ev.target.dataset.subcategoryId})
        ;

        this.setState({
            variables
        });
    }

    marcaIdAVariables(marcaId) {
        let
            variables = Object.assign({}, this.state.variables, {brandId: marcaId})
        ;

        this.setState({
            variables
        });
    }

    tallaIdAVariables(tallaId) {
        let
            variables = Object.assign({}, this.state.variables, {sizeId: tallaId})
        ;

        this.setState({
            variables
        });
    }

    colorIdAVariables(color) {
        let
            variables = Object.assign({}, this.state.variables, {color})
        ;
        this.setState({
            filtreColor: color,
            variables
        });
    }

    filtrantMarca(marca) {
        marca ? this.marcaIdAVariables(marca.value) : null;
        this.setState({
            filtreMarca: marca
        });
    }

    filtrantTalla(talla) {
        talla ? this.tallaIdAVariables(talla.value) : null;
        this.setState({
            filtreTalla: talla
        });
    }

    filtrantColor(ev) {
        ev && ev.target.dataset['colorid']
            ?  (()=>{
                    this.colorIdAVariables(ev.target.dataset['colorid']);
                    this.setState({
                        filtreColor: {
                            colorId: ev.target.dataset['colorid'],
                            nom_color: ev.target.dataset['nomcolor'],
                            label_color: ev.target.dataset['labelcolor']
                        }
                    });
                })()
            : this.setState({
                filtreColor: null
            });
    }

    desactivaFiltres() {
        this.setState({
            filtreColor: null,
            filtreTalla: null,
            filtreMarca: null
        })
    }

    render() {
        let
            // MostrariAmbTOTSElsProductes = graphql(CategoriaPRODUCTESQuery, {
            //     options: {
            //         variables: this.state.variables
            //     }
            // })(MostrariTOTS),

            MarquesSubCategoria = graphql(Qs.SubCategoriaMARQUESQuery, {
                options: () => {
                //    console.dir("thisVars:", this.variables);
                    return ({
                        variables: this.variables
                    });
                }
            })(MarquesSUBCAT),

            TallesSubCategoriaTOTS = graphql(Qs.SubCategoriaTALLESQuery, {
                options: () => {
                    //console.dir("thisVars:", this.variables);
                    let
                        variables = Object.assign(this.variables, {queryVariant: "subcategoriaTALLES"});
                    return ({
                        variables: this.variables
                    });
                }
            })(TallesSUBCAT),

            TallesSubCategoriaMARCA = graphql(Qs.MarcaSubCategoriaTALLESQuery, {
                options: () => {
                    //console.dir("thisVars:", this.variables);
                    let
                        variables = Object.assign(this.variables, {queryVariant: "marcaSubcategoriaTALLES"});
                    return ({
                        variables: this.variables
                    });
                }
            })(TallesSUBCAT)

            ColorsSubCategoriaTOTS = graphql(Qs.SubCategoriaCOLORSQuery, {
                options: () => {
                    //console.dir("thisVars:", this.variables);
                    let
                        variables = Object.assign(this.variables, {queryVariant: "subcategoriaCOLORS"});
                    return ({
                        variables: this.variables
                    });
                }
            })(ColorsSUBCAT),

            ColorsSubCategoriaMARCA = graphql(Qs.MarcaSubcategoriaCOLORSQuery, {
                options: () => {
                    //console.dir("thisVars:", this.variables);
                    let
                        variables = Object.assign(this.variables, {queryVariant: "marcaSubcategoriaCOLORS"});
                    return ({
                        variables: this.variables
                    });
                }
            })(ColorsSUBCAT),

            MostrariAmbProductes = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                options: () => {
                    //console.dir("thisVars:", this.variables);
                    return ({
                        variables: this.variables
                    });
                }
            })(MostrariSubcategoriaPRODUCTES),


// Falta definir les consultes correctes DE FILTRAT, de moment
// prenem ProductesQuery com a base:
  //ProductesMARCAQuery = ProductesTALLAQuery = ProductesQuery,

            // MostrariAmbProductesMARCA = graphql(ProductesMARCAQuery, {
            //     options: {
            //         variables: this.state.variables
            //     }
            // })(MostrariSubcategoriaPRODUCTES),
            //
            // MostrariAmbProductesTALLA = graphql(ProductesTALLAQuery, {
            //     options: {
            //         variables: this.state.variables
            //     }
            // })(MostrariSubcategoriaPRODUCTES),

//>>>>>>>>>>>>>>>>>>>>>>><< FOOTR - Un per a cada tipus de consulta
            FootrAdaptatAmbSubcategories = graphql(Qs.SubcategoriesQuery, {
                options: {
                    variables
                }
            })(FootrAdaptat)
        ;



        class BuscadorColumnaSUBCAT extends Component {
            constructor(props) {
                super(props);


            }

            render() {
                return (
                    <div
                        style={conf.estil_filtres}
                    >
                    {
                        (this.props.filtreTalla || this.props.filtreMarca || this.props.filtreColor)
                            ?   <span
                                    style={{
                                        top: `.5em`,
                                        right: `0`,
                                        position: `absolute`,
                                        border: `1px white solid`,
                                        borderRadius: `1em`,
                                        width: `20px`,
                                        height: `20px`,
                                        background: `fuchsia`,
                                        color: `white`,
                                        margin: `.2em`,
                                        textAlign: `center`,
                                        display: `grid`,
                                        alignItems: `center`,
                                        fontFamily: `v`,
                                        cursor: `pointer`
                                    }}
                                    title="Desactivar filtros"
                                    onClick={this.props.desactivaFiltres}
                                >&times;
                                </span>
                            : null
                    }
                        <MarquesSubCategoria {...this.props} />
                        {   (this.props.filtreMarca)
                                ?   <TallesSubCategoriaMARCA {...this.props} />
                                :   <TallesSubCategoriaTOTS {...this.props} />
                        }
                        {   (this.props.filtreMarca)
                                ?   <ColorsSubCategoriaMARCA {...this.props} />
                                :   <ColorsSubCategoriaTOTS {...this.props} />
                        }
                    </div>
                );
            }
        }

        class MainContentSubCat extends Component {
            constructor(props, context) {
                super(props, context);
            }

            render() {
                return (
                    [
                        <div
                            key="columna"
                            style={{
                                position: `relative`,
                                gridArea: conf.filtres_posicio
                            }}
                        >
                            <div
                                style={{
                                    position: `-webkit-sticky`,
                                    position: `sticky`,
                                    top: `20px`
                                }}
                            >
                                <BuscadorColumnaSUBCAT {...this.props} />
                            </div>
                        </div>
                    ,
                        <div
                            key="content"
                            style={{
                                gridArea: `content`
                            }}
                        >
                            <MostrariAmbProductes {...this.props} />
                        </div>
                    ]
                );
            }
        }

        let

            FCMediaVideo = () =>
                <FreeContent>
                    <div
                        style={{
                                '@media (max-width: 1000px)': {
                                margin: 'auto'
                                }
                        }}>
                        {conf.video_latinmoda}
                    </div>
                </FreeContent>
            ,

            SubTituloPagina = () =>
                <FreeContent>
                    <div
                        style={{
                            color: 'black',
                                '@media (max-width: 900px)': {
                                color: 'fuchsia'
                                }
                        }}>
                        <h2>Ropa Colombiana en Europa</h2>
                    </div>
                </FreeContent>

        ;

//////////// index ////////////

        return (
            <Router>
                <Stylo.MainLayout>
                    <Route path="/"
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

                                    filtrantMarca={this.filtrantMarca}
                                    filtreMarca={this.state.filtreMarca}

                                    filtrantTalla={this.filtrantTalla}
                                    filtreTalla={this.state.filtreTalla}

                                    filtrantColor={this.filtrantColor}
                                    filtreColor={this.state.filtreColor}
                                />
                            </div>
                        )}
                    />

                    <Route path="/botones"
                        render={() => (
                            <div>
                                <Stylo.Button className="btn btn-danger">
                                    flyeslkjflaksj
                                </Stylo.Button>

                                <Stylo.TomatoButton>
                                    AGILLLL
                                </Stylo.TomatoButton>
                            </div>
                        )}
                    />

                    <Route exact path="/" render={() => (
                        <div className="container"
                            style={{
                                gridArea: `present`
                            }}
                        >

                            {/*Titulo de la Pagina*/}
                            <StyleRoot>
                                <SubTituloPagina />
                            </StyleRoot>

                            <StyleRoot>
                                <FCMediaVideo />
                            </StyleRoot>

                                {/*<FreeContent children={conf.video_latinmoda} />*/} {/*Asi se comenta en JSX, entre llaves.*/}

                            <FreeContent>
                                {conf.primer_contingut}
                            </FreeContent>

                            <FreeContent>
                                <div
                                    style={{
                                        margin: `50px`
                                    }}
                                >
                                    Ací voldria un paràgraf... que posaré ara:
                                    <p> Ja veus... podria passar-me el dia escrivint en HTML pla... tal volta deguera fer-ho.
                                    </p>
                                </div>
                            </FreeContent>

                            <FreeContent>
                                {conf.segon_lliure}
                            </FreeContent>

                            <FreeContent>
                                {conf.vimeoEx}
                            </FreeContent>

                        </div>
                    )}/>

                    <Route path="/categoria/:subcategoryId" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.subcategoryId.match(/\d+$/)[0]
                            }),

                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                options: {
                                    variables
                                }
                            })(MainContentSubCat)
                        ;

                        this.variables = variables;

                        return (
                            <MainContentSUBCAT
                                marcaIdAVariables={this.marcaIdAVariables}
                                tallaIdAVariables={this.tallaIdAVariables}
                                colorIdAVariables={this.colorIdAVariables}

                                filtrantMarca={this.filtrantMarca}
                                filtreMarca={this.state.filtreMarca}

                                filtrantTalla={this.filtrantTalla}
                                filtreTalla={this.state.filtreTalla}

                                filtrantColor={this.filtrantColor}
                                filtreColor={this.state.filtreColor}

                                match={match}
                                history={history}
                                location={location}

                                desactivaFiltres={this.desactivaFiltres}
                            />
                        );
                    }}/>

                    <Route exact path="/producto/:productId" render={({ match }) => {

                        let
                            variables = Object.assign({}, this.state.variables, {
                                productId: match.params.productId.match(/\d+$/)[0]
                            }),

                            MainProducteDETALLS = graphql(ProducteDETALLSQuery, {
                                options: {
                                    variables
                                }
                            })(MainContentProducte)
                        ;

                        return (
                            <MainProducteDETALLS
                                productId={match.params.productId}
                                productIdAlState={this.productIdAlState}
                            />
                        );
                    }
                }/>

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
                </Stylo.MainLayout>
            </Router>
        );
    }
};
