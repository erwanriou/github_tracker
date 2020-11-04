import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import classnames from "classnames"

// IMPORT ACTIONS
import { fetchRepositories } from "../../store/actions/repositoryActions"

// IMPORT COMPONENTS
import Logo from "../../utils/images/sneaky.png"
import RepositoriesList from "./RepositoriesList"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/sneakin.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

const SneakIn = ({ fetchRepositories }) => {
  const classes = { ...useStyles(), ...useCommons() }
  const [query, setQuery] = useState("")
  const [type, setType] = useState("organization")

  useEffect(() => {
    fetchRepositories(type)
  }, [fetchRepositories, type])

  const handleChange = async e => {
    setQuery(e.target.value)
  }

  return (
    <main className={classnames(classes.container, classes.sneakinContainer)}>
      <section className={classes.sneakinBanner}>
        <img src={Logo} alt="sneaky logo" />
        <h1>Sneak in..</h1>
        <h2>friends repositories and track what they do gni gni!</h2>
      </section>
      <section className={classes.sneakinSearchbar}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="find content as dirty as PHP! (adult only)"
        />
      </section>
      <section className={classes.sneakinList}>
        <RepositoriesList />
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  repositories: state.repositories
})

export default connect(mapStateToProps, { fetchRepositories })(SneakIn)
