import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import classnames from "classnames"

// IMPORT ACTIONS
import { fetchRepositories } from "../../store/actions/repositoryActions"
import { clearErrors } from "../../store/actions/loadingActions"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/repositories.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

// IMPORT COMPONENTS
import isEmpty from "../../utils/isEmpty"
import RepositoryList from "./RepositoryList"

// IMPORT STYLES
const Repositories = ({
  fetchRepositories,
  clearErrors,
  repositories,
  errors,
  match: {
    params: { username }
  }
}) => {
  const classes = { ...useStyles(), ...useCommons() }
  const [query, setQuery] = useState("")
  const [error, setError] = useState("")
  const [page, setPage] = useState(0)

  // HANDLE API FETCH
  useEffect(() => {
    const type = username.split("-")[0]
    const name = username.split("-")[1]

    fetchRepositories(type, name, page)
  }, [fetchRepositories, username, page])

  // HANDLE ERROR MANAGEMENT
  useEffect(() => {
    !isEmpty(errors) && setError(errors.message)
  }, [errors])

  // UI ONCHANGE FUNCTIONS
  const handleChange = async e => {
    setQuery(e.target.value)
  }

  const handlePage = pageNumber => {
    setPage(page + pageNumber)
  }
  return (
    <main
      className={classnames(classes.container, classes.repositoriesContainer)}
    >
      <section className={classes.repositoriesBanner}>
        <div className={classes.repositoriesBannerTitle}>
          <h1>
            Ok you choose to sneak in..{" "}
            <strong>{username.split("-")[1]}</strong>
          </h1>
          <h2>Let's find out all its dirty secrets!!</h2>
        </div>
        <div className={classes.repositoriesBannerSearch}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Repo repooo where are youuu???"
          />
        </div>
      </section>
      <section className={classes.repositoriesList}>
        {!error && (
          <RepositoryList
            query={query}
            repositories={repositories.repositories}
            loading={repositories.loading}
            url={username}
          />
        )}
      </section>
      <section className={classes.repositoriesPager}>
        {page > 0 && (
          <button onClick={() => handlePage(-1)}>Previous Page</button>
        )}
        {repositories.repositories.length === 50 && (
          <button onClick={() => handlePage(1)}>Next Page</button>
        )}
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  errors: state.errors
})

export default connect(mapStateToProps, { fetchRepositories, clearErrors })(
  Repositories
)
