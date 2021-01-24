import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import './App.scss';

import Tab from './components/Tab';
import NewMessageForm from './components/NewMessageForm';
import MessageDetails from './components/MessageDetails';
import Outbox from './components/Outbox';
import Inbox from './components/Inbox';

import ErrorBoundary from './components/ErrorBoundary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        password: "",
        token: "",
        loggedInRedirect: false,
        selectedMessageId: null
    };
}

handleLogin = (event) => {
  event.preventDefault();

  axios.post('https://messaging-test.bixly.com/api-token-auth/', {username: this.state.username, password: this.state.password})
    .then((response) => {
      // console.log(response.data);
      this.setState({token: response.data.token, loggedInRedirect: true});
      console.log(this.state);
      axios.defaults.baseURL = 'https://messaging-test.bixly.com';
      axios.defaults.headers.common['Authorization'] = 'Token ' + this.state.token;
      console.log(this.state);
    })
}

handleChange = (event) => {
  event.preventDefault();
  this.setState({ [event.target.name]: event.target.value });
  console.log(this.state);
}

redirect = () => {
  if (this.state.loggedInRedirect) {
    return( 
      <Redirect from="/" to="/messages/" />
    )
  } 
}

handleSelectMessage = (messageId) => {
  console.log('app is running handleSelectedMessgae');
  this.setState({selectedMessageId: messageId});
  console.log(this.state);
}


render() {

  const redirect = () => {
    if (this.state.loggedInRedirect) {
      return( 
        <ErrorBoundary><Redirect from="/" to="/messages/home" /></ErrorBoundary>
      )
    } 
  }
  
  if (this.state.token === "") {
  return(
    <div className="App">
      <Router>
        <header className="App-header">
          <p> Bixly Messenger </p>
        </header>
        <div className="WorkSpace">
          <div className="LoginForm">
            <form onSubmit={this.handleLogin}>
              <label>Username: <input type="text" name="username" onChange={this.handleChange}/>
                </label>
              <label>Password: <input type="text" name="password" onChange={this.handleChange}/>
                </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
    </Router>
    </div>
  )
  } else {
    return(
      <div className="App">
        <Router>
          {redirect()}
          <header className="App-header">
            <p> Bixly Messenger </p>
          </header>

        <Route path="/messages" render={() => 
            <div className="Tabs">
              <Tab tabName='Inbox' tabRoute='messages/' />
              <Tab tabName='Outbox' tabRoute='messages/sent' />
              <Tab tabName='Compose' tabRoute='messages/new' />
            </div>
        } />

          <div className="Workspace">

            {/* Listbox needs to be a switch */}
            <div className="ListBox">
              <Route path="/messages/home" exact render={() => null} />
              <Route path="/messages/" exact render={() => 
              <ErrorBoundary>
                <Inbox onSelect={this.handleSelectMessage} />
              </ErrorBoundary>} />
              <Route path="/messages/sent" exact render={() => 
              <ErrorBoundary>
                <Outbox onSelect={this.handleSelectMessage} />
              </ErrorBoundary>} />
            </div>

            <div className="WorkBox">
            <Route path="/messages/" exact render={() => 
              <ErrorBoundary>
                <MessageDetails selectedMessageId={this.state.selectedMessageId} />
              </ErrorBoundary>} />
            <Route path="/messages/sent/" exact render={() => 
              <ErrorBoundary>
                <MessageDetails selectedMessageId={this.state.selectedMessageId} />
              </ErrorBoundary>} />
            <Route path="/messages/new" exact render={() =>
              <ErrorBoundary>
              <NewMessageForm />
              </ErrorBoundary>} />
            </div>

        </div>
      </Router>
      </div>
     );
    }
  }
}
