import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import client from './utils/ApolloClient'
import { Provider } from 'react-redux'
import store from './store'
import ThemeApp from './Theme'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeApp />
    </Provider>
  </ApolloProvider>,
  document.querySelector('#root'),
)
