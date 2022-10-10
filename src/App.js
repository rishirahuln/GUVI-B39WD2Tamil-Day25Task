import "./App.css";
import "./sb-admin-2.css";
import "./fontawesome-free/css/all.min.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListUsers from "./ListUsers";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/users" element={<ListUsers />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;