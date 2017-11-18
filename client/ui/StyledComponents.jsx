import React, {Component} from 'react';
import styled from 'styled-components';
import * as conf from './config.jsx';

export const

    Button = styled.button`
      /*background: palevioletred;*/
      border-radius: 3px;
      border: none;
      color: white;
      height: 3em;
      margin: 2vw;
    `,

    TomatoButton = styled(Button)`
      background: tomato;
    `,

    MainLayout = styled.div`
      height: 100%;
      display: grid;
      grid-template-columns: auto auto auto auto auto auto;
      grid-template-areas:
            "navbar navbar navbar navbar navbar navbar"
            ${conf.layoutTemplateArea}
            "present present present present present present"
            "footer footer footer footer footer footer";
      background-image: url(/${conf.fonsPrincipal});
      background-size: ${conf.backgroundSize};
      background-repeat: ${conf.backgroundRepeat};
      background-attachment: ${conf.backgroundAttachment};

    `
;
