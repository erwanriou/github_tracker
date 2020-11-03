import React from "react"
import { render } from "react-dom"
import { store } from "./store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./components/App"

// DEFINE ROOT AND RENDER ELEMENT
const rootElement = document.getElementById("root")
const appRender = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
// RENDER APP
render(appRender, rootElement)
