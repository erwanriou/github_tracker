import React from "react"

// IMPORT COMPONENTS
import RepositoryItem from "./RepositoryItem"
import isEmpty from "../../utils/isEmpty"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/repositories.styles.js"

// IMPORT STYLES
const RepositoriesList = ({ repositories, type }) => {
  const classes = useStyles()
  const renderList =
    !isEmpty(repositories) &&
    repositories.map(repository => (
      <RepositoryItem
        key={repository.id}
        repository={repository}
        type={type}
        classes={classes}
      />
    ))
  return renderList
}

export default RepositoriesList
