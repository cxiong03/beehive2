import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import ResourceList from './components/ResourceList'
import Navbar from './components/Navbar';
import resources from './mock/resources';

import ResourceForm from './components/ResourceForm';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.renderPosts.bind(this)
  // }
  state = {
    resources: [...resources]
  }

  addResource = (newResource) => {
    this.setState({
      resource: [...this.state.resources, newResource]
    })
  }

  

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/'>
                <ResourceList resources={this.state.resources}  />
              </Route>
              <Route path='/addResource'>
                <ResourceForm addResource={this.addResource} />
              </Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
