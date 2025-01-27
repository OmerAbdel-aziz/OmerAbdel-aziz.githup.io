import logo from "../../../public/assets/images/GCST.png";

const AdminNav = () => {
  return (
    <div className="sticky top-0 z-50 px-5 bg-[#36573c]" lang="ar">
      <div className="navbar ">
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className="ml-10">
            <ul className="flex gap-6 justify-center items-center text-white font-cairo ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="/admin">Posts</a>
              </li>
              <li>
                <a href="/admin/departments">Departments Content</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 navbar-end">
          <img src={logo} alt="" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
