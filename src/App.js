import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      selected: ""
    }
  }

  async countriesAPI(e) {
    const url = `/api/countries?q=${e.target.value}`;
    const resp = await axios.get(url);
    this.setState({ countries: resp.data })
  }

  handleSelect(name) {
    this.setState({
      selected: name
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>Currently selected country: { this.state.selected } </div>
        <div>Search</div>
        <input
          placeholder="Search..."
          onChange={e => this.countriesAPI(e)}
        >
        </input>
        
        <ul>
          {
            this.state.countries.map(obj => {
            return (<li
                      onClick={() => this.handleSelect(obj.name)}
                      key={obj.name}>
              {
                obj.name
              }  
            </li>)
            })
          }
        </ul>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
