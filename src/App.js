import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
// import AlbumFeature from './features/Album';
import CartFeature from './features/Cart/CartFeature';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };

  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const requestUrl=""
  //   const response = await fetch(requestUrl);
  //   const responseJSON = await response.json();
  //   console.log(responseJSON)

  //   const {data} = responseJSON;
  //   setProduct=(data);
  //   }
  //   fetchProducts();
  // },[])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        {/* <Route path="/albums" component={AlbumFeature}></Route> */}
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
