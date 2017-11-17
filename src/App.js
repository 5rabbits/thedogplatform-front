
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
import { connect } from 'react-redux'
import './App.css';


class App extends Component {
  handleClick = () => {
    this.props.dispatch({
      type: 'publications/ADD_PUBLICATION',
      data: 'asdasdasd',
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>

        <CardPublish> </CardPublish>

        <Button onClick={this.handleClick}>Holi</Button>

        {JSON.stringify(this.props.publications123)}

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    publications123: state.publications1
  }
}

export default connect(mapStateToProps)(App);
