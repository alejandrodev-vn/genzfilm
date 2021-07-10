import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import FilmDetail from './pages/FilmDetail';
import Watch from './pages/Watch';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {

    return (
      <Router>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/film/:id"  component={FilmDetail}/>
            <Route path="/watch/:id" component={Watch}/>
          </Switch>
        </div>
       
        <Footer />
      </Router>
    );
  
}

export default App;
