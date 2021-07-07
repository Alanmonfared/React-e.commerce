import './App.css';
import Navbar from './components/nav/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import ProductInfo from './views/ProductInfo';
import CartShop from './views/CartShop';
import LoginUser from './views/LoginUser';
import UserAddOrder from './views/UserAddOrder';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Router>

        <Navbar />
      
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductInfo} />
            <Route exact path="/products/:id/CartShop" component={CartShop} />
            <Route exact path="/loginuser" component={LoginUser} />
            <Route exact path="/about"  component={About}/>
            <Route exact path="/userAddOrder"  component={UserAddOrder}/>

            <ProtectedRoute exact path="/products"component={ProtectedRoute}/>
        </Switch>


    </Router>
  );
}

export default App;
