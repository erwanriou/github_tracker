import { createUseStyles } from "react-jss"

export const useCommons = createUseStyles({
  container: {
    margin: "0 auto",
    maxWidth: "1500px",
    "@media (max-width: 1500px)": {
      padding: "0 1.5rem"
    }
  }
})
