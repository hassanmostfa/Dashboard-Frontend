import React from 'react';
import '../src/App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Protected from './components/Protected';
import UpdateProduct from './components/UpdateProduct';
import ProductList from './components/ProductList';
import SearchProduct from './components/SearchProduct';
import { BrowserRouter , Route , Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/signin' element = {<Login/>} />
        <Route path='/' exact element = {<Protected Cmp={ProductList}/>}/>
        <Route path='/search' exact element = {<Protected Cmp={SearchProduct}/>}/>
        <Route path='/add' element = {<Protected Cmp={AddProduct}/>} /*{<AddProduct/>}*/ />
        <Route path='/update/:id' element = {<Protected Cmp={UpdateProduct}/>} /*{<UpdateProduct/>}*/ />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
