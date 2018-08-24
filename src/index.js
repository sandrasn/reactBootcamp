import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import rootReducer from "./reducers";
import Home from "./containers/Home";
import registerServiceWorker from "./registerServiceWorker";
import Login from "./containers/Login";
import Register from "./containers/Register";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk)); // funkcija, kas izveido ivenu lielu funkciju, kurai var

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
