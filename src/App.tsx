import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter } from "react-router-dom";

import Sidebar from './components/sidebar';
import { Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Cyberpunk from './components/cyberpunk';
import Main from './components/router';

export default class App extends React.Component {

  render() {
        return (
          <div className="App">
            <Main />
          </div>
        )
    }
}