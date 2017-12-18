import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { graphql } from 'react-apollo';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import * as Stylo from './StyledComponents.jsx';
import * as Qs from './Queries.jsx';


export class MarquesSUBCAT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectValue: this.props.filtreMarca || null,
            searchable: this.props.searchable,
            clearable: true
        };

        this.updateValue = this.updateValue.bind(this);

    }

    static defaultProps = {
        ...Component.defaultProps,
        label: 'Marques:',
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
                className={(window.innerWidth<500)?`amaga`:`mostra`}
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
};

export class TallesSUBCAT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectValue: this.props.filtreTalla || null,
            searchable: this.props.searchable,
            clearable: true
        };

        this.updateValue = this.updateValue.bind(this);
    }

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
                className={(window.innerWidth<500)?`amaga`:`mostra`}
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

export class ColorsSUBCAT extends Component {
    constructor(props) {
        super(props);

        this.filtraPerColor = this.filtraPerColor.bind(this);
    }

    filtraPerColor(ev) {
        ev.target.style.border = "3px solid fuchsia";
        this.props.filtrantColor(ev);
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
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
                className={`filtreC ${(window.innerWidth<500)?`amaga`:`mostra`}`}
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

export class BuscadorColumnaSUBCAT extends Component {
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
