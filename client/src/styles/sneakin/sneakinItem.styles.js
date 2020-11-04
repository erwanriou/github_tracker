import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  repositoryItem: {
    position: "relative",
    border: "1px solid #ddd",
    borderRadius: "0.5rem",
    marginRight: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
    width: "calc(33% - (2px + 3rem))",
    color: "black",
    transition: "all 0.3s ease",
    "& img": {
      width: "5rem",
      borderRadius: "100%"
    },
    "& button": {
      position: "absolute",
      right: "1rem",
      bottom: "1rem",
      zIndex: "2",
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
      }
    },
    "&:hover": {
      boxShadow: "0px 5px 25px 0 rgba(46, 61, 73, 0.1)"
    }
  },
  repositoryItemLink: {
    display: "flex",
    color: "black"
  },
  repositoryItemData: {
    position: "relative",
    width: "100%",
    right: 0,
    textAlign: "right",
    marginLeft: "1rem"
  }
})
