import React from "react"
import { Link } from "react-router-dom"
import Timestamp from "react-timestamp"

// IMPORT STYLES
const RepositoryItem = ({ handleSave, repository, classes, url }) => {
  const renderUrl = `/repositories/${url}/${repository.name}`

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

  return (
    <article className={classes.repositoryItem}>
      <Link to={renderUrl} className={classes.repositoryItemLink}>
        <div className={classes.repositoryItemData}>
          <h3>
            <strong>{repository.name}</strong>
          </h3>
          {repository.description && <p>{repository.description}</p>}
        </div>
        <div className={classes.repositoryItemMetadata}>
          {repository.language && (
            <p className={classes.repositoryMetadata}>{repository.language}</p>
          )}
          {repository.created_at && (
            <p className={classes.repositoryMetadata}>
              Created:{" "}
              <Timestamp
                className={classes.repositoryDate}
                options={{ twentyFourHour: true, includeTime: false }}
                date={repository.created_at}
              />
            </p>
          )}
          {repository.updated_at && (
            <p className={classes.repositoryMetadata}>
              Updated:{" "}
              <Timestamp
                className={classes.repositoryDate}
                relative
                options={{ twentyFourHour: true, includeTime: false }}
                date={repository.updated_at}
              />
            </p>
          )}
        </div>
      </Link>
      <button onClick={() => handleSave(repositoryData)}>Save</button>
    </article>
  )
}

export default RepositoryItem
