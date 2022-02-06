import React from 'react';
import { Provider } from 'react-redux';
import  store   from './store/store';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
//styles
import "./App.scss"



const App = () => {
  return (
    <Provider store={store}>
<div className="app">
     <Header />
     <Products />
    </div>
    </Provider>
    
  )
}



export default App;
