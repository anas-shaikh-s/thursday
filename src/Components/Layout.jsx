import { Container, makeStyles, Button } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    minHeight: "67vh",
    padding: theme.spacing(3),
    borderRadius: 12,
    background: "rgba(255, 255, 255, .5)",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23)",
  },
  btnGrp: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));
const Layout = ({ children, prevStep, nextStep }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.btnGrp}>
        <Button variant="outlined" color="default" onClick={prevStep}>
          Prev
        </Button>
        <Button variant="outlined" color="primary" onClick={nextStep}>
          next
        </Button>
      </div>
      {children}
    </Container>
  );
};

export default Layout;
