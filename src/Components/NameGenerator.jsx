import React, { Component } from "react";
import { TextField, withStyles, Button, Typography } from "@material-ui/core";
import AnimatedNames from "./AnimatedNames";

const styles = {
  field: {
    margin: "1rem 0",
    display: "block",
  },
  formm: {
    width: "100%",
  },
};
class NameGenerator extends Component {
  render() {
    // this.randomNames();
    const {
      classes,
      randomNames,
      exceptions,
      handleChange,
      randomeOne,
      randomTwo,
      start,
      handleReset,
    } = this.props;
    return (
      <>
        <Typography variant="h4" align="center">
          Generate Names
        </Typography>
        <form
          className={classes.formm}
          noValidate
          autoComplete="off"
          onSubmit={randomNames}
          onReset={handleReset}
        >
          <TextField
            variant="outlined"
            className={classes.field}
            label="Exceptions"
            fullWidth
            value={exceptions}
            onChange={handleChange}
            // helperText="Except from..."
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.field}
          >
            Get
          </Button>

          <Button
            fullWidth
            type="reset"
            variant="contained"
            color="secondary"
            className={classes.field}
          >
            Clear
          </Button>
        </form>
        <AnimatedNames
          start={start}
          randomeOne={randomeOne}
          randomTwo={randomTwo}
        />
        {/* <Typography align="center">
          {randomeOne ? randomeOne : "Names Will be shown here.."}
        </Typography>
        <Zoom in={start} timeout={500} style={{ transitionDelay: "500ms" }}>
          <Typography align="center">{randomTwo}</Typography>
        </Zoom> */}
      </>
    );
  }
}

export default withStyles(styles)(NameGenerator);
