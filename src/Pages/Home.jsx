import { makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import React, { useEffect } from "react";
import { useState } from "react";
import NameGenerator from "../Components/NameGenerator";
import NewComp from "../Components/NewComp";

const useStyle = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = () => {
  const classes = useStyle();
  const [steps, setSteps] = useState(1);
  const [exceptions, setExceptions] = useState([]);
  const [allName, setAllName] = useState([]);
  const [randomOne, setRandomOne] = useState("");
  const [randomTwo, setRandomTwo] = useState("");

  useEffect(() => {
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
    setAllName(names);
  });

  const randomNames = (e) => {
    e.preventDefault();
    let newNamesArray = allName;
    let exceptionsArray = exceptions;

    exceptionsArray.forEach((e1) =>
      newNamesArray.forEach((e2, index) => {
        if (e1.toLowerCase() === e2.toLowerCase()) {
          newNamesArray.splice(index, 1);
          setAllName(newNamesArray);
        }
      })
    );
    console.log(allName);

    const randomName1 =
      newNamesArray[Math.floor(Math.random() * newNamesArray.length)];
    const filtered = newNamesArray.filter((name) => name !== randomName1);
    const randomName2 = filtered[Math.floor(Math.random() * filtered.length)];
    console.log("random names ", randomName1, randomName2);

    setRandomOne(randomName1);
    setRandomTwo(randomName2);
  };

  const nextStep = () => {
    setSteps(steps + 1);
  };

  const prevStep = () => {
    setSteps(steps - 1);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    const exceptionsArray = e.target.value.split(",");
    // console.log(exceptionsArray);

    setExceptions(exceptionsArray);
  };

  const renderSwitch = (steps) => {
    switch (steps) {
      case 1:
        return (
          <NameGenerator
            randomNames={randomNames}
            exceptions={exceptions}
            handleChange={handleChange}
            randomeOne={randomOne}
            randomTwo={randomTwo}
          />
        );

      case 2:
        return <NewComp />;
    }
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h3" align="center">
        Random Name Generator
      </Typography>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>next</button>
      {renderSwitch(steps)}
    </Container>
  );
};

export default Home;
