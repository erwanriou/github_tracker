import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  sneakinContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "4rem"
  },
  sneakinBanner: {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    justifyContent: "center",
    "& img": {
      margin: "2rem 0",
      width: "7rem",
      padding: "0.5rem",
      border: "2px solid black",
      borderRadius: "100%"
    },
    "& h1": {
      fontSize: "3rem",
      marginBottom: "1rem"
    },
    "& h2": {
      fontSize: "1rem",
      fontStyle: "italic"
    }
  },
  sneakinSearchbar: {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    justifyContent: "center",
    "& input": {
      marginTop: "4rem",
      padding: "1rem",
      borderRadius: "1rem",
      border: "1px solid #ddd",
      width: "20rem",
      "&:focus": {
        outline: "none",
        border: "2px solid #de5858"
      }
    }
  },
  sneakinList: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap"
  }
})
