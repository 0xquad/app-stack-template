import React from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;
const FETCH_TIMEOUT = 2000;


class APIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  apiFetch(endpoint) {
    this.abortController = new AbortController();
    this.abortTimerID = setTimeout(() => { this.abortController.abort() }, FETCH_TIMEOUT);
    let options = {
      signal: this.abortController.signal
    };
    return fetch(`${API_URL}${endpoint}`, options)
  }

  componentDidMount() {
    this.apiFetch('/').then(resp => {
      resp.text().then(data => {
        this.setState({data: data});
      });
    }).catch(err => {
      console.log(err);
    });
  }

  componentWillUnmount() {
    clearTimeout(this.abortTimerID);
  }

  render() {
    return <span>{this.state.data||'No data yet!'}</span>;
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p><APIComponent /></p>
      </header>
    </div>
  );
}

export default App;
