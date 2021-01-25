import './App.css';
import  About  from "./pages/About";
import  Contact  from "./pages/Contact";
import  Home  from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
		<Router>
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}
export default App;
