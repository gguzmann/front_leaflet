import React from 'react'
import { Route, Switch } from 'wouter'
import { Mapa } from './components/map/Mapa'
import App from './App'
import { Login } from './components/login/Login'
import { Home } from './components/home/Home'

export const Router = () => {
  return (

    <Switch>

      <Route path='/:name' component={App} />
      <Route component={App} />
    </Switch>
  )
}
