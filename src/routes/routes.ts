import { lazy } from 'react'

import { Route } from '../interfaces/routes.interfaces'
import { Home } from '../pages/Home'
import { NotLazyLayout } from '../modules/NotLazy/NotLazyLayout'

//Los componentes cargados mediante lazy deben ser exportados por defecto
//Los comentarios agregados al import permiten nombrar los chunks para poder
//diferenciarlos mas facilmente
const LazyLayout = lazy(
  () =>
    import(/* webpackChunkName: "LazyLayout" */ '../modules/Lazy/LazyLayout'),
)

export const routes: Route[] = [
  {
    path: 'home',
    to: '/home',
    Component: Home,
    name: 'Home',
  },
  //Permite definir rutas hijas
  {
    path: '/lazy-load/*',
    to: '/lazy-load/',
    Component: LazyLayout,
    name: 'Lazy Layout',
  },
  //Permite definir rutas hijas
  {
    path: '/not-lazy/*',
    to: '/not-lazy/',
    Component: NotLazyLayout,
    name: 'Not Lazy',
  },
]
