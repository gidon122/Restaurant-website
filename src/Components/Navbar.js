import React, { useState }  from 'react';
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
  {
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    text: "About",
    icon: <InfoIcon />,
  },
  {
    text: "Testimonials",
    icon: <CommentRoundedIcon />,
  },
  {
    text: "Contact",
    icon: <PhoneRoundedIcon />,
  },
  {
    text: "Cart",
    icon: <ShoppingCartRoundedIcon />,
  },
  ];

  return (
  <nav>
    <div className="nav-logo-container">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="navbar-links-container">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
      <a href="#cart">
        <BsCart2 className="navbar-cart-icon" />
      </a>
      <button className="primary-button">Bookings Now</button>
    </div>
    <div className="navbar-menu-">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
      anchor="right">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((option, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText primary={option.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  </nav>
  );
};

export default Navbar;
