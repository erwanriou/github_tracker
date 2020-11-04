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
      marginRight: "2rem",
      "&:focus": {
        outline: "none",
        border: "2px solid #de5858"
      }
    }
  },
  repositoriesList: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0"
  },
  repositoriesPager: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 2rem",
    marginBottom: "6rem",
    right: 0,
    margin: "4rem 0",
    "& button": {
      cursor: "pointer",
      border: "2px solid #de5858",
      backgroundColor: "white",
      color: "#de5858",
      borderRadius: "0.5rem",
      padding: "0.5rem 1rem",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#de5858",
        color: "white"
      },
      "&:last-child": {
        marginLeft: "1rem"
      }
    }
  }
})
