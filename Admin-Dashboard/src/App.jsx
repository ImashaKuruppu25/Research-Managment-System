import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Submissions from "./pages/Submissions/Submissions";
import Groups from "./pages/Groups/Groups";
import Users from "./pages/Users/Users";
import Markings from "./pages/Marking/Markings";
import Documents from "./pages/Documents/Documents";
import ViewGroup from "./pages/Groups/ViewGroup";
import UpdateUser from "./pages/Users/UpdateUser";
import UploadMarkingScheme from "./pages/Marking/UploadMarkingScheme";
import UserRoles from "./pages/UserRoles/UserRoles";
import CreatePanel from "./pages/UserRoles/CreatePanel";
import EditPanel from "./pages/UserRoles/EditPanel";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/auth/Singup";
import Login from "./pages/auth/Login";
import Home from "./pages/auth/Home/Home";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        {user && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="submissions" element={<Submissions />} />
            <Route path="groups" element={<Groups />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UpdateUser />} />
            <Route path="userRoles" element={<UserRoles />} />
            <Route path="userRoles/createPanel" element={<CreatePanel />} />
            <Route path="userRoles/edit/:id" element={<EditPanel />} />
            <Route path="documents" element={<Documents />} />
            <Route path="markings" element={<Markings />} />
            <Route path="markings/create" element={<UploadMarkingScheme />} />
            <Route path="groups/:id" element={<ViewGroup />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
