import React, { Component } from "react";
import {
  TextField,
  withStyles,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

const styles = {
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    margin: "1rem 0",
    display: "block",
  },
  formm: {
    width: "50%",
  },
};
class NameGenerator extends Component {
  // state = {
  //   allName: [],
  //   exceptions: [],
  //   randomeOne: "",
  //   randomTwo: "",
  // };

  // componentDidMount() {
  //   //fetch names async

  //   const names = [
  //     "ABC",
  //     "DEF",
  //     "GHI",
  //     "JKL",
  //     "MNO",
  //     "PQR",
  //     "LMN",
  //     "OPQ",
  //     "RST",
  //   ];
  //   this.setState({
  //     allName: names,
  //   });
  // }

  // randomNames(e) {
  //   e.preventDefault();
  //   let newNamesArray = this.state.allName;
  //   let exceptions = this.state.exceptions;

  //   exceptions.forEach((e1) =>
  //     newNamesArray.forEach((e2, index) => {
  //       if (e1.toLowerCase() === e2.toLowerCase()) {
  //         newNamesArray.splice(index, 1);
  //         this.setState({
  //           allName: newNamesArray,
  //         });
  //       }
  //     })
  //   );
  //   console.log(this.state.allName);

  //   const randomName1 =
  //     newNamesArray[Math.floor(Math.random() * newNamesArray.length)];
  //   const filtered = newNamesArray.filter((name) => name !== randomName1);
  //   const randomName2 = filtered[Math.floor(Math.random() * filtered.length)];
  //   console.log("random names ", randomName1, randomName2);

  //   this.setState({
  //     randomeOne: randomName1,
  //     randomTwo: randomName2,
  //   });
  // }

  // handleChange(e) {
  //   // console.log(e.target.value);
  //   const exceptionsArray = e.target.value.split(",");
  //   // console.log(exceptionsArray);
  //   this.setState({
  //     exceptions: exceptionsArray,
  //   });
  // }

  render() {
    // this.randomNames();
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <form
          className={classes.formm}
          noValidate
          autoComplete="off"
          onSubmit={this.props.randomNames}
        >
          <TextField
            variant="outlined"
            className={classes.field}
            label="Exceptions"
            fullWidth
            value={this.props.exceptions}
            onChange={this.props.handleChange}
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
        </form>
        <Typography>{this.props.randomeOne ? this.props.randomeOne : 'Names Will be shown here..'}</Typography>
        <Typography>{this.props.randomTwo}</Typography>
      </Container>
    );
  }
}

export default withStyles(styles)(NameGenerator);
