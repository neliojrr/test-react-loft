import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Compare from './Compare';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      audit: [],
      currentIndex: 0
    };

    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const { audit } = data;
    this.setState({ audit });
  }

  goForward() {
    const { currentIndex, audit } = this.state;
    if (currentIndex < audit.length - 2) {
      this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
    }
  }

  goBack() {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState(prevState => ({ currentIndex: prevState.currentIndex -1 }));
    }
  }

  render() {
    const { audit, currentIndex } = this.state;
    const versionA =
      audit.length > currentIndex ? audit[currentIndex] : {};
    const versionB =
      audit.length > currentIndex + 1 ? audit[currentIndex + 1] : {};
    return (
      <div className="App">
        <h1>Audit test app</h1>
        <section className="App-section">
          <button
            style={{ float: 'left', marginLeft: '3%' }}
            onClick={this.goBack}
          >
            prev
          </button>
          <button
            style={{ float: 'right', marginRight: '3%' }}
            onClick={this.goForward}
          >
            next
          </button>
          <p>
            Showing { currentIndex + 1 } and { currentIndex + 2 } of { audit.length }
          </p>
          <Compare versionA={versionA} versionB={versionB} />
        </section>
      </div>
    );
  }
}

export default App;
