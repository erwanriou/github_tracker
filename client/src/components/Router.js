import React from "react"
import { Route, Switch } from "react-router"

// IMPORT ROUTES
import { Routes } from "./Routes"
import SneakIn from "./repositories/SneakIn"
import NotFound from "./layout/NotFound"

const Router = ({ router }) => {
  return (
    <Switch>
      <Route exact path="/" component={SneakIn} />
      {Routes.auth.map((page, index) => (
        <Route exact key={index} path={page.path} component={page.component} />
      ))}
      {Routes.repositories.map((page, index) => (
        <Route exact key={index} path={page.path} component={page.component} />
      ))}
      <Route exact component={NotFound} />
    </Switch>
  )
}

export default Router
