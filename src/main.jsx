import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, HttpLink, ApolloProvider , InMemoryCache } from '@apollo/client'
import { Provider } from "react-redux";
import { store } from "./utils/state/store.js";

const URL = import.meta.env.VITE_URL

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: URL
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
