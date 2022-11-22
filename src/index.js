import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ContextProvider } from './utils/context/ContextProvider';

const client = new ApolloClient({
    uri:"http://localhost:5001/gql",
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </ApolloProvider>
);
