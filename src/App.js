import { Switch ,Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './redux/store';
import ProductDetails from './pages/ProductDetails';
import Products from "./pages/Products";
import ShopCart from './pages/ShopCart';
import Notfound from './pages/Notfound';

const App = () => {
 
  return (
      <Provider store={store}>
          <Navbar />
          <main className='bg-gray-100 min-h-screen pt-20'>
            <Switch>
              <Route path='/cart' component={ShopCart} />
              <Route path='/products/:id' component={ProductDetails} />
              <Route path='/products' component={Products} />
              <Route path='/notfound' component={Notfound} />
              <Redirect to='/notfound' />
            </Switch>
          </main>
      </Provider>
  );
}

export default App;
