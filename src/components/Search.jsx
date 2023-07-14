import { Box, Button, TextField, Typography } from "@mui/material";
import MasonryImageList from "./MasonryImageList";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Search() {
  const [name, setName] = React.useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const windowWidth = windowDimensions.width;

  return (
    <Box
      sx={{
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginTop: "4.5em",
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: "inherit",
              fontSize: windowWidth < 760 ? "1.5rem" : "3rem",
            }}
          >
            Rent a <span className="colorText">Place</span> away from{" "}
            <span className="colorText">Home</span> in the{" "}
            <span className="colorText">Metaverse</span>
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              mt: 3,
              width: "70%",
              fontSize: windowWidth < 760 ? ".8rem" : "1rem",
            }}
          >
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </Typography>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search for location"
              size="small"
              variant="outlined"
              InputLabelProps={{
                style: {
                  fontSize: ".8rem",
                },
              }}
              sx={{ width: windowWidth < 760 ? "45%" : "50%" }}
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Button
              variant="contained"
              sx={{ width: windowWidth < 760 ? "45%" : "50%" }}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "2em",
          }}
        >
          <MasonryImageList windowWidth={windowWidth} />
        </Box>
      </Box>
      <Slider />
    </Box>
  );
}

export default Search;
