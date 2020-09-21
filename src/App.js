import React from 'react';
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
