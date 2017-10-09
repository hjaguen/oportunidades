import './main.html';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import IniComp from './ui/Ini.jsx';
import './ui/graphiql.css';
//import './ui/solarized.css';


Meteor.startup(() => {
  render(<IniComp />, document.getElementById('app'));
});
