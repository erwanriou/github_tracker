import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  repositoriesContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "4rem"
  },
  repositoriesBanner: {
    position: "relative",
    display: "flex",
    width: "100%",
    margin: "0 auto",
    justifyContent: "space-between"
  },
  repositoriesBannerTitle: {
    "& h1": {
      marginTop: "2rem",
      fontSize: "2rem",
      marginBottom: "1rem"
    },
    "& h2": {
      fontSize: "1rem",
      fontStyle: "italic"
    }
  },
  repositoriesBannerSearch: {
    position: "relative",
    width: "100%",
    display: "flex",
    margin: "4rem auto",
    justifyContent: "flex-end",
    height: "3rem",
    "& input": {
      padding: "1rem",
      borderRadius: "1rem",
      border: "1px solid #ddd",
      width: "20rem",
      "&:focus": {
        outline: "none",
        border: "2px solid #de5858"
      }
    }
  }
})
