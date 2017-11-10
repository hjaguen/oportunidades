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
import { LinkContainer } from 'react-router-bootstrap';
import * as conf from './config.jsx';

export default class NavbarAdaptat extends Component {
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
                <Navbar
                    inverse={this.props.inverse}
                    collapseOnSelect
                    fluid={this.props.fluid}
                >
                    <Navbar.Header>
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
                                            <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
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
