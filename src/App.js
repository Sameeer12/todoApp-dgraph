import React from 'react'
import { Route, Router, Switch } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import TodoApp from './TodoApp';
import NavBar from './NavBar';
import history from "./history";
import './App.css';

const client = new ApolloClient({
  uri: 'https://frosty-brook.ap-south-1.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router history={history}>
          <h1 style={{color: "DarkCyan"}}>What to do?</h1>
          <header className="navheader">
            <NavBar />
          </header>
          <Switch>
            <Route path="/" component={TodoApp} exact />
          </Switch>
        </Router>
    </div>
    </ApolloProvider>
  );
}

export default App
