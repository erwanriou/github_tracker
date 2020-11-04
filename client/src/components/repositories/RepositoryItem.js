import React from "react"
import { Link } from "react-router-dom"
import Timestamp from "react-timestamp"

// IMPORT STYLES
const RepositoryItem = ({ repository, classes }) => {
  const handleSave = () => {
    return console.log("SAVE BUTTON")
  }

  return (
    <article className={classes.repositoryItem}>
      <Link to="/lol" className={classes.repositoryItemLink}>
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
      <button onClick={handleSave}>Save</button>
    </article>
  )
}

export default RepositoryItem
