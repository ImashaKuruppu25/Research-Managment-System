import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Submissions from "./pages/Submissions";
import Groups from "./pages/Groups";
import Users from "./pages/Users/Users";
import Markings from "./pages/Markings";
import Documents from "./pages/Documents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="groups" element={<Groups />} />
          <Route path="users" element={<Users />} />
          <Route path="documents" element={<Documents />} />
          <Route path="markings" element={<Markings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
