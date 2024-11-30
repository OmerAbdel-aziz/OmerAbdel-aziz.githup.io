import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Staff from "./components/Staff";
import Students from "./components/Students";
import StaffPage from "./pages/StaffPage";
import AddmissionPage from "./pages/AddmissionPage";
import DepartmentsPage from "./pages/DepartmntsPage";
import AcademicPage from "./pages/AcademicPage";
import CentersPage from "./pages/CentersPage";
import AllNewsPage from "./pages/AllNewsPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import AdminPanel from "./admin/AdminPanel";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/admission" element={<AddmissionPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/academic" element={<AcademicPage />} />
              <Route path="/centers" element={<CentersPage />} />
              <Route path="/all-news" element={<AllNewsPage />} />
              <Route path="/single-news" element={<SingleNewsPage />} />
              <Route path="/students" element={<Students />} />
            </Routes>
            <Footer />
          </>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<AdminPanel />} />
            </Routes>
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default App;
