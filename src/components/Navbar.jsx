import { Tag, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Avatar,
  Menu,
  Badge,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  gap: "25px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            display: { xs: "none", sm: "flex", alignItems: "center" },
          }}
        >
          <Tag />
          MUI Social
        </Typography>
        <Tag sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Search sx={{ width: "65%", display: { xs: "block", sm: "none" } }}>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={49} color="error" sx={{ cursor: "pointer" }}>
            <Mail />
          </Badge>
          <Badge badgeContent={86} color="error" sx={{ cursor: "pointer" }}>
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
            src="https://media.licdn.com/dms/image/D5603AQGs_PTHe7kGsw/profile-displayphoto-shrink_400_400/0/1664995393267?e=1682553600&v=beta&t=51nHij0bnqoCFqt5AijvSArCf-mZJrPm1CziFvfhWDQ"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{
              width: 35,
              height: 35,
              cursor: "pointer",
            }}
            src="https://media.licdn.com/dms/image/D5603AQGs_PTHe7kGsw/profile-displayphoto-shrink_400_400/0/1664995393267?e=1682553600&v=beta&t=51nHij0bnqoCFqt5AijvSArCf-mZJrPm1CziFvfhWDQ"
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
