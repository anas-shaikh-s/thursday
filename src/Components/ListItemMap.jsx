import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const ListItemMap = ({
  open,
  cname,
  handleClickOpen,
  handleClose,
  handleDelete,
}) => {
  // console.log(cname);
  return (
    <>
      <ListItem>
        <ListItemText primary={cname} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => {
              handleClickOpen(cname);
            }}
            edge="end"
            aria-label="delete"
          >
            <DeleteOutlinedIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {/*Confirm dialog */}
      <Dialog open={open === cname} onClose={handleClose}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              // setConfirm(true);
              // handleDelete(note.id, true);
              // console.log(cname);
              handleDelete(cname);
              handleClose();
              // handleClose();
            }}
            color="secondary"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              // setConfirm(false);
              // handleDelete(note.id, false);
              handleClose();
            }}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ListItemMap;
