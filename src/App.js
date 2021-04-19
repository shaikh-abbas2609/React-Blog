import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./components/BlogDetail";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/post/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
