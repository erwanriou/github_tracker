import { createUseStyles } from "react-jss"

export const useCommons = createUseStyles({
  container: {
    margin: "0 auto",
    maxWidth: "1500px",
    "@media (max-width: 1500px)": {
      padding: "0 1.5rem"
    }
  },
  errors: {
    color: "#de5858",
    fontWeight: "400",
    textAlign: "center"
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& img": {
      width: "3rem"
    }
  }
})
