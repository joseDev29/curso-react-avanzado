import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Logo from "../logo.svg";

export const Navigation = () => {
  //La prop isActive es propia del componente NavLink
  const activeLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-active" : "";

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/home" className={activeLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={activeLinkStyle}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
