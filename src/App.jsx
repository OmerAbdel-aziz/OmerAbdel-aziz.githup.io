import { Routes, Route, Outlet } from "react-router-dom";

//Arabic Pages
import ArabicHomePage from "./arabic/ArabicHomePage";
import ArabicStaffPage from "./arabic/pages/ArabicStaffPage";
import ArabicAdmissionPage from "./arabic/pages/ArabicAdmissionPage";
import ArabicDepartmentsPage from "./arabic/pages/ArabicDepartmentsPage";
import ArabicAcademicPage from "./arabic/pages/ArabicAcademicPage";
import ArabicCentersPage from "./arabic/pages/ArabicCentersPage";
import ArabicAllNewsPage from "./arabic/pages/ArabicAllNewsPage";
import ArabicSingleNewsPage from "./arabic/pages/ArabicSingleNewsPage";
import ArabicLayout from "./layout/ArabicLayout";
import ArabicNotFound from "./arabic/pages/NotFound";

//English Pages
import StaffPage from "./english/pages/StaffPage";
import AdmissionPage from "./english/pages/AdmissionPage";
import DepartmentsPage from "./english/pages/DepartmentsPage";
import AcademicPage from "./english/pages/AcademicPage";
import CentersPage from "./english/pages/CentersPage";
import AllNewsPage from "./english/pages/AllNewsPage";
import SingleNewsPage from "./english/pages/SingleNewsPage";

import EnglishLayout from "./layout/EnglishLayout";
import EnglishHomePage from "./english/EnglishHomePage";

//Admin
import AdminPanel from "./admin/AdminPanel";
import AdminLayout from "./layout/AdminLayout";
import HeroEditingPanel from "./admin/pages/PostEditingPanel";
import AboutEditingPanel from "./admin/pages/AboutEditingPanel";
import NotFound from "./english/pages/NotFound";
import PostEditingPanel from "./admin/pages/PostEditingPanel";
import PostAddingPage from "./admin/pages/PostAddingPage";

function App() {
  return (
    <Routes>
      {/* Arabic Routes */}
      <Route
        path="/*"
        element={
          <ArabicLayout>
            <Routes>
              <Route path="/" element={<ArabicHomePage />} />
              <Route
                path="/staff"
                element={<ArabicStaffPage className="font-cairo" lang="ar" />}
              />
              <Route path="/admission" element={<ArabicAdmissionPage />} />
              <Route path="/departments" element={<ArabicDepartmentsPage />} />
              <Route path="/academic" element={<ArabicAcademicPage />} />
              <Route path="/centers" element={<ArabicCentersPage />} />
              <Route path="/all-news-ar" element={<ArabicAllNewsPage />} />
              <Route path="/post/:id" element={<ArabicSingleNewsPage />} />
              <Route path="*" element={<ArabicNotFound />} />
            </Routes>
          </ArabicLayout>
        }
      />

      {/* English Routes */}
      <Route
        path="/english/*"
        element={
          <EnglishLayout>
            <Routes>
              <Route path="/" element={<EnglishHomePage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/admission" element={<AdmissionPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/academic" element={<AcademicPage />} />
              <Route path="/centers" element={<CentersPage />} />
              <Route path="/all-news" element={<AllNewsPage />} />
              <Route path="/post/:id" element={<SingleNewsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </EnglishLayout>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<AdminPanel />} />
              <Route path="/add-post" element={<PostAddingPage />} />
              <Route path="/edit-post/:id" element={<PostEditingPanel />} />
              <Route path="/edit-about/:id" element={<AboutEditingPanel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AdminLayout>
        }
      />

      {/* Fallback Route for unmatched paths */}
    </Routes>
  );
}

export default App;
