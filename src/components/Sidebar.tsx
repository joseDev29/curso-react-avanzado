import { NavLink } from 'react-router-dom'

import { routes } from '../routes/routes'

import Logo from '../logo.svg'

export const Sidebar = () => {
  //La prop isActive es propia del componente NavLink
  const activeLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-active' : ''

  return (
    <nav>
      <img src={Logo} alt='React logo' />
      <ul>
        {routes.map(({ to, name }) => (
          <li key={to}>
            <NavLink to={to} className={activeLinkStyle}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
