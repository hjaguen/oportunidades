import './main.html';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
//import '/imports/client/ui/graphiql.css';
import '/imports/client/ui/bootstrap.min.css';
import '/imports/client/ui/bootstrap-theme.min.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { graphql, ApolloProvider } from 'react-apollo';

import App from '/imports/client/ui/App.jsx';
import '/imports/client/ui/style.css';

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
        document.getElementById('app')
    );
});
