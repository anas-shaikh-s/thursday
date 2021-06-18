import { makeStyles, Typography } from "@material-ui/core";

import React, { useState, useEffect } from "react";
import NameGenerator from "../Components/NameGenerator";
import NameList from "../Components/NameList";
import Layout from "../Components/Layout";

// import bg1 from "../img/bg1.jpg";
// import bg2 from "../img/bg2.jpg";
import bg3 from "../img/bg3.jpg";
// import bg4 from "../img/bg4.png";
// import bg5 from "../img/bg5.jpg";
// import bg6 from "../img/bg6.jpg";

const useStyle = makeStyles({
  root: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${bg3})`,
    backgroundPosition: "center" /* Center the image */,

    padding: 0,
    margin: 0,
  },
  head: {
    marginBottom: "8px",
  },
});

const Home = () => {
  const classes = useStyle();
  const [steps, setSteps] = useState(1);
  const [exceptions, setExceptions] = useState([]);
  const [allName, setAllName] = useState([
    "Hitesh",
    "Darshan",
    "Mansi",
    "Hardi",
    "Kajal",
    "Snehal",
    "Dhrunit",
    "Niti",
    "Hiren",
    "Anas",
    "Prem",
    "Vedang",
  ]);
  const [randomOne, setRandomOne] = useState("");
  const [randomTwo, setRandomTwo] = useState("");
  const [start, setStart] = useState(false);
  // const [hasName, setHasName] = useState(false);
  useEffect(() => {
    setRandomOne("");
  }, []);

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
    // console.log(allName);

    const randomName1 =
      newNamesArray[Math.floor(Math.random() * newNamesArray.length)];
    const filtered = newNamesArray.filter((name) => name !== randomName1);
    const randomName2 = filtered[Math.floor(Math.random() * filtered.length)];
    // console.log("random names ", randomName1, randomName2);

    setRandomOne(randomName1);
    setRandomTwo(randomName2);
    setHasName(!hasName);
    setStart(true);
  };

  const handleReset = () => {
    // setHasName(false);
    setRandomOne("");
    setRandomTwo("");
  };

  const nextStep = () => {
    if (steps < 2) {
      setSteps(steps + 1);
    }
  };

  const prevStep = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };

  const handleDelete = (name) => {
    // console.log(name);
    const finalNames = allName.filter((curName) => curName !== name);
    // console.log(finalNames);
    setAllName(finalNames);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    const exceptionsArray = e.target.value.split(",");
    // console.log(exceptionsArray);

    setExceptions(exceptionsArray);
  };

  const addName = (newName) => {
    // console.log(newName);
    const finalNames = [...allName, newName];
    // finalNames.push(newName);
    // console.log(finalNames);

    setAllName(finalNames);
    // console.log(allName);
  };
  const renderSwitch = (steps) => {
    switch (steps) {
      case 1:
        return (
          <NameList
            currentNames={allName}
            handleDelete={handleDelete}
            addName={addName}
          />
        );

      case 2:
        return (
          <NameGenerator
            randomNames={randomNames}
            exceptions={exceptions}
            handleChange={handleChange}
            randomeOne={randomOne}
            randomTwo={randomTwo}
            start={start}
            handleReset={handleReset}
            hasName={hasName}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" className={classes.head}>
        Thank you Thursday!
      </Typography>

      <Layout prevStep={prevStep} nextStep={nextStep}>
        {renderSwitch(steps)}
      </Layout>
    </div>
  );
};

export default Home;
