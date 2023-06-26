/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import metamaskLogo from "../assets/metamask.svg";
import walletConnectLogo from "../assets/walletConnect.svg";

const btn = [
  {
    logo: metamaskLogo,
    disc: "Metamask",
  },

  {
    logo: walletConnectLogo,
    disc: "WalletConnect",
  },
];

// [, ""]
// ["Metamask", "WalletConnect"]

export default function ModalMenu(props) {
  return (
    <Paper
      sx={{
        width: "100%",
        padding: "2em",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="p" component="h4">
          Connect Wallet
        </Typography>
        <Button sx={{ color: "#000" }} onClick={props.handleClose}>
          <CloseIcon />
        </Button>
      </div>
      <Typography variant="caption" component="p">
        Choose your preferred wallet:
      </Typography>
      <MenuList dense>
        <Divider
          sx={{
            marginBottom: "0.7em",
          }}
        />
        {btn.map((item, index) => (
          <Button
            key={index}
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              color: "#000",
              textTransform: "Capitalize",
              width: "100%",
              textAlign: "left",
              fontWeight: 700,
              marginBottom: "0.7em",
            }}
          >
            <img
              src={item.logo}
              alt={item.disc}
              style={{
                width: "2.4em",
              }}
            />
            <ListItemText
              sx={{
                marginLeft: ".8em",
              }}
            >
              {item.disc}
            </ListItemText>
          </Button>
        ))}
      </MenuList>
    </Paper>
  );
}
