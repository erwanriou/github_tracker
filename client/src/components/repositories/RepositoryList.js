import React from "react"

// IMPORT COMPONENTS
import RepositoryItem from "./RepositoryItem"
import isEmpty from "../../utils/isEmpty"
import Loader from "../layout/Loader"

// IMPORT STYLES
import { useStyles } from "../../styles/repositories/repositoryItem.styles.js"

// IMPORT STYLES
const RepositoryList = ({ handleSave, repositories, query, url, loading }) => {
  const classes = useStyles()
  const renderList =
    !isEmpty(repositories) &&
    repositories
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .filter(repository => repository.name.includes(query))
      .map(repository => (
        <RepositoryItem
          key={repository.id}
          handleSave={handleSave}
          repository={repository}
          classes={classes}
          url={url}
        />
      ))
  return loading ? <Loader /> : renderList
}

export default RepositoryList
