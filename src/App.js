// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHome from './pages/PageHome';
import Competition from './pages/Competition';
import Workshop from './pages/Workshop';
import Seminar from './pages/Seminar';
import About from "./pages/About";
import Login from './component/Login/Login';
import WorkshopOne from './pages/workshop/WorkshopOne';
import CompentitionVideo from './pages/competition/CompentitionVideo';
import CompetitonUiUx from './pages/competition/CompetitonUiUx';
import CompentitionSoftware from './pages/competition/CompentitionSoftware';
import CompentitionKti from './pages/competition/CompentitionKti';
import Register from './component/Login/Register';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          {/* Compentition */}
          <Route path="/competition" element={<Competition />} />
          <Route path="/competition/video-kreatif" element={<CompentitionVideo />} />
          <Route path="/competition/ui-ux" element={<CompetitonUiUx />} />
          <Route path="/competition/software-developer" element={<CompentitionSoftware />} />
          <Route path="/competition/karya-tulis-ilmiyah" element={<CompentitionKti />} />

          {/* Compentition */}
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/mobile_app" element={<WorkshopOne />} />
          <Route path="/workshop/laravel" element={<WorkshopOne />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={ <Login /> }/>
          <Route path="/register" element={ <Register /> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
