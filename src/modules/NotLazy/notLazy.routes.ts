import { Route } from '../../interfaces/routes.interfaces'
import { NotLazyPage1, NotLazyPage2, NotLazyPage3 } from './pages'

export const routes: Route[] = [
  {
    path: 'not-lazy1',
    to: 'not-lazy1',
    Component: NotLazyPage1,
    name: 'Not lazy page 1',
  },
  {
    path: 'not-lazy2',
    to: 'not-lazy2',
    Component: NotLazyPage2,
    name: 'Not lazy page 2',
  },
  {
    path: 'not-lazy3',
    to: 'not-lazy3',
    Component: NotLazyPage3,
    name: 'Not lazy page 3',
  },
]
