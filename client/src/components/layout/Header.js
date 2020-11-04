import React from "react"
import classnames from "classnames"
import { NavLink } from "react-router-dom"

// IMPORT COMPONENTS
import Logo from "../../utils/images/sneaky.png"

// IMPORT STYLES
import { useStyles } from "../../styles/layout/header.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

const Header = () => {
  const classes = { ...useStyles(), ...useCommons() }
  return (
    <header>
      <div className={classnames(classes.container, classes.headerContainer)}>
        <NavLink to="/">
          <img src={Logo} alt="sneaky logo" />
        </NavLink>
        <nav>
          <NavLink to="/">Sneak In</NavLink>
          <NavLink to="/tracks/repositories">Pokemons</NavLink>
          <NavLink to="/tracks/users">Make it private</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
