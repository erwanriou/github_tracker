import React from "react"

// IMPORT COMPONENTS
import SneakinItem from "./SneakinItem"
import isEmpty from "../../utils/isEmpty"
import Loader from "../layout/Loader"

// IMPORT STYLES
import { useStyles } from "../../styles/sneakin/sneakinItem.styles.js"

// IMPORT STYLES
const SneakinList = ({ users, type, query, loading }) => {
  const classes = useStyles()
  const renderList =
    !isEmpty(users) &&
    users
      .filter(user => user.login.includes(query))
      .map(user => (
        <SneakinItem key={user.id} user={user} type={type} classes={classes} />
      ))
  return loading ? <Loader /> : renderList
}

export default SneakinList
