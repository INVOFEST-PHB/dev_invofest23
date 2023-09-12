// import logo from './logo.svg';
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHome from "./pages/PageHome";
import Competition from "./pages/Competition";
import Workshop from "./pages/Workshop";
import Seminar from "./pages/Seminar";
import About from "./pages/About";
import Login from "./component/Login/Login";
import WorkshopOne from "./pages/workshop/WorkshopOne";
import CompentitionVideo from "./pages/competition/CompetitionVideo";
import CompetitonUiUx from "./pages/competition/CompetitonUiUx";
import CompentitionSoftware from "./pages/competition/CompetitionSoftware";
import CompentitionKti from "./pages/competition/CompetitionKti";
import Register from "./component/Login/Register";
import CompetitionWebDesain from "./pages/competition/CompetitionWebDesain";
import Options from "./component/Form/DaftarWorkshop";
import DaftarTalkshow from "./component/Form/DaftarTalkshow";
// import Test from './pages/DashboardUser/Test';
import IndexUser from "./pages/DashboardUser/IndexUser";
import CompetitionUser from "./pages/DashboardUser/CompetitionUser";
// import IndexAdmin from './pages/DashboardAdmin/IndexAdmin';
// import DashboardLama from "./component/DashboardUser/DashboardLama";
// import IndexAdmin from "./pages/DashboardAdmin/IndexAdmin";
// import Kti from "./pages/DashboardAdmin/Competition/ComKti";
// import SoftwareDev from "./pages/DashboardAdmin/Competition/SoftwareDev";
// import DesainPoster from "./pages/DashboardAdmin/Competition/DesainPoster";
// import WorskspUiUx from "./pages/DashboardAdmin/Workshop/WorkspUiUx";
// import Ai from "./pages/DashboardAdmin/Workshop/Ai";
// import WorskspKti from "./pages/DashboardAdmin/Workshop/WorkspKti";
// import CyberSecurity from "./pages/DashboardAdmin/Seminar/CyberSecurity";
// import ComKti from "./pages/DashboardAdmin/Competition/ComKti";
// import COmUiUx from "./pages/DashboardAdmin/Competition/ComUiUx";

import { useEffect, useState } from "react";
import { Auth } from "./config/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NotFoound from "./config/NotFoound";

import PilihCompetition from "./component/DashboardUser/PilihCompetition";
import Test from "./pages/DashboardUser/Test";
import ChooseCompetition from "./pages/DashboardUser/Choose/ChooseCompetition";
import ChooseEventSeminar from "./pages/DashboardUser/Choose/ChooseEventSeminar";
import ChooseEventWorkshop from "./pages/DashboardUser/Choose/ChooseEventWorkshop";
import { Provider } from "react-redux";
import { Store } from "./config/Login/storeLogin";
import FormBiodata from "./component/Login/FormBiodata";
import DaftarSeminar from "./component/Form/DaftarSeminar";
import DaftarWorkshop from "./component/Form/DaftarWorkshop";
import RegisterSucces from "./component/success/RegisterSucces";
import BlankPage from "./component/BlankPage";
import Talkshow from "./pages/Talkshow";
import WorkshopThree from "./pages/workshop/WorkshopThree";
import WorkshopTwo from "./pages/workshop/WorkshopTwo";
import File from "./component/Login/FIle";
import DaftarCompetition from "./component/Form/DaftarCompetition";

// import Testing from "./component/DashboardUser/Testing";

function App() {
  const [user, setUser] = useState(null); // Store user information

  useEffect(() => {
    // Check if user is logged in
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user information if logged in
      } else {
        setUser(null); // Clear user information if not logged in
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener
    };
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<PageHome />} />

          {/* Compentition */}
          <Route path="/competition" element={<Competition />} />
          {/* <Route path="/competition/video-kreatif" element={<CompentitionVideo />} /> */}
          <Route path="/competition/ui-ux-desain" element={<CompetitonUiUx />} />
          <Route path="/competition/web-desain" element={<CompetitionWebDesain />} />
          <Route path="/competition/software-development" element={<CompentitionSoftware />} />
          {/* <Route path="/competition/karya-tulis-ilmiah" element={<CompentitionKti />} /> */}


          {/* Workshop */}
          <Route path="/file" element={<File />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/mobile-development" element={<WorkshopOne />} />
          <Route path="/workshop/ui-ux-desain" element={<WorkshopTwo />} />
          <Route path="/workshop/artificial-intellegence" element={<WorkshopThree/>} />


          {/* Talkshow */}
          <Route path="/talkshow" element={<Talkshow/>} />


          {/* Seminar */}
          <Route path="/seminar" element={<Seminar />} />

          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/biodata" element={ <FormBiodata />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/biodata" element={<Biodata />} /> */}


          {/* Dashboard User */}
          {user ? (
            <Route path="/Profile" element={<IndexUser user={user} />} />
          ) : (
            <Route path="*" element={<Login />} />
          )}
          <Route path="/competition-user" element={<CompetitionUser />} />

          {/* Pilih Competition & Event */}
          <Route path="/dashboard/pilih-competition" element={<ChooseCompetition />} />
          <Route path="/dashboard/pilih-seminar" element={<ChooseEventSeminar />} />
          <Route path="/dashboard/pilih-workshop" element={<ChooseEventWorkshop />} />
          
          {/* Daftar Competition */}
          <Route path="/competition/register-competition" element={<DaftarCompetition />} />
          {/* Daftar Seminar */}
          <Route path="/seminar/register-seminar" element={<DaftarSeminar />} />
          {/* Daftar Worskhop */}
          <Route path="/workshop/register-workshop" element={<DaftarWorkshop />} />
          <Route path="/talkshow/register-talkshow" element={<DaftarTalkshow />} />


          {/* Dashboard Admin */}
          {/* <Route path="/admin" element={<IndexAdmin />} /> */}
          {/* Dashboard Admin Competition */}
          {/* <Route path="/admin/data-competition/kti" element={<ComKti />} />
          <Route path="/admin/data-competition/software-development" element={<SoftwareDev />} />
          <Route path="/admin/data-competition/ui-ux" element={<COmUiUx />} />
          <Route path="/admin/data-competition/desain-poster" element={<DesainPoster />}
          /> */}
          {/* Dashboard Admin Workshop */}
          {/* <Route path="/admin/data-workshop/ui-ux" element={<WorskspUiUx />} />
          // <Route path="/admin/data-workshop/ai" element={<Ai />} />
          <Route path="/admin/data-workshop/kti" element={<WorskspKti />} /> */}
          {/* Dashboard Admin Seminar */}
          {/* <Route path="/admin/data-seminar/cyber-security" element={<CyberSecurity />}
          /> */}

          
          {/* Page Response */}
          <Route path="/success" element={<RegisterSucces/>} />
          <Route path="/blank" element={<BlankPage/>} />


          {/* Testing Layout */}
          {/* <Route path="/testing" element={<IndexAdmin />} />
          <Route path="/testing" element={<DashboardLama />} /> */}
          {/* <Route path="/testing" element={<IndexAdmin/>} /> */}
          {/* <Route path="/testing" element={<Test />} /> */}

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
