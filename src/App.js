import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'

class App extends Component {

  resource = {
    posterName: 'Chang',
    resourceAuthor: 'NetNinja',
    authorSkillLevel: 'Advanced',
    Cohort: '8',
    title: 'React & Redux Complete',
    Category: ['React', 'Redux'],
    Summary: 'A good resource on building a couple react apps with and without redux',
    Link: 'www.google.com/search?q=NetNinja%20React',
    resourceType: 'Playlist',
    datePublished: '2018-09-10.00:00:00.000z',
    videoLength: null,
    timeToComplete: 300,
    rating: 5,
    comments: [{user: 'Cole', text:'Pretty good resource'}, {user: 'Kendrick', text: 'Helped me a lot learning React.'}]
}

  render () {
    return (
      <div className="App">
        <h1>Welcome to Brainhive2</h1>
        <Resource resource={this.resource} />
        <Resource resource={this.resource} />
        <Resource resource={this.resource} />
      </div>
    );
  }
}
export default App;
