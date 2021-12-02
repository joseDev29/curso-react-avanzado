import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './notLazy.routes'

export const NotLazyLayout = () => {
  return (
    <div>
      <h1>Not lazy layout</h1>

      <ul>
        {routes.map(({ to, name }) => (
          <li>
            <NavLink key={to} to={to}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        {routes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        <Route path='*' element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  )
}
