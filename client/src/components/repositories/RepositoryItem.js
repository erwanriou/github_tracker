import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLES
const RepositoryItem = ({ repository, type, classes }) => {
  const handleSave = () => {
    return console.log("SAVE BUTTON")
  }

  return (
    <article className={classes.repositoryItem}>
      <Link
        to={`/repositories/${repository.login}`}
        className={classes.repositoryItemLink}
      >
        <img src={repository.avatar_url} alt={repository.name} />
        <div className={classes.repositoryItemData}>
          <h3>
            <strong>{repository.login}</strong>
          </h3>
          {repository.description && <p>{repository.description}</p>}
        </div>
      </Link>
      <button onClick={handleSave}>Save Repo</button>
    </article>
  )
}

export default RepositoryItem
