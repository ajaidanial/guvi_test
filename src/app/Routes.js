import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

// view helpers
import PublicLayoutRoute from './PublicLayoutRoute'
import { MainLayout } from '../layouts'

// app views
import { HomeView, NotFoundView } from '../views'

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <PublicLayoutRoute
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      {/* Not Found View */}
      <PublicLayoutRoute
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Routes
