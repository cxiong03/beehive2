import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'
import resources from './mock/resources'

import ResourceForm from './components/ResourceForm'

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
      <div className="header">
        <h1 className="title">Welcome to Brainhive2</h1>
        <div className="navigation">
          <a href="/">Add Resource</a>
        </div>
      </div>
        <div className="resourceList">{this.renderPosts()}</div>
        <ResourceForm />
      </div>
    );
  }
}
export default App;
