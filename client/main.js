import './main.html';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './ui/App.jsx';
import './ui/graphiql.css';
import './ui/bootstrap.min.css';
import './ui/bootstrap-theme.min.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { graphql, ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `http://blusascolombianas.es:11010/graphql`
    })
})

Meteor.startup(() => {
    render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    ,
    document.getElementById('app'));
});
