import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import ResourceList from './components/ResourceList';
import Navbar from './components/Navbar';
import ViewCourse from './components/ViewCourse';
import resources from './mock/resources';

import ResourceForm from './components/ResourceForm';

class App extends Component {
  state = {
    resources: [...resources],
    selected: 1
  }

  addResource = (newResource) => {
    newResource.id = this.state.resources.length + 1;
    this.setState({
      ...this.state,
      resource: [...this.state.resources, newResource],
    });
  };

  handleSelect = (id) => {
    console.log('clicked', id)
    this.setState({
      ...this.state,
      selected: id
    })
  }

  

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/'>
                <ResourceList onSelect={this.handleSelect} />
              </Route>
              <Route path='/addResource'>
                <ResourceForm addResource={this.addResource} />
              </Route>
              <Route path='/viewCourse/:courseId'>
                <ViewCourse course={this.state.resources
                [this.state.selected - 1]} />
              </Route>
            </Switch>
            <p>Footer</p>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
