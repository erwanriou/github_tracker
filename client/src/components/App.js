import React from "react"
import { withRouter } from "react-router-dom"

// IMPORT STYLES
import { JssProvider } from "react-jss"
import { fonts } from "../styles/common/fonts.styles.js"
import { defaultStyles } from "../styles/common/default.styles.js"
// IMPORT COMPONENTS
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Router from "./Router"

const App = () => {
  // LOAD DEFAULT STYLES
  defaultStyles()
  fonts()

  return (
    <JssProvider classNamePrefix="github_tracker">
      <Header />
      <Router />
      <Footer />
    </JssProvider>
  )
}

export default withRouter(App)
