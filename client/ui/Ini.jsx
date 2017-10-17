import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import ApolloClient, { HttpLink } from 'apollo-client-preset';
import gql from 'graphql-tag';
//
// const client = new ApolloClient({
//     link: new HttpLink({
//         uri: 'https://localhost:4000/graphql'
//     })
// });

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `http://localhost:4000/graphql`
    })
})



// const
//     url = `http://localhost:4000/graphql`,
//     query = `query {
//         allSubcategories(
//             apiUrl: "http://api.colombiaespassion.net",
//             pageId: "1",
//             categoryId: "2"
//         ) {
//             categoriaId
//             nom_categoria
//         }
//     }`
// ;

// fetch(url, {
//     method: 'POST',
//     Accept: 'api_version=2',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
// })
//     .then(response => response.json())
//     .then(data => {
//         console.dir('Here is the data: ', data);
//         //resultats = data;
//     })
// ;

//console.dir('Resultats: ', resultats);

function queryAmbVariables( varsObj ) {
    return client.query({
        query: gql`
            query Subcategories(
                $apiUrl: String,
                $pageId: String,
                $categoryId: String,
                $subcategoryId: String,
                $sizeId: String,
                $brandId: String,
                $colorId: String
            ) {
                tallaSubcategoriaMARQUES(
                    apiUrl: $apiUrl,
                    pageId: $pageId,
                    categoryId: $categoryId,
                    subcategoryId: $subcategoryId,
                    sizeId: $sizeId
                ) {
                    marcaId
                    nom_marca
                }
                marcaSubcategoriaCOLORS(
                    apiUrl: $apiUrl,
                    pageId: $pageId,
                    categoryId: $categoryId,
                    subcategoryId: $subcategoryId,
                    brandId: $brandId
                ) {
                    colorId
                    nom_color
                    label_color
                }
                colorSUBCATEGORIES(
                    apiUrl: $apiUrl,
                    pageId: $pageId,
                    categoryId: $categoryId,
                    colorId: $colorId
                ) {
                    categoriaId
                    nom_categoria
                }
                colorSubcategoriaMarcaTALLES(
                    apiUrl: $apiUrl,
                    pageId: $pageId,
                    categoryId: $categoryId,
                    subcategoryId: $subcategoryId,
                    colorId: $colorId,
                    brandId: $brandId
                ) {
                    tallaId
                    nom_talla
                    label_talla
                    orden_talla
                    publicar_talla
                }
        }
     `,
      variables: {
          "apiUrl": varsObj.apiUrl,
          "pageId": varsObj.pageId,
          "categoryId": varsObj.categoryId,
          "subcategoryId": varsObj.subcategoryId,
          "sizeId": varsObj.sizeId,
          "brandId": varsObj.brandId,
          "colorId": varsObj.colorId
      }
    })
}

export default class IniComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        queryAmbVariables({
            apiUrl: "http://api.colombiaespassion.net",
            pageId: "1",
            categoryId: "2",
            subcategoryId: "2",
            sizeId: "21",
            brandId: "4",
            colorId: "17"
        })
          .then(data => console.log(data))
          .catch(error => console.error(error));

        return (
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <Route exact path="/" render={() => (
                            <div>
                                <h1>Component INICIAL!</h1>
                                <div>
                                    <h2>Meeec</h2>
                                </div>
                            </div>
                        )}/>
                        <Route path="/query" render={() => (
                            null
                        )}/>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
};
// <ul>{
//    xhr.response.map(
//        (v,i,a) => <li key={i}>{v.data.allSubcategories.nom}</li>
//    )
// }
// </ul>
