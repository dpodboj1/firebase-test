import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newdata: '',
    };
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState = ({
      newdata: newData,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit} />
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
