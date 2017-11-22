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
            <nav className="navbar blacker" role="navigation">
                <div className="container-fluid" style={{margin: `5px`}}>
                    <div className="nav navbar-nav navbar-header col-xs-12">
                        {/* idea! El H1 se puede configurar desde "config" como title.*/}
                        <a className="nav navbar-nav navbar-brand" to="#" style={{margin: `0`,height: `80px`,paddingTop: `0`}}><h1 >Blusas Colombianas</h1></a>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                {conf.emailContacto}
                            </li>
                            <li>
                                <Link to="#">{conf.telContacto}</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="#">Action</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Another action</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Something else here</Link>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <Link to="#">Separated link</Link>
                                    </li>
                                </ul>
                            </li>
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
                                            <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
                                                <NavItem
                                                    eventKey={i}
                                                    onClick={this.canviaSubcat}
                                                    data-subcategory-id={v.categoriaId}
                                                >                   {v.nom_categoria}
                                                </NavItem>
                                            </LinkContainer>
                                        )
                                    }
                                )
                            }
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="#">Action</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Another action</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Something else here</Link>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <Link to="#">Separated link</Link>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <Link to="#">One more separated link</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
