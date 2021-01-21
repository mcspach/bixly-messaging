import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewMessageForm from './components/NewMessageForm';
import MessageDetails from './components/MessageDetails';
import MessageList from './components/MessageList';
import LoginForm from './components/LoginForm';

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    
      <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Bixly Messenger </p>
        </header>

        <Route path="/messages" render={() => 
            <div className="Tabs">
              <Tab tabName='received' tabRoute='messages/' />
              <Tab tabName='sent' tabRoute='messages/sent' />
              <Tab tabName='new message' tabRoute='messages/new' />
            </div>
        } />

        <div className="Workspace">

          <div className="ListBox">
            <Route path="/messages" exact render={() => 
            <ErrorBoundary><MessageList tabName="received" /></ErrorBoundary>} />
            <Route path="/messages/sent" exact render={() => 
            <ErrorBoundary><MessageList tabName="sent" /></ErrorBoundary>} />
          </div>

          <div className="WorkBox">
          <Route path="/" exact render={() =>
          <ErrorBoundary><LoginForm /></ErrorBoundary>} />
          <Route path="/messages" render={() => 
          <ErrorBoundary><MessageDetails /></ErrorBoundary>} />
          <Route path="/messages/new" exact render={() =>
          <ErrorBoundary><NewMessageForm /></ErrorBoundary>} />
          </div>

        </div>
      </Router>
      </div>
    
  );
}



export default App;
