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
import CompentitionVideo from './pages/competition/CompetitionVideo';
import CompetitonUiUx from './pages/competition/CompetitonUiUx';
import CompentitionSoftware from './pages/competition/CompetitionSoftware';
import CompentitionKti from './pages/competition/CompetitionKti';
import Register from './component/Login/Register';
import CompetitionWebDesain from "./pages/competition/CompetitionWebDesain";
// import Test from './pages/DashboardUser/Test';
import IndexUser from './pages/DashboardUser/IndexUser';
import CompetitionUser from './pages/DashboardUser/CompetitionUser';
// import IndexAdmin from './pages/DashboardAdmin/IndexAdmin';
import DashboardLama from './component/DashboardUser/DashboardLama';
import IndexAdmin from './pages/DashboardAdmin/IndexAdmin';
import Kti from './pages/DashboardAdmin/Competition/ComKti';
import SoftwareDev from './pages/DashboardAdmin/Competition/SoftwareDev';
import DesainPoster from './pages/DashboardAdmin/Competition/DesainPoster';
import WorskspUiUx from './pages/DashboardAdmin/Workshop/WorkspUiUx';
import Ai from './pages/DashboardAdmin/Workshop/Ai';
import WorskspKti from './pages/DashboardAdmin/Workshop/WorkspKti';
import CyberSecurity from './pages/DashboardAdmin/Seminar/CyberSecurity';
import ComKti from './pages/DashboardAdmin/Competition/ComKti';
import COmUiUx from './pages/DashboardAdmin/Competition/ComUiUx';
// import Testing from "./component/DashboardUser/Testing";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          {/* Compentition */}
          <Route path="/competition" element={<Competition />} />
          <Route
            path="/competition/video-kreatif"
            element={<CompentitionVideo />}
          />
          <Route path="/competition/ui-ux" element={<CompetitonUiUx />} />
          <Route
            path="/competition/software-developer"
            element={<CompentitionSoftware />}
          />
          <Route
            path="/competition/karya-tulis-ilmiah"
            element={<CompentitionKti />}
          />
          <Route
            path="/competition/web-desain"
            element={<CompetitionWebDesain />}
          />

          {/* Compentition */}
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/mobile_app" element={<WorkshopOne />} />
          <Route path="/workshop/laravel" element={<WorkshopOne />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard User */}
          <Route path="/dashboard" element={<IndexUser />} />
          <Route path="/competition-user" element={<CompetitionUser />} />

          {/* Dashboard Admin */}
          <Route path="/admin" element={<IndexAdmin />} />

          {/* Dashboard Admin Competition */}
          <Route path="/admin/data-competition/kti" element={<ComKti/>} />
          <Route path="/admin/data-competition/software-development" element={<SoftwareDev/>} />
          <Route path="/admin/data-competition/ui-ux" element={<COmUiUx/>} />
          <Route path="/admin/data-competition/desain-poster" element={<DesainPoster/>}/>

          {/* Dashboard Admin Workshop */}
          <Route path="/admin/data-workshop/ui-ux" element={<WorskspUiUx/>}/>
          <Route path="/admin/data-workshop/ai" element={<Ai/>}/>
          <Route path="/admin/data-workshop/kti" element={<WorskspKti/>}/>

          {/* Dashboard Admin Seminar */}
          <Route path="/admin/data-seminar/cyber-security" element={<CyberSecurity/>}/>

          {/* Testing Layout */}
          {/* <Route path="/testing" element={<IndexAdmin/>} /> */}
          <Route path="/testing" element={<DashboardLama />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
