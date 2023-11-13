import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Empresa } from "./pages/Empresa";
import { Contato } from "./pages/Contato";
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/empresa"><Empresa /></Route>
        <Route path="/contato"><Contato /></Route>
      </Switch>
    </Router>
  );
}

export default App;
