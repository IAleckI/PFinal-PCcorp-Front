import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, HttpLink, ApolloProvider , InMemoryCache } from '@apollo/client'
import { Provider } from "react-redux";
import { store } from "./utils/state/store.js";
import { AuthProvider } from './utils/hooks/auth/authContext.jsx';

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
      <AuthProvider>
        <BrowserRouter>
         <App />
        </BrowserRouter>
        </AuthProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
