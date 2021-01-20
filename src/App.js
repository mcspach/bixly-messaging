import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab.js';
// import { Link, Route } from 'react-router-dom';
import NewMessageForm from './components/NewMessageForm';
import MessageDetails from './components/MessageDetails';
import MessageList from './components/MessageList';
import LoginForm from './components/LoginForm';

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Bixly Messenger </p>
      </header>

      <div className="Tabs">
        <ErrorBoundary><Tab tabName='received' tabRoute='messages' /></ErrorBoundary>
        <ErrorBoundary><Tab tabName='sent' tabRoute='messages/sent' /></ErrorBoundary>
        <ErrorBoundary><Tab tabName='new message' tabRoute='messages' /></ErrorBoundary>
      </div>

      <div className="Workspace">
        <ErrorBoundary><LoginForm /></ErrorBoundary>
        <ErrorBoundary><MessageList tabName="received"/></ErrorBoundary>
        <ErrorBoundary><MessageList tabName="sent"/></ErrorBoundary>
        <ErrorBoundary><MessageDetails /></ErrorBoundary>
        <ErrorBoundary><NewMessageForm /></ErrorBoundary>
      </div>

    </div>
  );
}



export default App;
