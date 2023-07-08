import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Badge, Container, Divider, Input, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetproductByNameQuery } from "../../services/productApi";

const pages = [
  { name: "Home", Link: "/" },
  { name: "About", Link: "/About" },
  { name: "Shop", Link: "/Shop" },
  { name: "Blog", Link: "/Blog" },
  { name: "Contact", Link: "/Contact" },
];

function ResponsiveAppBar() {
  const [viewlist, setviewlist] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const [arrowview, setarrowview] = useState(true);
  const [Search, setSearch] = useState("");
  const [viewSearchList, setviewSearchList] = useState(true);


  const Location = useLocation()

  // console.log(Location)

  const { SelectedProductsId   } = useSelector((state) => state.Cart);

  const { favProductsId  } = useSelector((state) => state.Fav);

  const { data, error, isLoading } = useGetproductByNameQuery();

function Searchdata() {
    return data.filter((product) => product.Name.toUpperCase().startsWith(Search.toUpperCase()))
    
  } 
console.log(data)


  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          height: { xs: "fit-content", md: "65px" },
          mb: "5px",
          bgcolor: "#FFFFFF",
          padding: { xs: "0 5px", md: "0 100px" },
        }}
      >
{/*start view Search List  */}

<Box sx={{width : "300px" , bgcolor : "#F3F2EE" , height : "300px" , overflowY : "scroll" , position : "absolute" , right : {xs :"10%" , md : "17%"} , top : "60px" }}>
            
            {Searchdata().map((product) => (
             <Box  key={product.id} onClick={() => {navigate(`/prodetails/${product.id}`) 
             setviewSearchList(false)
             }}>
               <Box sx={{cursor : "pointer" ,display : "flex" , justifyContent : "space-between" ,m : "5px"}}>
                 <Box sx={{width : "25%" , height : "80px" , bgcolor:"#FFF"}}>
                   <img style={{width : "100%" , height : "100%"}} src={product.imageLink} alt="" />
                 </Box>
              
               <Box sx={{width : "50%"}}>
                 <Typography variant="h6" color="black" fontWeight="600" sx={{fontSize : "17px"}} >{product.Name}</Typography>
               
                 <Typography variant="h6" color="gray" sx={{fontSize : "14px"}}>Category : {product.category}</Typography>
              
               </Box>
               </Box>
               <Box sx={{borderTop : "1px solid gray" , width : "85%" , mx : "auto" , my : "10px" }} />

             </Box>

            ))}


</Box>



{/*End view Search List  */}


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
                 <hr style={{display : Location.pathname === page.Link ? "block" : "none"}} />
               </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField  onChange={(e) => {setSearch(e.target.value)}} label="Search" variant="standard" />
                <SearchIcon
                  sx={{ color: "black", position: "absolute", right: "5px" }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton onClick={() => {
                navigate("/fav")
              }} size="large" aria-label="Favorite" color="inherit">
                <FavoriteBorderIcon sx={{ fontSize: "30px", color: "black" }} />
                <Badge badgeContent={favProductsId.length} color="error"></Badge>
              </IconButton>

              <IconButton onClick={() => {
                navigate("/cart")
              }} size="large" aria-label="Shop" color="inherit">
                <ShoppingBagOutlinedIcon
                  sx={{ fontSize: "30px", color: "black" }}
                />
                <Badge badgeContent={SelectedProductsId.length} color="error"></Badge>
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
                  setviewlist(false)
                  setarrowview(true)
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
                {ShowSearch && <Input onChange={(e) => {setSearch(e.target.value)}} placeholder="Search" label="Search" sx={{ border : "none" , borderBottom :"1px solid black"  , bgcolor : "#FFF"}} />}

                <SearchIcon
                  sx={{cursor :"pointer"  ,color: "black", position: "absolute", right: "5px" }}
                  onClick={() => {
                    ShowSearch ? setShowSearch(false) : setShowSearch(true)
                  }}
                />
              </Box>

              {/* _______________________________________________________________ */}
              {/* For shown and hide up and down buttons */}

              <IconButton 
   onClick={
    () => {
      setarrowview(arrowview ? false : true )
      setviewlist(viewlist ? false : true)
    }
   }
   >
    {arrowview ? <ExpandMoreIcon/> : <ExpandLessIcon/> }
   </IconButton>
              {/* ____________________________________________________________________________ */}
            </Box>
          </Box>
          {/* _________________________________________________________________ */}
          {/* To view The List and the icon */}
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
                <IconButton
                onClick={() => {
                  navigate("/fav")
                  setviewlist(false)
                  setarrowview(true)
                }}
                size="large" aria-label="favorit" color="inherit">
                  <FavoriteBorderIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                  <Badge badgeContent={favProductsId.length} color="error"></Badge>
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="Cart"
                  color="inherit"
                  sx={{ m: "0 30px" }}

                  onClick={() => {
                    navigate("/cart")
                    setviewlist(false)
                    setarrowview(true)
                  }}
                >
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                  <Badge badgeContent={SelectedProductsId.length} color="error"></Badge>
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
                        setviewlist(false)
                        setarrowview(true)
                      }}
                    >
                      {page.name}
                      <hr style={{display : Location.pathname === page.Link ? "block" : "none"}} />
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
