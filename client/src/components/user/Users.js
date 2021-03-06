import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Switch from "react-switch"
import classnames from "classnames"

// IMPORT ACTIONS
import { fetchUsers } from "../../store/actions/repositoryActions"
import { saveUser } from "../../store/actions/trackActions"
import { clearErrors } from "../../store/actions/loadingActions"

// IMPORT COMPONENTS
import Logo from "../../utils/images/sneaky.png"
import UserList from "./UserList"
import isEmpty from "../../utils/isEmpty"

// IMPORT STYLES
import { useStyles } from "../../styles/sneakin/sneakin.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

const Users = ({
  fetchUsers,
  saveUser,
  clearErrors,
  repositories,
  errors,
  history
}) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }
  const [query, setQuery] = useState("")
  const [type, setType] = useState({ toggle: false, value: "organizations" })
  const [error, setError] = useState("")
  const [page, setPage] = useState(0)

  // HANDLE API FETCH
  useEffect(() => {
    fetchUsers(type.value, page)
  }, [fetchUsers, type, page])

  // HANDLE ERROR MANAGEMENT
  useEffect(() => {
    !isEmpty(errors) && setError(errors.message)
  }, [errors])

  // TRACK USER
  const handleSave = userData => {
    saveUser(userData, history)
  }

  // UI ONCHANGE FUNCTIONS
  const handleChange = async e => {
    setQuery(e.target.value)
  }
  const handleToggle = () => {
    return type.value === "organizations"
      ? setType({ toggle: true, value: "users" })
      : setType({ toggle: false, value: "organizations" })
  }
  const handlePage = pageNumber => {
    setPage(page + pageNumber)
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
      <p className={classes.errors}>
        {error &&
          "Error 403, someone finally take some action regarding your creepyness! Shame on you!"}
      </p>
      <section className={classes.sneakinList}>
        {!error && (
          <UserList
            handleSave={handleSave}
            query={query}
            users={repositories.users}
            loading={repositories.loading}
            type={type.value}
          />
        )}
      </section>
      <section className={classes.sneakinPager}>
        {page > 0 && (
          <button onClick={() => handlePage(-50)}>Previous Page</button>
        )}
        <button onClick={() => handlePage(50)}>Next Page</button>
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  errors: state.errors
})

export default connect(mapStateToProps, { fetchUsers, saveUser, clearErrors })(
  Users
)
