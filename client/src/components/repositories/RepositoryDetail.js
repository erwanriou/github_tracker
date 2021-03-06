import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import classnames from "classnames"

// IMPORT ACTIONS
import { fetchRepository } from "../../store/actions/repositoryActions"
import { saveRepository } from "../../store/actions/trackActions"
import { clearErrors } from "../../store/actions/loadingActions"

// IMPORT COMPONENTS
import isEmpty from "../../utils/isEmpty"
import Loader from "../layout/Loader"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/repository.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

// IMPORT STYLES
const RepositoryDetail = ({
  fetchRepository,
  saveRepository,
  history,
  clearErrors,
  repositories: { loading, repository, contributors },
  errors,
  match: {
    params: { username, repositoryId }
  }
}) => {
  const classes = { ...useStyles(), ...useCommons() }
  const [error, setError] = useState("")

  // HANDLE API FETCH
  useEffect(() => {
    const name = username.split("-")[1]
    fetchRepository(name, repositoryId)
  }, [fetchRepository, username, repositoryId])

  // HANDLE ERROR MANAGEMENT
  useEffect(() => {
    !isEmpty(errors) && setError(errors.message)
  }, [errors])

  // TRACK REPOSITORY
  const handleSave = () => {
    // MANAGE USER DATA
    const repositoryData = {
      name: repository.name,
      id: repository.id,
      node_id: repository.node_id,
      url: repository.url,
      watchers: repository.watchers,
      description: repository.description,
      forks: repository.forks,
      language: repository.language,
      updated_at: repository.updated_at,
      created_at: repository.created_at
    }

    saveRepository(repositoryData, history)
  }

  return (
    <main
      className={classnames(classes.container, classes.repositoryContainer)}
    >
      <section className={classes.repositoryBanner}>
        <div className={classes.repositoryBannerTitle}>
          <h1>Look what we just found here, niark niark... </h1>
          <h2>
            congratulation you discovered <strong>{repositoryId}</strong>, do
            you want to add it to your pokedex?
          </h2>
        </div>
        <div className={classes.repositoryBannerButton}>
          <button onClick={handleSave}>Get this pokemon</button>
        </div>
      </section>
      {loading ? (
        <Loader />
      ) : (
        !error && (
          <section className={classes.repositoryData}>
            <div className={classes.repositoryTitle}>
              {repository.owner && (
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />
              )}
              <h1>{repository.full_name}</h1>
            </div>
            <h3>{repository.description}</h3>
            <div className={classes.repositoryMetadataList}>
              <p className={classes.repositoryMetadata}>
                Default Branch: {repository.default_branch}
              </p>
              <p className={classes.repositoryMetadata}>
                Forks: {repository.forks_count}
              </p>
              <p className={classes.repositoryMetadata}>
                Issues: {repository.open_issues}
              </p>
              <p className={classes.repositoryMetadata}>
                Watchers: {repository.watchers}
              </p>
              <p className={classes.repositoryMetadata}>
                Subscribers: {repository.subscribers_count}
              </p>
            </div>
            <h2>contributors:</h2>
            {!isEmpty(contributors) && (
              <div className={classes.repositoryContributors}>
                {contributors.map(contributor => (
                  <div
                    key={contributor.id}
                    className={classes.repositoryContributor}
                  >
                    <img src={contributor.avatar_url} alt={contributor.login} />
                    <div className={classes.repositoryContributorData}>
                      <h3>{contributor.login}</h3>
                      <p>
                        Contributions:{" "}
                        <strong>{contributor.contributions} commits</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )
      )}
    </main>
  )
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  errors: state.errors
})

export default connect(mapStateToProps, {
  fetchRepository,
  saveRepository,
  clearErrors
})(RepositoryDetail)
