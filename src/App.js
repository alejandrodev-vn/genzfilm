import './scss/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Film from './pages/Film';
import FilmDetail from './pages/FilmDetail';
import Watch from './pages/Watch';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Genre from './pages/Genre';
import NotFound from './pages/NotFound';
import GenreDetail from './pages/GenreDetail';
import { CategoriesProvider } from './contexts/CategoriesContext'
import { ListLikeProvider } from './contexts/ListLikeContext';
import { FilmsProvider } from './contexts/FilmsContext';
import HotFilm from './pages/HotFilm';
import { CountriesProvider } from './contexts/CountriesContext';
import CountryDetail from './pages/CountryDetail';
import FilmTheater from './pages/FilmTheater';

const App = () => {
    return (
      <Router>
        <ListLikeProvider>
        <CategoriesProvider>
        <CountriesProvider>
          <Header />
          <div className="wrapper">
          <FilmsProvider>
            <Switch>
              <Redirect exact from="/" to="/genzfilm"/>
              <Route path="/genzfilm" exact component={Home}/>
              <Route path="/genzfilm/about" component={About}/>
              <Route path="/genzfilm/film" exact component={Film}/>
              <Route path="/genzfilm/genre" exact component={Genre}/>
              <Route path="/genzfilm/film-hot" exact component={HotFilm}/>
              <Route path="/genzfilm/theater"  component={FilmTheater}/>
              <Route path="/genzfilm/film/:id"  component={FilmDetail}/>
              <Route path="/genzfilm/watch/:id" component={Watch}/>
              <Route path="/genzfilm/genre/:id"  component={GenreDetail}/>
              <Route path="/genzfilm/country/:id"  component={CountryDetail}/>
              <Route component={NotFound} />
            </Switch>
          </FilmsProvider>
          </div>
        </CountriesProvider>
        </CategoriesProvider>
        </ListLikeProvider>
          <Footer />
      </Router>
    );
  
}

export default App;
