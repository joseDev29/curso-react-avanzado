import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Sidebar } from '../components/Sidebar'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <BrowserRouter>
        <div className='main-layout'>
          <Sidebar />

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={'/home'} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
