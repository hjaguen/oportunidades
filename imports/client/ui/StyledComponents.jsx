import React, {Component} from 'react';
import styled from 'styled-components';
import * as conf from './config.jsx';

export const

    MainLayout = styled.div.attrs({
      className: 'container'
    })`
        width: 100%;
        height: 100%;
        padding: 0px;
        // display: grid;
        // grid-template-columns: auto auto auto;
        // grid-template-rows: auto auto auto;
        // grid-template-areas:
        // "navbar navbar navbar"
        // "filtro content content"
        // //${conf.layoutTemplateArea}
        // "present present present"
        // "footer footer footer";
        background-image: url(/${conf.fonsPrincipal});
        background-size: ${conf.backgroundSize};
        background-repeat: ${conf.backgroundRepeat};
        background-attachment: ${conf.backgroundAttachment};
    `,

    HomeLayout = styled.div.attrs({
      className: 'container'
    })`
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-template-areas:
      "video"
      "content"
    `,

    ProductsLayout = styled.div`
      display: grid;
      grid-template-columns: 25% auto;
      grid-template-rows: auto;
      grid-template-areas:
        "filtro content"
    `,

    MainNavBar = styled.nav`
        grid-area: navbar;
        position: sticky;
        top: 0;
        height: min-height;
        background-color: rgba(255, 255, 255, 0.25);
        transition: all 1s ease;
        z-index: 100;
    `,

    PosicionFiltro = styled.div`
      grid-area: filtro;
    `,


    Filtro = styled.div`
      width: 90%;
      max-width: 300px;
      background: rgba(255, 255, 255, 0.25);
      margin: 2em 2em;
      padding: 2em;
      borderRadius: 1em;
      position: -webkit-sticky;
      position: sticky;
      top: 160px;
      `,

    PosicionProductos = styled.div`
      grid-area: content;
    `,

    NavTitle = styled.h1`
        margin-top: 0;
        font-size: 2.5em;
        color: white;
        text-shadow: 8px 5px 10px black;
        font-family: 'Comfortaa', sans-serif;
        font-weight: 700;

        @media (min-width:351px) and (max-width:500px) {
          font-size: 1.4em;
        }

        @media (max-width:350px) {
          font-size: 1.1em;
        }
    `,

    MainVideo = styled.div`
      grid-area: video;
    `,

    MainContent = styled.div`
        grid-area: content;
        margin-top: 20px;
        margin-bottom: 20px;

        > h1 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 2.5em;
          font-weight: 700;
        }

        > h2 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 2em;
          font-weight: 500;
        }

        > h3 {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.7em;
          font-weight: 300;
        }

        > p {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.2em;
          font-weight: 100;
        }
    `,

    aLink = styled('a')`
      padding: 15px;
      color: #fff;
      font-size: 1.25em;
	    text-shadow: 0 1px 0 rgba(255,255,255,.25);
      font-family: 'Comfortaa', sans-serif;
      font-weight: 700;

        &:hover, &:focus {
          color: rgb(255, 64, 129);

        }
    `,

    aBrand = styled.a.attrs({
      className: 'navbar-brand'
    })`
      margin-bottom: 20px;
    `,

    liNav = styled.li`
        > ${aLink}{
        &:hover, &:focus {
          background-color: transparent;
      }
    }
    `
;
