import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  repositoryContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "4rem"
  },
  repositoryBanner: {
    position: "relative",
    display: "flex",
    width: "100%",
    margin: "0 auto",
    justifyContent: "space-between"
  },
  repositoryBannerTitle: {
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
  repositoryBannerSearch: {
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
  },
  repositoryTitle: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "3rem",
      borderRadius: "100%",
      marginRight: "1rem"
    }
  },
  repositoryData: {
    position: "relative",
    border: "1px solid #ddd",
    borderRadius: "0.5rem",
    marginTop: "2rem",
    marginBottom: "4rem",
    padding: "1rem",
    width: "100%",
    color: "black",
    "& h3": {
      margin: "1rem 0"
    },
    "& h2": {
      margin: "1rem 0"
    }
  },
  repositoryMetadataList: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem"
  },
  repositoryMetadata: {
    display: "flex",
    justifyContent: "center",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    borderRadius: "1rem",
    padding: "0.3rem 1rem",
    backgroundColor: "#de5858",
    color: "white"
  },
  repositoryContributors: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem"
  },
  repositoryContributor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #de5858",
    color: "black",
    marginRight: "1rem",
    marginBottom: "1rem",
    borderRadius: "1rem",
    padding: "0.5rem",
    minWidth: "15rem",
    minHeight: "7rem",
    textAlign: "center",
    "& img": {
      marginTop: "1rem",
      width: "2rem",
      height: "2rem",
      borderRadius: "100%"
    }
  },
  repositoryContributorData: {}
})
