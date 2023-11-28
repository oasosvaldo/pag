import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Empresa } from "./pages/Empresa";
import { Contato } from "./pages/Contato";
import Media from "./pages/Media";
import Cadastro from "./pages/Cadastro";

import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/empresa"><Empresa /></Route>
          <Route path="/contato"><Contato /></Route>
          <Route path="/media"><Media /></Route>
          <Route path="/cadastro"><Cadastro /></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
