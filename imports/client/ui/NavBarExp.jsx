import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';
//import './style.css';

export default class NavbarAdaptat extends Component {
    constructor(props) {
        super(props);

        this.canviaSubcat = this.canviaSubcat.bind(this);
    }

    // static propTypes = {
    //     data PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategories: PropTypes.array
    //     }).isRequired
    // }

    canviaSubcat() {
        //this.props.subcategoryIdAlState();
        this.props.filtrantMarca(null);
        this.props.filtrantColor(null);
        this.props.filtrantTalla(null);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === this.props) {
            return false;
        } else {
            return true;
        }
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
            <Stylo.MainNavBar id="menu" className="navbar" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header col-xs-12">
                        <Stylo.aBrand href="/" >
                          <Stylo.NavTitle>{conf.tituloPagina}</Stylo.NavTitle>
                        </Stylo.aBrand>
                          <ul className="nav navbar-nav navbar-right">
                            <Stylo.liNav>
                                <Stylo.aLink className="emailytel">{conf.emailContacto}</Stylo.aLink>
                            </Stylo.liNav>
                            <Stylo.liNav>
                                <Stylo.aLink className="emailytel">{conf.telContacto}</Stylo.aLink>
                            </Stylo.liNav>
                            <Stylo.liNav>
                              <Stylo.aLink href="https://facebook.com/latinmoda" target="_blank"> <i className="fa fa-facebook fa-2x"></i></Stylo.aLink>
                            </Stylo.liNav>
                            <Stylo.liNav>
                              <Stylo.aLink href="https://twitter.com/latinmoda" target="_blank"> <i className="fa fa-twitter fa-2x"></i></Stylo.aLink>
                            </Stylo.liNav>
                            <Stylo.liNav>
                              <Stylo.aLink href="https://instagram.com/latinmoda_oficial" target="_blank"> <i className="fa fa-instagram fa-2x"></i></Stylo.aLink>
                            </Stylo.liNav>
                            <Stylo.liNav>
                              <Stylo.aLink href={`https://api.whatsapp.com/send?phone=${conf.whatsappMsg}&text=Hola%2C%20necesito%20información`} target="_blank"> <i className="fa fa-whatsapp fa-2x"></i></Stylo.aLink>
                            </Stylo.liNav>
                        </ul>

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {
                                this.props.data.subcategories.map(
                                    (v,i,a) => {
                                        return (
                                          <Stylo.liNav>
                                            <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
                                                <Stylo.aLink
                                                    eventKey={i}
                                                    onClick={this.canviaSubcat}
                                                    data-subcategory-id={v.categoriaId}
                                                >                   {v.nom_categoria}
                                                </Stylo.aLink>
                                            </LinkContainer>
                                          </Stylo.liNav>
                                        )
                                    }
                                )
                            }
                        </ul>

                    </div>
                </div>
            </Stylo.MainNavBar>
        );
    }
}
