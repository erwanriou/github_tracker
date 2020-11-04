import React from "react"
import { Link } from "react-router-dom"

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
      </Link>
      <button onClick={handleSave}>Save</button>
    </article>
  )
}

export default RepositoryItem
