import logo from './logo.svg';
import './App.css';

import { Home } from './Home';
import { Anime } from './Anime';
import { Manga } from './Manga';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        Otaku App
      </h3>

    <Navigation/>

    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/anime" element={<Anime/>}/>
      <Route path="/manga" element={<Manga/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
