import React, { useState } from "react";
import {
  Typography,
  List,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Scrollbars } from "react-custom-scrollbars";

import ListItemMap from "./ListItemMap";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     // border: "2px solid black",
  //   },
  listContainer: {
    maxHeight: "35vh",
    overflowY: "scroll",
    // border: "2px solid black",
  },
  formContainer: {
    // border: "2px solid black",
    width: "100%",
    display: "flex",
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    justifyContent: "space-between",
  },
  field: {
    marginRight: theme.spacing(1),
  },
}));

const NameList = ({ currentNames, handleDelete, addName }) => {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(null);

  const handleClickOpen = (name) => {
    setOpen(name);
  };
  const handleClose = () => {
    setOpen(null);
    // console.log(confirm);
  };
  const classes = useStyles();

  //   console.log(currentNames);
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        List of names
      </Typography>
      {/* <div className={classes.listContainer}> */}
        <Scrollbars style={{  height: '35vh' }}>
          <List dense={false}>
            {currentNames.map((cname, index) => {
              return (
                <ListItemMap
                  key={index}
                  open={open}
                  cname={cname}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                  handleDelete={handleDelete}
                />
              );
            })}
          </List>
        </Scrollbars>
      {/* </div> */}
      <form
        noValidate
        className={classes.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          if (newName === "") {
            setError(true);
          } else {
            setError(false);
            addName(newName);
            setNewName('')
          }
        }}
      >
        <TextField
          className={classes.field}
          label="Add Name"
          fullWidth
          variant="outlined"
          required
          error={error}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          value={newName}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<AddCircle />}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default NameList;
