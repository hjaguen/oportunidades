import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardTitle, CardText, CardActions, Button as ButtonCard,
    Footer, FooterSection, FooterDropDownSection, FooterLinkList
} from  'react-mdl';
// Sharing Attempts
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import * as info from './addInfo.jsx';

const {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

export default class FootrAdaptat extends Component {
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
                <Footer size="mega">
                    <FooterSection type="middle">
                        <FooterDropDownSection title="Información">
                            <FooterLinkList>
                                <a href=""
                                  data-toggle="modal"
                                  data-target="#about">
                                  Quiénes Somos
                                </a>
                                <a href=""
                                  data-toggle="modal"
                                  data-target="#terms">
                                  Términos y Condiciones
                                </a>
                                <a href=""
                                  data-toggle="modal"
                                  data-target="#cookies">
                                  Políticas de Cookies
                                </a>
                                <a href=""
                                  data-toggle="modal"
                                  data-target="#faq">
                                  FAQ
                                </a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Details">
                            <FooterLinkList>
                                <a href="#">Specs</a>
                                <a href="#">Tools</a>
                                <a href="#">Resources</a>
                            </FooterLinkList>
                        </FooterDropDownSection>

                        <FooterDropDownSection title="FAQ">
                            <FooterLinkList>
                                <a href="#">Questions</a>
                                <a href="#">Answers</a>
                                <a href="#">Contact Us</a>
                            </FooterLinkList>
                        </FooterDropDownSection>

                        <FooterDropDownSection title="Contáctanos">
                            <form>
                              <div class="form-group">
                                <label for="emailCliente">Dirección de Email:</label>
                                <input type="email" class="form-control" id="emailCliente" placeholder="Introduzca su Email" />
                              </div>
                              <div class="form-group">
                                <label for="mensajeCliente">Mensaje:</label>
                                <textarea class="form-control" id="mensajeCliente" placeholder="Escriba su Mensaje" />
                              </div>
                              <button type="submit" class="btn btn-default">Enviar</button>
                            </form>
                        </FooterDropDownSection>
                    </FooterSection>
                    <FooterSection type="bottom" logo="Title">
                        <FooterLinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>





                    <div class="modal fade" id="about" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">{info.titleAbout}</h4>
                          </div>
                          <div class="modal-body">
                            {info.contAbout}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div class="modal fade about-modal-lg" id="terms" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">{info.titleTerms}</h4>
                          </div>
                          <div class="modal-body">
                            {info.contTerms}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div class="modal fade about-modal-lg" id="cookies" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">{info.titleCookies}</h4>
                          </div>
                          <div class="modal-body">
                            {info.contCookies}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div class="modal fade" id="faq" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">{info.titleFAQ}</h4>
                          </div>
                          <div class="modal-body">
                            {info.contFAQ}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>





                    <FacebookShareButton url="http://www.facebook.com/latinmoda" />
                    <TwitterShareButton url="http://twitter.com/latinmoda"/>
                </Footer>
            </div>
        );
    }
}
