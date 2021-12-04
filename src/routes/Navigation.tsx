import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";
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
              <NavLink to="/" className={activeLinkStyle}>
                Shopping
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/*" element={<h1>Not found Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
