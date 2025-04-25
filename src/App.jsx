import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import MoviesView from './views/MoviesView';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          {/* <Route path="genre/:genre_id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailMovieView />} /> */}
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;