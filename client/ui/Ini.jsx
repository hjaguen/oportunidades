import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const 
    url = `http://localhost:4000/graphql`,
    query = `query {
        allSubcategories(
            apiUrl: "http://api.colombiaespassion.net", 
            pageId: "1", 
            categoryId: "2"
        ) {
            categoriaId
            nom_categoria
        }
    }`
;

fetch(url, { 
    method: 'POST',
    Accept: 'api_version=2',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
})
    .then(response => response.json())
    .then(data => {
        console.dir('Here is the data: ', data);
        //resultats = data;
    })
;

//console.dir('Resultats: ', resultats);

export default class IniComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={()=>(
                        <div>
                            <h1>Component INICIAL!</h1>
                            <div>
                                <h2>Meeec</h2>
                            </div>
                        </div>
                    )}/>
                    <Route path="/subcategories" render={()=>(
                        <ul>{
                           xhr.response.map(
                               (v,i,a) => <li key={i}>{v.data.allSubcategories.nom}</li>
                           )
                        }
                        </ul>
                    )}/>
                </div>
            </Router>
        );
    }
};