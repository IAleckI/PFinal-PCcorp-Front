import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, HttpLink, ApolloProvider , InMemoryCache } from '@apollo/client'
import { Provider } from "react-redux";
import { store } from "./utils/state/store.js";


const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri:'https://back-mans.onrender.com/graphql'
    })
})

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
