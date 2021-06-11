import React, { Component } from "react";

export default class NameGenerator extends Component {
  state = {
    allName: [],
    exceptions: [],
  };

  componentDidMount() {
    //fetch names async
    const names = [
      "ABC",
      "DEF",
      "GHI",
      "JKL",
      "MNO",
      "PQR",
      "LMN",
      "OPQ",
      "RST",
    ];
    this.setState({
      allName: names,
    });
  }

  randomNames() {
    let newNamesArray = this.state.allName;
    let exceptions = this.state.exceptions;
    // console.log(exceptions);
    // console.log(exceptions);
    // for (let index = 0; index < this.state.allName.length; index++) {
    //   const name = this.state.allName[index];
    //   for (let j = 0; j < this.state.exceptions.length; j++) {
    //     const execption = this.state.exceptions[j];
    //     if (name.toLowerCase() === execption.toLowerCase()) {
    //       //   this.state.allName.splice(index, 1);

    //       this.setState({
    //         allName: this.state.allName.splice(
    //           index,
    //           this.state.exceptions.length
    //         ),
    //       });
    //     }
    //   }
    // }

    // for (let index = 0; index < this.state.exceptions.length; index++) {
    //   const execption = this.state.exceptions[index];

    //   console.log("exceptions Iteration start");
    //   for (let j = 0; j < this.state.allName.length; j++) {
    //     console.log("Names Iteration Start");
    //     const name = this.state.allName[j];
    //     if (name.toLowerCase() === execption.toLowerCase()) {
    //       console.log("inside true");
    //       console.log(name, execption, j);
    //       this.setState({
    //         allName: this.state.allName.splice(j, 1),
    //       });
    //     }
    //     console.log("Names Iteration end");
    //   }
    //   console.log("exceptions Iteration end");
    // }

    exceptions.forEach((e1) =>
      newNamesArray.forEach((e2, index) => {
        if (e1.toLowerCase() === e2.toLowerCase()) {
          newNamesArray.splice(index, 1);
          this.setState({
            allName: newNamesArray,
          });
        }
      })
    );
    console.log(this.state.allName);

    // newNamesArray.forEach((e1, index) =>
    //   exceptions.forEach((e2) => {
    //     if (e1.toLowerCase() === e2.toLowerCase()) {
    //       newNamesArray.splice(index, exceptions.length);
    //     }
    //   })
    // );

    // this.setState({
    //   allName: newNamesArray,
    // });

    // for (let index = 0; index < newNamesArray.length; index++) {
    //     if(newNamesArray[index] === this.state.exceptions[index])

    // }

    const randomName1 =
      newNamesArray[Math.floor(Math.random() * newNamesArray.length)];
    const filtered = newNamesArray.filter((name) => name !== randomName1);
    const randomName2 = filtered[Math.floor(Math.random() * filtered.length)];
    console.log("random names ", randomName1, randomName2);
  }

  handleChange(e) {
    // console.log(e.target.value);
    const exceptionsArray = e.target.value.split(",");
    // console.log(exceptionsArray);
    this.setState({
      exceptions: exceptionsArray,
    });
  }

  render() {
    // this.randomNames();
    return (
      <div className="Name-Gen">
        <input
          type="text"
          placeholder="Exceptions"
          value={this.state.exceptions}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.randomNames.bind(this)}>Get</button>
        <h1>
          {}
          {}
        </h1>
      </div>
    );
  }
}
