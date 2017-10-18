import './main.html';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './ui/App.jsx';
import './ui/graphiql.css';
//import './ui/solarized.css';


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
