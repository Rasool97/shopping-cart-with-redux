import { Switch ,Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './redux/store';
import ProductDetails from './pages/ProductDetails';
import Products from "./pages/Products";
import ShopCart from './pages/ShopCart';
import Notfound from './pages/Notfound';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

const App = () => {
 
  return (
      <Provider store={store}>
          <Navbar />
          <main className='bg-gray-100 min-h-screen pt-20'>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/products/:id' component={ProductDetails} />
              <Route path='/products' component={Products} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/contactus' component={ContactUs} />
              <Route path='/cart' component={ShopCart} />
              <Route path='/notfound' component={Notfound} />
              <Redirect from='/*' to='/notfound' />
            </Switch>
          </main>
          <Footer/>
      </Provider>
  );
}

export default App;
