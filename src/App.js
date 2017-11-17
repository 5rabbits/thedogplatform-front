
import logo from './logo.svg';
import {Button, Icon} from 'react-materialize'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>

        <CardPublish> </CardPublish>
      </div>

    );
  }
}

export default App;

import logo from './logo.svg';
import {Button, Icon} from 'react-materialize'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>

        <CardPublish> </CardPublish>

      </div>

    );
  }
}

export default App;
