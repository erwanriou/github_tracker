import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLES
const UserItem = ({ handleSave, user, type, classes }) => {
  const typeSaved = type === "users" ? "user" : "company"
  // DISSOCIATE ORGS FROM USERS IN URL
  const url =
    type === "users"
      ? `/repositories/users-${user.login}`
      : `/repositories/orgs-${user.login}`

  // MANAGE USER DATA
  const userData = {
    login: user.login,
    id: user.id,
    node_id: user.node_id,
    repos_url: user.repos_url,
    avatar_url: user.avatar_url,
    description: user.description
  }

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
      <button onClick={() => handleSave(userData)}>Save {typeSaved}</button>
    </article>
  )
}

export default UserItem
