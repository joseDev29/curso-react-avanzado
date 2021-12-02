import { LazyExoticComponent } from 'react'

export type JSXComponent = () => JSX.Element

export interface Route {
  path: string
  to: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}
