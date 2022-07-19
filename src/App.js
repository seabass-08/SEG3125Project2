import Navbar from './Navbar';
import Home from './Home';
import Prebuilt from './Prebuilt';
import Custom from './Custom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/prebuilt">
              <Prebuilt />
            </Route>
            <Route>
              <Custom />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
