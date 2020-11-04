import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLES
const SneakinItem = ({ user, type, classes }) => {
  const handleSave = () => {
    return console.log("SAVE BUTTON")
  }
  const typeSaved = type === "users" ? "user" : "company"
  // DISSOCIATE ORGS FROM USERS IN URL
  const url =
    type === "users"
      ? `/repositories/users-${user.login}`
      : `/repositories/orgs-${user.login}`

  return (
    <article className={classes.userItem}>
      <Link to={url} className={classes.userItemLink}>
        <img src={user.avatar_url} alt={user.name} />
        <div className={classes.userItemData}>
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

export default SneakinItem
