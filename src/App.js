import React from 'react';
import Header from './common/header/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact render={() => <div>home</div>}></Route>
          <Route path='/detail' exact render={() => <div>detail</div>}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
