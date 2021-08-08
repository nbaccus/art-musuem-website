import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="Content">
    <Switch>
    <Route path="/" exact component = {Home}/>
    <Route path="/about-us" component = {About}/>
    <Route path="/contact-us" component = {Contact}/>
    </Switch>
    </div>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
