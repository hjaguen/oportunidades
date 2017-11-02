import React from 'react';
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






export let
// Imagen de fondo y sus opciones
    fonsPrincipal = `Aqua-Background4.jpg`,
        backgroundSize =  `cover`,
        backgroundRepeat = `no-repeat`,
        backgroundAttachment = `fixed`
    ,

    categoryId = `12`
    ,

    amplaria_fitxetes_subcategoria = `220px`
    ,

    primer_contingut =
        <div>
            <h1>Capçalera de prova</h1>
            <div
                className="divFreeContent"
                style={{
                    background: `blue`
                }}
            >
                Un contingut
                <div
                    className="divFreeContentInside"
                    style={{
                        background: `gold`
                    }}
                >
                    I un altre
                </div>
            </div>
        </div>
    ,

    segon_lliure =

        <Grid
            style={{
                background: `fuchsia`
            }}
            fluid
        >
            <Row
                className="show-grid"
                style={{
                    position: `relative`
                }}
            >
                <Col
                    xs={6}
                    md={3}
                    style={{
                        background: `gold`
                    }}
                ><code>&lt;{'Col xs={6} md={3}'} /&gt;</code></Col>
                <Col
                    xs={6}
                    md={6}
                    style={{
                        background: `grey`
                    }}
                >
                    <iframe
                        className=""
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/o0-U7A4gLWc"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </Col>
                <Col
                    xsHidden
                    md={3}
                    style={{
                        background: `gold`,
                        height: `100%`
                    }}
                ><code>&lt;{'Col xsHidden md={3}'} /&gt;</code></Col>
            </Row>
        </Grid>

        ,

        vimeoEx =
            <div>
                <iframe src="https://player.vimeo.com/video/240463716?color=ff0179&title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
<p><a href="https://vimeo.com/240463716">BACKSTAGE 1 Cheviotto Noviembre 2017</a> from <a href="https://vimeo.com/latinmoda">Latinmoda.net</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>




;
