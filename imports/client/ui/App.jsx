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
//import Radium, { StyleRoot } from 'radium';
import MainContentProducte from './DetallProducte.jsx';

import * as Stylo from './StyledComponents.jsx';

//FreeContent = Radium(FreeContent);


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
        // this.props.history.push(`${location.pathname}/marca/${this.state.selectValue.label.trim().replace(/ /g, ".").toLowerCase()}.${this.state.selectValue.value}`, {
        //     selectValue: nouVal
        // });

        const
            fM = this.props.filtreMarca ? "1" : "0",
            fT = this.props.filtreTalla ? "1" : "0",
            fC = this.props.filtreColor ? "1" : "0"
        ;

        switch (`${fM}${fT}${fC}`) {
            case "111": {
                // alert("M111");
                 (nouVal)
                    ? (() => {
                            this.props.history.push(`../marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                            selectValue: nouVal
                            });
                            this.props.filtrantTalla(null);
                            this.props.filtrantColor(null);
                        }
                    )()
                    : (() => {
                        this.props.history.push(`../talla-color/${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreTalla.value}.${this.props.filtreColor.colorId}`, {
                            selectValue: null
                        });
                        this.props.filtrantMarca(null);
                    })()
                break;
            }
            case "110": {
                // alert("M110");
                   (nouVal)
                       ? this.props.history.push(`../marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                           selectValue: nouVal
                       })
                       : (() => {
                           this.props.history.push(`..`);
                           this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                       })();

                       this.props.filtrantTalla(null);
                break;
            }
            case "101": {
                // alert("M101");
                (nouVal)
                    ?
                        this.props.history.push(`../marca-color/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}.${this.props.filtreColor.colorId}`, {
                            selectValue: nouVal
                        })
                    :
                    //    this.props.filtrantColor(null);
                        this.props.history.push(`../color/${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreColor.colorId}`)
                    ;
                this.props.filtrantMarca(null);
                break;
            }
            case "100": {
                // alert("M100");
                (nouVal)
                    ? this.props.history.push(`../marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                        selectValue: nouVal
                    })
                    : (() => {
                        this.props.history.push(`..`);
                        this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                    })();
                break;
            }
            case "011": {
                // alert("M011");
                this.props.history.push(`../marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                });
                this.props.filtrantTalla(null);
                this.props.filtrantColor(null);
                break;
            }
            case "010": {
                // alert("M010");
                this.props.history.push(`../marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                });
                this.props.filtrantTalla(null);
                break;
            }
            case "001": {
                // alert("M001");
                this.props.history.push(`../marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                });
                this.props.filtrantColor(null);
                break;
            }
            case "000": {
                // alert("M000");
                // Cap filtre previ. Afegim /marca/x.Id a la URL i apliquem el filtre de la Marca.
                this.props.history.push(`${location.pathname}/marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                });
                break;
            }
        }

        // this.props.history.push(`${location.pathname}/marca/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}`, {
        //     selectValue: nouVal
        // })

        // if (!location.pathname.includes("/marca/")) {
        //     (this.props.filtreMarca)
        //          ?
        //
        //
        //          : null // this.props.history.push(`${location.pathname}/marca/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
        //             //     selectValue: nouVal
        //             // })
        //
        //     // this.setState({
        //     //     selectValue: nouVal
        //     // })
        //     ;
    //    } else {

    //    }

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
        const
            fM = this.props.filtreMarca ? "1" : "0",
            fT = this.props.filtreTalla ? "1" : "0",
            fC = this.props.filtreColor ? "1" : "0"
        ;

        switch (`${fM}${fT}${fC}`) {
            case "111": {
                (nouVal)
                   ?
                   this.props.history.push(`../marca-talla-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${nouVal.value}.${this.props.filtreColor.colorId}`,
                           {
                               selectValue: nouVal
                           })
                    :
                    this.props.history.push(`../marca-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${this.props.filtreColor.colorId}`, {
                        selectValue: null
                    });
                break;
            }
            case "110": {
                (nouVal)
                   ?   this.props.history.push(`../marca-talla/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${nouVal.value}`, {
                           selectValue: nouVal
                       })
                   : (() => {
                       // this.props.history.push(`..`);
                       // this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                       this.props.history.push(`../marca/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}`, {
                               selectValue: null
                           })
                   })();
                break;
            }
            case "101": {
                //alert("T101");
                this.props.history.push(`../marca-talla-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${nouVal.value}.${this.props.filtreColor.colorId}`,
                        {
                            selectValue: nouVal
                        });
                break;
            }
            case "100": {
                //alert("T100");
                (nouVal)
                   ?   this.props.history.push(`../marca-talla/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${nouVal.value}`, {
                           selectValue: nouVal
                       })
                   : (() => {
                       this.props.history.push(`..`);
                       this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                   })();
                break;
            }
            case "011": {
                //alert("T011");
                (nouVal)
                   ?
                    this.props.history.push(`../talla-color/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}.${this.props.filtreColor.colorId}`, {
                        selectValue: nouVal
                    })
                    :
                    this.props.history.push(`../color/${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreColor.colorId}`, {
                        selectValue: null
                    });
                break;
            }
            case "010": {
            //    alert("T010");
                (nouVal)
                   ?   this.props.history.push(`../talla/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                           selectValue: nouVal
                       })
                   : (() => {
                       this.props.history.push(`..`);
                       this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                   })();
                break;
            }
            case "001": {
                //alert("T001");
                this.props.history.push(`../talla-color/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}.${this.props.filtreColor.colorId}`, {
                    selectValue: nouVal
                })
                break;
            }
            case "000": {
                //alert("T000");
                this.props.history.push(`${location.pathname}/talla/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
                    selectValue: nouVal
                });
                break;
            }
        }

