import React from "react"

// IMPORT COMPONENTS
import UserItem from "./UserItem"
import isEmpty from "../../utils/isEmpty"
import Loader from "../layout/Loader"

// IMPORT STYLES
import { useStyles } from "../../styles/sneakin/sneakinItem.styles.js"

// IMPORT STYLES
const UserList = ({ handleSave, users, type, query, loading }) => {
  const classes = useStyles()
  const renderList =
    !isEmpty(users) &&
    users
      .filter(user => user.login.includes(query))
      .map(user => (
        <UserItem
          key={user.id}
          handleSave={handleSave}
          user={user}
          type={type}
          classes={classes}
        />
      ))
  return loading ? <Loader /> : renderList
}

export default UserList
