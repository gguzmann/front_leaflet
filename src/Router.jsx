import React from 'react'
import { Route, Switch } from 'wouter'
import { Mapa } from './components/map/Mapa'
import App from './App'
import { Login } from './components/login/Login'

export const Router = () => {
  return (

    <Switch>

      <Route path='/login' component={Login} />
      <Route path='/:name' component={App} />
      <Route path='/:name/dev' component={App} />
      <Route path='/' component={Mapa} />
      <Route component={Mapa} />
    </Switch>
  )
}
