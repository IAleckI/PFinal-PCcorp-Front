import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, HttpLink, ApolloProvider , InMemoryCache } from '@apollo/client'

import App from './App.jsx'
const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: import.meta.env.API_KEY
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </ApolloProvider>
  </React.StrictMode>,
)