// if (!location.pathname.includes("/talla/")) {
//     (this.props.filtreTalla)
//         ?
//             this.props.history.push(`${location.pathname}/talla/${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreTalla.value}`, {
//                 selectValue: nouVal
//             })
//         :
//             this.props.history.push(`${location.pathname}/talla/${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}.${nouVal.value}`, {
//                 selectValue: nouVal
//             })
//
//     // this.setState({
//     //     selectValue: nouVal
//     // })
//     ;
// } else {
//     (nouVal)
//         ? null
//         : (() => {
//             this.props.history.push(`..`);
//             this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
//           })()
// }
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
                    clearValueText="Desactivar el filtro"
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

    componentWillReceiveProps(nextProps) {
//        alert(`fM: ${nextProps.filtreMarca} \n fT: ${nextProps.filtreTalla} \n fC: ${nextProps.filtreColor}`);
    }

    filtraPerColor(ev) {

        // const
        //     fM = this.props.filtreMarca ? "1" : "0",
        //     fT = this.props.filtreTalla ? "1" : "0",
        //     fC = this.props.filtreColor ? "1" : "0"
        // ;
        //
        // switch (`${fM}${fT}${fC}`) {
        //     case "111": {
        //         alert("C111");
        //         break;
        //     }
        //     case "110": {
        //         alert("C110");
        //         break;
        //     }
        //     case "101": {
        //         alert("C101");
        //         break;
        //     }
        //     case "100": {
        //         //alert("C100");
        //         this.props.history.push(`../marca-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${ev.target.dataset['labelcolor'].trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${ev.target.dataset['colorid']}`, {
        //             filtreColor: {
        //                 colorId: ev.target.dataset['colorid'],
        //                 nom_color: ev.target.dataset['nomcolor'],
        //                 label_color: ev.target.dataset['labelcolor']
        //         }});
        //         break;
        //     }
        //     case "011": {
        //         alert("C011");
        //         break;
        //     }
        //     case "010": {
        //         alert("C010");
        //         break;
        //     }
        //     case "001": {
        //     //    alert("C001");
        //         break;
        //     }
        //     case "000": {
        //     //    alert("C000");
        //         this.props.history.push(`../color/${ev.target.dataset['labelcolor'].trim().replace(/ /g, ".").toLowerCase()}.${ev.target.dataset['colorid']}`, {
        //             filtreColor: {
        //                 colorId: ev.target.dataset['colorid'],
        //                 nom_color: ev.target.dataset['nomcolor'],
        //                 label_color: ev.target.dataset['labelcolor']
        //         }})
        //         break;
        //     }
        // }

                        //         if (!location.pathname.includes("/color/")) {
                        // //             (this.props.filtreColor)
                        // //             ?
                        // //             this.props.history.push(`../color/${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreColor.colorId}`, {
                        // //                 filtreColor: {
                        // //                     colorId: ev.target.dataset['colorid'],
                        // //                     nom_color: ev.target.dataset['nomcolor'],
                        // //                     label_color: ev.target.dataset['labelcolor']
                        // //                 }
                        // //             })
                        // //             : null
                        // // // this.props.history.push(`../color/${ev.target.dataset['labelcolor'].trim().replace(/ /g, ".").toLowerCase()}.${ev.target.dataset['colorid']}`, {
                        // // //     filtreColor: {
                        // // //         colorId: ev.target.dataset['colorid'],
                        // // //         nom_color: ev.target.dataset['nomcolor'],
                        // // //         label_color: ev.target.dataset['labelcolor']
                        // // // }})
                        // //
                        // //             // this.setState({
                        // //             //     selectValue: nouVal
                        // //             // })
                        // //             ;
                        //         } else {
                        //             (ev.target.dataset['colorid'])
                        //                 ? this.props.history.push(`../color/${ev.target.dataset['labelcolor'].trim().replace(/ /g, ".").toLowerCase()}.${ev.target.dataset['colorid']}`, {
                        //                     filtreColor: {
                        //                         colorId: ev.target.dataset['colorid'],
                        //                         nom_color: ev.target.dataset['nomcolor'],
                        //                         label_color: ev.target.dataset['labelcolor']
                        //                 }})
                        //                 : this.props.history.push(location.pathname);
                        //         }

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

        let
            linkTo //= ({v,i,a}) => `../color/${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${v.colorId}`
        ,
            fM = this.props.filtreMarca ? "1" : "0",
            fT = this.props.filtreTalla ? "1" : "0",
            fC = this.props.filtreColor ? "1" : "0"
        ;

        return [
            (this.props.filtreColor)
                ?
                     <span
                         style={{
                             top: `.5em`,
                             right: `0`,
                             position: ``,
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
                             cursor: `pointer`,
                             float: `right`,
                             marginTop: `-.8em`,
                             marginRight: `-.7em`,
                             marginBottom: `.4em`
                         }}
                        key="x"
                        data-nomcolor=""
                        data-labelcolor=""
                        data-colorid=""

                        title="Desactivar el filtro"
                        onClick={() => {
                            switch (`${fM}${fT}${fC}`) {
                                case "111": {
                                    // alert("C111");
                                    this.props.history.push(`../marca-talla/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${this.props.filtreTalla.value}`);

                                    this.props.filtrantColor(null);
                                    break;
                                }
                                case "110": {
                                    // alert("C110");
                                    // linkTo = `.`;
                                // this.props.history.push(`../marca-talla-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${nouVal.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreColor.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${nouVal.value}.${this.props.filtreColor.colorId}`,
                                //         {
                                //             selectValue: nouVal
                                //         });
                                    break;
                                }
                                case "101": {
                //  alert("C101");
                // // linkTo = `.`;
                                    this.props.history.push(`../marca/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}`);

                                    this.props.filtrantColor(null);
                                    break;
                                }
                                case "100": {
                                    // alert("C100");
                                    // linkTo = `../marca-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${v.colorId}`;
                    // {
                    //     filtreColor: {
                    //         colorId: ev.target.dataset['colorid'],
                    //         nom_color: ev.target.dataset['nomcolor'],
                    //         label_color: ev.target.dataset['labelcolor']
                    // }};
                                    break;
                                }
                                case "011": {
                // alert("C011");
                // // linkTo = `.`;
                                    this.props.history.push(`../talla/${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreTalla.value}`);

                                    this.props.filtrantColor(null);
                                    break;
                                }
                                case "010": {
                                    // alert("C010");
                                    // linkTo = `.`;

                                    break;
                                }
                                case "001": {
                                // alert("C001");
        // // linkTo = `.`;
                                    this.props.history.push(`..`);
                                    this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                                    this.props.filtrantColor(null);
                                    break;
                                }
                                case "000": {
                                // alert("C000");
                                    // linkTo = `../color/${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${v.colorId}`;
                    // {
                    //     filtreColor: {
                    //         colorId: ev.target.dataset['colorid'],
                    //         nom_color: ev.target.dataset['nomcolor'],
                    //         label_color: ev.target.dataset['labelcolor']
                    // }};
                                    break;
                                }
                            }
            // this.props.history.push(`..`);
            // //alert(location.pathname.substring(0,location.pathname.length-1));
            // this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
            // //alert(location.pathname.substr(location.pathname.length - 1, 1));
            // // this.props.history.replace(`${location.pathname}/..`.substr(`${location.pathname}/..`.length - 1, 1));
            // this.props.colorIdAVariables(null);
                        }}
                    >&times;
                    </span>
                :
                    null

            ,

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


                                        switch (`${fM}${fT}${fC}`) {
                                            case "111": {
                                                // alert("C111");
                                                linkTo = `../marca-talla-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${this.props.filtreTalla.value}.${v.colorId}`;
                                                break;
                                            }
                                            case "110": {
                                                // alert("C110");
                                                linkTo = `../marca-talla-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${this.props.filtreTalla.value}.${v.colorId}`;
                                                break;
                                            }
                                            case "101": {
                                                // alert("C101");
                                                linkTo = `../marca-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${v.colorId}`;
                                                break;
                                            }
                                            case "100": {
                                                // alert("C100");
                                                linkTo = `../marca-color/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${v.colorId}`;
                    // {
                    //     filtreColor: {
                    //         colorId: ev.target.dataset['colorid'],
                    //         nom_color: ev.target.dataset['nomcolor'],
                    //         label_color: ev.target.dataset['labelcolor']
                    // }};
                                                break;
                                            }
                                            case "011": {
                                                //alert("C011");
                                                linkTo = `../talla-color/${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreTalla.value}.${v.colorId}`;
                                                break;
                                            }
                                            case "010": {
                                                // alert("C010");
                                                linkTo = `../talla-color/${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}-${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreTalla.value}.${v.colorId}`;
                                                break;
                                            }
                                            case "001": {
                                            // alert("C001");
                                            linkTo = `../color/${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${v.colorId}`;
                                                break;
                                            }
                                            case "000": {
                                            // alert("C000");
                                                linkTo = `${location.pathname}/color/${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${v.colorId}`;
                        // {
                        //     filtreColor: {
                        //         colorId: ev.target.dataset['colorid'],
                        //         nom_color: ev.target.dataset['nomcolor'],
                        //         label_color: ev.target.dataset['labelcolor']
                        // }};
                                                break;
                                            }
                                        }

                                        return (
                                            (this.props.filtreColor && this.props.filtreColor.colorId === v.colorId)
                                            ?   <Link
                                                    key={i}
                                                    to={linkTo}
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
                                                            to={linkTo}
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
                                                        to={linkTo}
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
                        ]
        //Penúltim link to: `../color/${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${v.colorId}`
        //Últim link to: `${this.props.location.pathname}/color/${v.label_color.trim().replace(/ /g, ".").toLowerCase()}.${v.colorId}`
                        // ()
                        //     ?

                        //return arrayColors;
                        //     :
                        // ;

                    )()
                    // style={{
                    //     display: `flex`,
                    //     border: `4px white solid`,
                    //     borderRadius: `1em`,
                    //     minWidth: `20px`,
                    //     height: `20px`,
                    //     background: `fuchsia`,
                    //     alignItems: `center`,
                    //     padding: `12px 1px`,
                    //     paddingRight: `0px`,
                    //     color: `white`,
                    //     fontWeight: `bold`,
                    //     fontSize: `2em`,
                    //     fontFamily: `initial`,
                    //     margin: `auto 2px`,
                    //     cursor: `pointer`,
                    //     marginTop: `-3px`
                    // }}
                }

            </div>
        ];
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
        this.props.history.push(`../marca-talla/${this.props.filtreMarca.label.trim().replace(/ /g, ".").toLowerCase()}-${this.props.filtreTalla.label.trim().replace(/ /g, ".").toLowerCase()}.${this.props.filtreMarca.value}.${this.props.filtreTalla.value}`);
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
        });
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

                this.desactivaFiltres = this.desactivaFiltres.bind(this);
            }

            desactivaFiltres() {
                this.props.history.push(`..`);
                this.props.history.replace(location.pathname.substring(0,location.pathname.length-1));
                this.props.desactivaFiltres();
            }

            render() {
                return (
                    <Stylo.Filtro>
                    {
                        (this.props.filtreTalla || this.props.filtreMarca || this.props.filtreColor)
                            ?   <span
                                    style={{
                                        top: `.5em`,
                                        right: `0`,
                                        position: ``,
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
                                        cursor: `pointer`,
                                        float: `right`,
                                        marginTop: `-.8em`,
                                        marginRight: `-.7em`,
                                        marginBottom: `.4em`,
                                        transform: `scale(1.2)`
                                    }}
                                    title="Desactivar todos los filtros"
                                    onClick={this.desactivaFiltres}
                                >&times;
                                </span>
                            : null
                    }
                        <MarquesSubCategoria {...this.props} />
                        {   // AUTOFILTRES
                            (this.props.filtreMarca)
                                ?   <TallesSubCategoriaMARCA {...this.props} />
                                :   <TallesSubCategoriaTOTS {...this.props} />
                        }
                        {   (this.props.filtreMarca)
                                ?   <ColorsSubCategoriaMARCA {...this.props} />
                                :   <ColorsSubCategoriaTOTS {...this.props} />
                        }
                    </Stylo.Filtro>
                );
            }
        }

        class MainContentSubCat extends Component {
            constructor(props, context) {
                super(props, context);
            }

            render() {
                return (
                      <Stylo.ProductsLayout>
                        <Stylo.PosicionFiltro
                            key="columna">
                                <BuscadorColumnaSUBCAT {...this.props} />
                        </Stylo.PosicionFiltro>


                        <Stylo.PosicionProductos
                            key="content">
                            <MostrariAmbProductes {...this.props} />
                        </Stylo.PosicionProductos>
			</Stylo.ProductsLayout>
                );
            }
        }

