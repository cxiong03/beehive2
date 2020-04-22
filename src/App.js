import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'
import resources from './mock/resources'

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.renderPosts.bind(this)
  // }

  renderPosts() {
    const display = resources.map((resource) => {
      return <Resource resource={resource} />;
    })
    return display;
  }

  render () {
    return (
      <div className="App">
        <h1>Welcome to Brainhive2</h1>
        {this.renderPosts()}
      </div>
    );
  }
}
export default App;
