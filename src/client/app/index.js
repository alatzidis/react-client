import React, { Component }  from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
      </div>
    );
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <p> About</p>
      </div>
    );
  }
}

class NoMatch extends Component {
  render () {
    return (
      <div>
        <p> 404 </p>
      </div>
    );
  }
}

render((
  <Router history={ browserHistory }>
   <Route path="/" component={ App }>
     <Route path="about" component={ About }/>
     <Route path="*" component={ NoMatch }/>
   </Route>
 </Router>
), document.getElementById('app'));
