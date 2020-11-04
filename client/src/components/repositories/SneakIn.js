import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Switch from "react-switch"
import classnames from "classnames"

// IMPORT ACTIONS
import { fetchRepositories } from "../../store/actions/repositoryActions"

// IMPORT COMPONENTS
import Logo from "../../utils/images/sneaky.png"
import RepositoriesList from "./RepositoriesList"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/sneakin.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

const SneakIn = ({ fetchRepositories, repositories }) => {
  const classes = { ...useStyles(), ...useCommons() }
  const [query, setQuery] = useState("")
  const [type, setType] = useState({ toggle: false, value: "organizations" })

  useEffect(() => {
    fetchRepositories(type)
  }, [fetchRepositories, type])

  const handleChange = async e => {
    setQuery(e.target.value)
  }
  const handleToggle = () => {
    return type.value === "organizations"
      ? setType({ toggle: true, value: "users" })
      : setType({ toggle: false, value: "organizations" })
  }
  return (
    <main className={classnames(classes.container, classes.sneakinContainer)}>
      <section className={classes.sneakinBanner}>
        <img src={Logo} alt="sneaky logo" />
        <h1>Sneak in..</h1>
        <h2>friends repositories and track what they do gni gni!</h2>
      </section>
      <section className={classes.sneakinSearchbar}>
        <div className={classes.seankinToggle}>
          <p>
            your creepy attention is destined to the{" "}
            <strong>{type.value}</strong>
          </p>
          <Switch
            onChange={handleToggle}
            checked={type.toggle}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#de5858"
            offColor="#ddd"
          />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="find content as dirty as PHP! (adult only)"
        />
      </section>
      <section className={classes.sneakinList}>
        <RepositoriesList repositories={repositories} />
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  repositories: state.repositories
})

export default connect(mapStateToProps, { fetchRepositories })(SneakIn)