//////////// index ////////////

        return (
            <Router>
                <Stylo.MainLayout>
                    <Route path="/"
                        render={() => (
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
                        )}
                    />

                    <Route exact path="/" render={() => (
                        <Stylo.HomeLayout>
		            <Stylo.MainVideo>
		              {conf.video_latinmoda}
		            </Stylo.MainVideo>

		            <Stylo.MainContent>
		              <h1>{conf.subtituloPagina}</h1>
		              <h2>{conf.titulo_contenido}</h2>
		              {conf.texto_contenido}
		              {conf.bloque_info}
		            </Stylo.MainContent>

		              {/*{conf.segon_lliure}*/}

		          </Stylo.HomeLayout>

                    )}/>

                    <Route exact path="/categoria/:subcategoryId" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.subcategoryId.match(/\d+$/)[0]
                            }),

                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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

                    <Route exact path="/categoria/:catname.:catid/marca/:mn.:mid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid,
                                marcaId: match.params.mid
                            }),


                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreMarca={{
                                    label: match.params.mn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.mid
                                }}

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

                    <Route exact path="/categoria/:catname.:catid/talla/:tn.:tid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid
                            }),

                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreTalla={{
                                    label: match.params.tn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.tid
                                }}

                                filtrantColor={this.filtrantColor}
                                filtreColor={this.state.filtreColor}

                                match={match}
                                history={history}
                                location={location}

                                desactivaFiltres={this.desactivaFiltres}
                            />
                        );
                    }}/>

                    <Route exact path="/categoria/:catname.:catid/color/:cn.:cid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid
                            }),

                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreColor={{
                                    colorId: match.params.cid,
                                    nom_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    label_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase())
                                }}

                                match={match}
                                history={history}
                                location={location}

                                desactivaFiltres={this.desactivaFiltres}
                            />
                        );
                    }}/>


                    <Route exact path="/categoria/:catn.:catid/marca-talla/:mn-:tn.:mid.:tid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid,
                                marcaId: match.params.mid
                            }),


                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreMarca={{
                                    label: match.params.mn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.mid
                                }}

                                filtrantTalla={this.filtrantTalla}
                                filtreTalla={{
                                    label: match.params.tn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.tid
                                }}

                                filtrantColor={this.filtrantColor}
                                filtreColor={this.state.filtreColor}

                                match={match}
                                history={history}
                                location={location}

                                desactivaFiltres={this.desactivaFiltres}
                            />
                        );
                    }}/>

                    <Route exact path="/categoria/:catn.:catid/marca-color/:mn-:cn.:mid.:cid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid
                            }),


                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreMarca={{
                                    label: match.params.mn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.mid
                                }}

                                filtrantTalla={this.filtrantTalla}
                                filtreTalla={this.state.filtreTalla}

                                filtrantColor={this.filtrantColor}
                                filtreColor={{
                                    colorId: match.params.cid,
                                    nom_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    label_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase())
                                }}

                                match={match}
                                history={history}
                                location={location}

                                desactivaFiltres={this.desactivaFiltres}
                            />
                        );
                    }}/>

                    <Route exact path="/categoria/:catn.:catid/talla-color/:tn-:cn.:tid.:cid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid
                            }),


                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreTalla={{
                                    label: match.params.tn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.tid
                                }}

                                filtrantColor={this.filtrantColor}
                                filtreColor={{
                                    colorId: match.params.cid,
                                    nom_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    label_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase())
                                }}

                                match={match}
                                history={history}
                                location={location}

                                desactivaFiltres={this.desactivaFiltres}
                            />
                        );
                    }}/>

                    <Route exact path="/categoria/:catname.:catid/marca-talla-color/:mn-:tn-:cn.:mid.:tid.:cid" render={({ match, history, location }) => {
                        let
                            variables = Object.assign({}, this.state.variables, {
                                subcategoryId: match.params.catid
                            }),


                            MainContentSUBCAT = graphql(Qs.SubCategoriaPRODUCTESQuery, {
                                ...this.props,
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
                                filtreMarca={{
                                    label: match.params.mn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.mid
                                }}

                                filtrantTalla={this.filtrantTalla}
                                filtreTalla={{
                                    label: match.params.tn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    value: match.params.tid
                                }}

                                filtrantColor={this.filtrantColor}
                                filtreColor={{
                                    colorId: match.params.cid,
                                    nom_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase()),
                                    label_color: match.params.cn.replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase())
                                }}

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
                    }}/>

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
