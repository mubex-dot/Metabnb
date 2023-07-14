import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import mbtoken from "../assets/mbtoken.svg";
import metaslide from "../assets/metaslide.svg";
import opensea from "../assets/opensea.svg";
import { Box } from "@mui/material";

function Slider() {
  return (
    <Splide
      options={{
        type: "loop",
        arrows: false,
        pagination: false,
        direction: "rtl",
        perPage: 2,
        autoScroll: {
          pauseOnHover: true,
          rewind: false,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#A02279",
            justifyContent: "space-around",
          }}
        >
          {slideImg.map((item) => (
            <img
              key={item.title}
              style={{
                height: "3em",
                width: "7em",
                // padding: "0 3.5em",
                // display: "flex",
              }}
              src={item.img}
              alt="MbToken"
            />
          ))}
        </Box>
      </SplideSlide>
    </Splide>
  );
}

const slideImg = [
  {
    img: mbtoken,
    title: "MbToken",
  },
  {
    img: metaslide,
    title: "METAMASK",
  },
  {
    img: opensea,
    title: "OpenSea",
  },
];

export default Slider;
