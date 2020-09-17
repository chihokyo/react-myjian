import React from 'react';
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
