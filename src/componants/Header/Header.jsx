import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Badge, Container, Input, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", Link: "/" },
  { name: "About", Link: "About" },
  { name: "Shop", Link: "Shop" },
  { name: "Blog", Link: "Blog" },
  { name: "Contact", Link: "Contact" },
];

function ResponsiveAppBar() {
  const [viewlist, setviewlist] = React.useState(false);
  const [Up, setUp] = React.useState(false);
  const [Down, setDown] = React.useState(true);
  const [ShowSearch, setShowSearch] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: { xs: "fit-content", md: "65px" },
          mb: "5px",
          bgcolor: "#FFFFFF",
          padding: { xs: "0 5px", md: "0 100px" },
        }}
      >
        <Container
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{ width: "120px", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                style={{ width: "100%", Height: "100%" }}
                src="../../../Imgs/Logo.png"
                alt="Furni Pro"
              />
            </Box>
          </Toolbar>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, display: "block", color: "black" }}
                onClick={() => {
                  navigate(`${page.Link}`);
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField label="Search" variant="standard" />
                <SearchIcon
                  sx={{ color: "black", position: "absolute", right: "5px" }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton size="large" aria-label="Favorite" color="inherit">
                <FavoriteBorderIcon sx={{ fontSize: "30px", color: "black" }} />
                <Badge badgeContent={4} color="error"></Badge>
              </IconButton>

              <IconButton size="large" aria-label="Shop" color="inherit">
                <ShoppingBagOutlinedIcon
                  sx={{ fontSize: "30px", color: "black" }}
                />
                <Badge badgeContent={4} color="error"></Badge>
              </IconButton>

              <IconButton size="large" aria-label="profile" color="inherit">
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: "30px", color: "black" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Container>
        {/* ___________________________________________________________________________ */}
        {/* For Mopile  */}

        <Container
          className="ForMopile"
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Toolbar disableGutters>
              <Box
                sx={{ width: "80px", cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  style={{ width: "100%", Height: "100%" }}
                  src="../../../Imgs/Logo.png"
                  alt="Furni Pro"
                />
              </Box>
            </Toolbar>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {ShowSearch && <Input placeholder="Search" label="Search" sx={{ border : "none" , borderBottom :"1px solid black"  , bgcolor : "#FFF"}} />}

                <SearchIcon
                  sx={{cursor :"pointer"  ,color: "black", position: "absolute", right: "5px" }}
                  onClick={() => {
                    ShowSearch ? setShowSearch(false) : setShowSearch(true)
                  }}
                />
              </Box>

              {/* _______________________________________________________________ */}
              {/* For shown and hide up and down buttons */}

              {Down && (
                <IconButton
                  size="large"
                  color="black"
                  onClick={() => {
                    viewlist ? setviewlist(false) : setviewlist(true);
                    setDown(false);
                    setUp(true);
                  }}
                >
                  <ExpandMoreIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              )}

              {Up && (
                <IconButton
                  size="large"
                  color="black"
                  onClick={() => {
                    viewlist ? setviewlist(false) : setviewlist(true);
                    setDown(true);
                    setUp(false);
                  }}
                >
                  <ExpandLessIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              )}
              {/* ____________________________________________________________________________ */}
            </Box>
          </Box>
          {/* _________________________________________________________________ */}
          {viewlist && (
            <Box>
              <Box
                className="MopIconBar"
                sx={{
                  padding: "0 50px",
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  height: "60px",
                }}
              >
                <IconButton size="large" aria-label="favorit" color="inherit">
                  <FavoriteBorderIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                  <Badge badgeContent={4} color="error"></Badge>
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="Cart"
                  color="inherit"
                  sx={{ m: "0 30px" }}
                >
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                  <Badge badgeContent={4} color="error"></Badge>
                </IconButton>

                <IconButton size="large" aria-label="Profile" color="inherit">
                  <AccountCircleOutlinedIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                </IconButton>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "fit-content",
                  left: "0",
                  top: "110px",
                }}
              >
                <Box
                  sx={{
                    color: "black",
                    mb: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page.name}
                      sx={{
                        my: 2,
                        display: "block",
                        color: "black",
                      }}
                      onClick={() => {
                        navigate(`${page.Link}`);
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
          {/* _________________________________________________________________  */}
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
