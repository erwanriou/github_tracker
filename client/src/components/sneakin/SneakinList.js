import React from "react"

// IMPORT COMPONENTS
import SneakinItem from "./SneakinItem"
import isEmpty from "../../utils/isEmpty"

// IMPORT STYLES
import { useStyles } from "../../styles/sneakin/sneakinItem.styles.js"

// IMPORT STYLES
const SneakinList = ({ repositories, type, query }) => {
  const classes = useStyles()
  const renderList =
    !isEmpty(repositories) &&
    repositories
      .filter(repository => repository.login.includes(query))
      .map(repository => (
        <SneakinItem
          key={repository.id}
          repository={repository}
          type={type}
          classes={classes}
        />
      ))
  return renderList
}

export default SneakinList
