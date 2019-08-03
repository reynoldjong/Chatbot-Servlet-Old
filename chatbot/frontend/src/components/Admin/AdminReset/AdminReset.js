import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import axios from "axios";
import qs from "qs";
import Navbar from "../Navbar/Navbar";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  dragAndDrop: {
    width: "100%",
    height: "300px",
    backgroundColor: "rgba(0,0,0,0.1)",
    border: "1px solid #ccc",
    padding: theme.spacing(2),
    borderRadius: "5px"
  }
}));

/**
 * Compoenent representing all the documents the admin has uploaded
 * and has the abillity for admins to uplaod or remove documents
 * @param {props} props:
 *  @param {list} feedback - a list containing every file in Files.db
 *  @param {function} addFileHandler - function which adds a file to the database
 *  @param {function} removeFileHandler - function which removes a file from the database
 */
const AdminFeedback = props => {
    const classes = useStyles();
   const [reset, setReset] = React.useState("");
  const resetData = async () => {
    // Create JSON object
    const data = {
      reset: "oh no!"
    };

    await axios
      .post("/index", qs.stringify(data))
      .then(response => {
          console.log(response);
          setReset("Data Reset");
   
       
      })
      .catch(function(error) {
        setReset("Data could not be reset");
      
      });
  };

  document.body.style = "background: rgba(0,0,0,0.05);";
  let admin = null;
  
  if (props.loggedIn) {
    admin = (
      <React.Fragment>
        <Navbar logOutHandler={props.logOutHandler} />

        <Box marginTop={3} marginBottom={3}>
          <Container maxWidth="md">
            <Paper className={classes.root}>
              <Typography variant="h4" component="h4" align="left">
                Reset the Chatbot's Brain
              </Typography>
              <Typography
                variant="body1"
                component="p"
                align="left"
                style={{ margin: "10px" }}
              >
                Delete all indexed documents and files from the chatbot's brain :(
              </Typography>
              <Button
                onClick={resetData}
                type="submit"
                color="secondary"
                variant="contained"
                style={{
                  display: "block",
                  marginTop: "20px",
                  position: "relative",
                  marginLeft: "auto",
                  marginBottom: "20px",
                  backgroundColor:'red',
                  color:'white'
                }}
              >
               Reset Data
              </Button>
              <Typography>
                  {reset}
              </Typography>
            </Paper>
          </Container>
        </Box>
      </React.Fragment>
    );
  } else {
    admin = <h2>Not Logged in</h2>;
  }
  return <React.Fragment>{admin}</React.Fragment>;
};

export default AdminFeedback;
