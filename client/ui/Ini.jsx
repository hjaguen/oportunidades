import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import GraphiQL from 'graphiql';
//import schema from '../api/schema.js';
//import fetch from 'isomorphic-fetch';
//import graphql from 'graphql';
//import XMLHttpRequestPromise from 'xhr-promise';


const 
    url = `http://localhost:4000/graphql`,
    query = `query {
        allSubcategories(apiUrl: "http://api.colombiaespassion.net", pageId: "1", categoryId: "2") {
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
    });
/* 
const requestObj = new Request(`http://localhost:4000/graphql`, {
    method: 'POST',
    body: JSON.stringify({query: `query {
        allSubcategories(apiUrl: "http://api.colombiaespassion.net", pageId: "1", categoryId: "2") {
          categoriaId
          nom_categoria
        }
      }`
    })
});

fetch(requestObj)
    .then(response => response.json())
    .then(response => console.dir("Response: ", response));
 */

/* let xhrPromise = new XMLHttpRequestPromise();
xhrPromise.send({
    method: 'POST',
    url: `http://localhost:4000/graphql`,
    data: JSON.stringify({query: `query {
        allSubcategories(apiUrl: "http://api.colombiaespassion.net", pageId: "1", categoryId: "2") {
          categoriaId
          nom_categoria
        }
      }`
    })
  })
  .then(function (results) {
    if (results.status !== 200) {
      throw new Error('request failed');
    }
    console.log('data returned:', results);
  })
  .catch(function (e) {
    console.error('XHR error');
    console.log ("Error: ", e);
  }); */

export default class IniComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("POST", "http://localhost:4000/graphql");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onload = function () {
        console.log('data returned:', xhr.response);
        }
        xhr.send(JSON.stringify({query: `query {
            allSubcategories(apiUrl: "http://api.colombiaespassion.net", pageId: "1", categoryId: "2") {
              categoriaId
              nom_categoria
            }
          }`
        })); */

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


//
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
//
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );
//
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// );
//
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// );
//
// export default BasicExample;
