import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile';
import Interest from './components/interest/interest';
import Learn from './components/learn/learn';
import Expectation from './components/expectation/expectation';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Profile />
          <Interest />
          <Learn />
        </div>
        <div className="row">
          <Expectation />
          <div className="bg"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
