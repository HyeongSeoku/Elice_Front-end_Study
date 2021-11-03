import "../App.css";
import Home from "../pages/Home";
import Detail from "../routes/Detail";
import Feed from "../pages/Feed";
import Surf from "../pages/Surf";
import Credit from "../pages/Credit";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/detail/:id" component={Detail}></Route>
      <Route exact path="/feed" component={Feed}></Route>
      <Route exact path="/surf" component={Surf}></Route>
      <Route exact path="/credit" component={Credit}></Route>
    </Router>
  );
}

export default App;
