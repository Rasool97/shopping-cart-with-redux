import { Switch ,Route, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

// import required modules
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import Products from "./pages/Products";
import ShopCart from './pages/ShopCart';
import Notfound from './pages/Notfound';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

const App = () => {
 
  return (
      <Provider store={store}>
          <Navbar />
          <main className='bg-gray-100'>
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
            <Subscribe />
          </main>
          <Footer/>
      </Provider>
  );
}

export default App;
