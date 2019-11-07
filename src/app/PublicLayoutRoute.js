import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PublicLayoutRoute = (props) => {
  /**
   * Basic non-auth route.
   * Auth: None
   * Renders the page with the provided layout.
   */

  const { layout: Layout, component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}

PublicLayoutRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  layout: PropTypes.func,
  location: PropTypes.object
}

export default PublicLayoutRoute
