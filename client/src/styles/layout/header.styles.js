import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  headerContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
    "& img": {
      height: "2rem"
    },
    "& nav": {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    "& a": {
      margin: "0 1rem",
      width: " 6rem",
      color: "black",
      fontWeight: "300",
      transition: "all 0.3s ease",
      "&:hover": {
        color: "#de5858"
      }
    },
    "& a:last-child": {
      margin: "0 1rem",
      padding: "0.7rem 1.5rem",
      border: "solid 3px #de5858",
      width: " 6rem",
      color: "#de5858",
      "&:hover": {
        backgroundColor: "#de5858",
        color: " white"
      }
    }
  }
})
