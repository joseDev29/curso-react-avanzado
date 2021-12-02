import { Route } from '../../interfaces/routes.interfaces'
import { LazyPage1, LazyPage2, LazyPage3 } from './pages'

export const routes: Route[] = [
  {
    path: 'lazy1',
    to: 'lazy1',
    Component: LazyPage1,
    name: 'Lazy page 1',
  },
  {
    path: 'lazy2',
    to: 'lazy2',
    Component: LazyPage2,
    name: 'Lazy page 2',
  },
  {
    path: 'lazy3',
    to: 'lazy3',
    Component: LazyPage3,
    name: 'Lazy page 3',
  },
]
