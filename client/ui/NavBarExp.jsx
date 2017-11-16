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

export default class NavbarAdaptat extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
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
            <nav className="navbar" role="navigation" style={{minHeight: `80px`,backgroundColor: `rgba(255, 255, 255, 0.27)`}}>
                <div className="container-fluid" style={{margin: `5px`}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* idea! El H1 se puede configurar desde "config" como title.*/}
                        <Link to="#"><h1 style={{fontSize: `2.5em`,color:`white`,textShadow: `8px 5px 10px #000`,fontFamily: `helvetica`}}>Blusas Colombianas</h1></Link>
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
                                                    onClick={this.props.subcategoryIdAlState}
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
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="#">Link</Link>
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
                    </div>
                </div>
            </nav>
        );
    }
}
