import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
    render() {
        return (
            <div className="List">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    This is a second page.
                </p>
            </div>
        );
    }
}

export default List;
