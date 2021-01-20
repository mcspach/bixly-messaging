import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab.js';
import { Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Bixly Messenger </p>
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> */}
      </header>

      <div className="Tabs">
        <Tab tabName='received' tabRoute='messages' />
        <Tab tabName='sent' tabRoute='messages/sent' />
        <Tab tabName='new message' tabRoute='messages' />
      </div>

      <div className="Workspace">
        <LoginForm />
        <
      </div>

    </div>
  );
}



export default App;
