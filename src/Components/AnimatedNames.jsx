import { Typography, Zoom } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Confetti from "react-confetti";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AnimatedNames = ({ randomeOne, randomTwo, start,  }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // let id;
    setLoading(true);
    let id = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return function cleanup() {
      clearTimeout(id);
    };
  }, [randomeOne, randomTwo]);

  return (
    <div style={{marginTop:'2rem'}}>
      {randomeOne ? (
        loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            className="loader"
          >
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              //   visible={false}
              // timeout={3000}
            />
          </div>
        ) : (
          <>
            <Confetti width={500} height={500} recycle={false} />
            <Zoom in={start} style={{ transitionDelay: "500ms" }}>
              <Typography variant='h5' align="center">{randomeOne}</Typography>
            </Zoom>
            <Zoom in={start} style={{ transitionDelay: "1000ms" }}>
              <Typography variant='h5' align="center">{randomTwo}</Typography>
            </Zoom>
          </>
        )
      ) : (
        <Typography align="center">Names Will be shown here..</Typography>
      )}
    </div>
  );
};

export default AnimatedNames;
