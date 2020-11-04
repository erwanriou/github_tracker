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
    margin: "4rem auto",
    textAlign: "center",
    justifyContent: "center",
    height: "10rem",
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
  },
  seankinToggle: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "1rem",
    "& p": {
      fontSize: "0.9rem",
      marginRight: "1rem"
    }
  },
  sneakinList: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0"
  },
  sneakinPager: {
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
