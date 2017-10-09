import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import GraphiQL from 'graphiql';
import schema from '../api/schema.js';
//import fetch from 'isomorphic-fetch';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}


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
                    <Route path="/graphql" render={()=>(
                        <GraphiQL schema={schema} fetcher={graphQLFetcher} />
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
