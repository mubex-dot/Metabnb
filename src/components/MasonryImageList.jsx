/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import nft1 from "../assets/nft1.svg";
import nft2 from "../assets/nft2.svg";
import nft3 from "../assets/nft3.svg";
import nft4 from "../assets/nft4.svg";

export default function MasonryImageList(props) {
  return (
    <Box
      sx={{
        width: props.windowWidth < 700 ? 200 : 400,
        height: 450,
      }}
    >
      <ImageList
        variant="masonry"
        cols={props.windowWidth < 500 ? 1 : 2}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ width: props.windowWidth < 800 ? "100%" : "100%" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: nft1,
    title: "Bed",
  },
  {
    img: nft2,
    title: "Books",
  },
  {
    img: nft3,
    title: "Sink",
  },
  {
    img: nft4,
    title: "Kitchen",
  },
];
