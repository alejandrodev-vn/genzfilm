import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingPage from 'components/LoadingPage';
import { AuthProvider } from 'contexts/AuthContext';
import { CategoriesProvider } from 'contexts/CategoriesContext';
import { CommentsProvider } from 'contexts/CommentsContext';
import { CountriesProvider } from 'contexts/CountriesContext';
import { FilmsProvider } from 'contexts/FilmsContext';
import { ListLikeProvider } from 'contexts/ListLikeContext';
import BaoCao from 'pages/BaoCao';
import FilmDetail from 'pages/FilmDetail';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Watch from 'pages/Watch';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import 'scss/main.scss';

const Film = lazy(()=> import('pages/Film'))
const Country = lazy(()=> import('pages/Country'))
const CountryDetail = lazy(()=> import('pages/CountryDetail'))
const Genre = lazy(()=> import('pages/Genre'))
const GenreDetail = lazy(()=> import('pages/GenreDetail'))
const FilmTheater = lazy(()=> import('pages/FilmTheater'))
const HotFilm = lazy(()=> import('pages/HotFilm'))
const Favourite = lazy(()=> import('pages/Favourite'))

const App = () => {
    return (
      <Suspense fallback={<LoadingPage />}>
      <Router>
        <AuthProvider>
        <ListLikeProvider>
        <CategoriesProvider>
        <CountriesProvider>
        <CommentsProvider>
          <Header />
          <div className="wrapper">
          <FilmsProvider>
            <Switch>
              <Redirect exact from="/" to="/genzfilm"/>
              <Route path="/genzfilm" exact component={Home}/>
              <Route path="/genzfilm/baocao" component={BaoCao}/>
              <Route path="/genzfilm/film" exact component={Film}/>
              <Route path="/genzfilm/genre" exact component={Genre}/>
              <Route path="/genzfilm/film-hot" exact component={HotFilm}/>
              <Route path="/genzfilm/country" exact component={Country}/>
              <Route path="/genzfilm/theater"  component={FilmTheater}/>
              <Route path="/genzfilm/favourite"  component={Favourite}/>
              <Route path="/genzfilm/login"  component={Login}/>
              <Route path="/genzfilm/film/:id"  component={FilmDetail}/>
              <Route path="/genzfilm/watch/:id" component={Watch}/>
              <Route path="/genzfilm/genre/:id"  component={GenreDetail}/>
              <Route path="/genzfilm/country/:id"  component={CountryDetail}/>
              <Route component={NotFound} />
            </Switch>
          </FilmsProvider>
          </div>
        </CommentsProvider>
        </CountriesProvider>
        </CategoriesProvider>
        </ListLikeProvider>
          <Footer />
        </AuthProvider>
      </Router>
      </Suspense>
    );
  
}

export default App;
