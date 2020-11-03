import React from "react"
import classnames from "classnames"

// IMPORT STYLES
import { useStyles } from "../../styles/layout/footer.styles.js"
import { useCommons } from "../../styles/common/common.styles.js"

const Footer = () => {
  const classes = { ...useStyles(), ...useCommons() }
  return (
    <footer>
      <div className={classnames(classes.container, classes.footerContainer)}>
        <span>
          All right reserved to <strong>@erwanriou</strong> (Once you register
          your github repository there i take full control of it mouahhahaha!)
        </span>
      </div>
    </footer>
  )
}

export default Footer
