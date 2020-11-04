import React from "react"

// IMPORT COMPONENTS
import RepositoryItem from "./RepositoryItem"
import isEmpty from "../../utils/isEmpty"
import Loader from "../layout/Loader"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/repositoryItem.styles.js"

// IMPORT STYLES
const RepositoryList = ({ repositories, query, loading }) => {
  const classes = useStyles()
  const renderList =
    !isEmpty(repositories) &&
    repositories
      .filter(repository => repository.name.includes(query))
      .map(repository => (
        <RepositoryItem
          key={repository.id}
          repository={repository}
          classes={classes}
        />
      ))
  return loading ? <Loader /> : renderList
}

export default RepositoryList
