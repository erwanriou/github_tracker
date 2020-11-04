import React from "react"

// IMPORT STYLES
import loader from "../../utils/images/loader.gif"
import { useCommons } from "../../styles/common/common.styles.js"

const Loader = () => {
  const classes = useCommons()
  return (
    <div className={classes.spinner}>
      <img alt="Loading" src={loader} />
    </div>
  )
}

export default Loader
