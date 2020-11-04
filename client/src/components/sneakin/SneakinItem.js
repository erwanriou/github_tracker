import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLES
const RepositoryItem = ({ user, type, classes }) => {
  const handleSave = () => {
    return console.log("SAVE BUTTON")
  }
  const typeSaved = type === "users" ? "user" : "company"
  return (
    <article className={classes.repositoryItem}>
      <Link
        to={`/repositories/${user.login}`}
        className={classes.repositoryItemLink}
      >
        <img src={user.avatar_url} alt={user.name} />
        <div className={classes.repositoryItemData}>
          <h3>
            <strong>{user.login}</strong>
          </h3>
          {user.description && <p>{user.description}</p>}
        </div>
      </Link>
      <button onClick={handleSave}>Save {typeSaved}</button>
    </article>
  )
}

export default RepositoryItem
