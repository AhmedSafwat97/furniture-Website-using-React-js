import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Badge, Container, Input, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetproductByNameQuery } from "../../services/productApi";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useEffect } from "react";
import FormDialog from "../Sign/Sign";
import jwtDecode from "jwt-decode";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';




const pages = [
  { name: "Home", Link: "/" },
  { name: "About", Link: "/About" },
  { name: "Shop", Link: "/Shop" },
  { name: "Blog", Link: "/Blog" },
  { name: "Contact", Link: "/Contact" },
];

function ResponsiveAppBar() {
  const [ShowSearch, setShowSearch] = useState(false);
  const [Search, setSearch] = useState("");

  const [arrowview, setarrowview] = useState(true);
  const [viewlist, setviewlist] = useState(false);


  const navigate = useNavigate();


  const Location = useLocation();

  const { SelectedProductsId   } = useSelector((state) => state.Cart);

  const { favProductsId  } = useSelector((state) => state.Fav);

  const { data} = useGetproductByNameQuery();


  let decodedToken;
  const token = localStorage.getItem('token')

  if (token) {
    decodedToken = jwtDecode(token);
  }
  const handleSignout =  () => {
    localStorage.removeItem("token")
     navigate("/")
  };

const Searchdata = ()=> {
  if(Search !== ""){
    return data?.filter((product) => product.Name.toUpperCase().startsWith(Search.toUpperCase()) || product.category.toUpperCase().startsWith(Search.toUpperCase()))
  
  }else{  
    return null
  }
  } 

  // to close the list when we click on any place in the page 
  const searchRef = React.useRef(null)
  const searchbarRef = React.useRef(null)
  const searchIconRef = React.useRef(null)


//________________________________
// hidden element when clicking 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false)
        setSearch("") // Close the results list when clicking outside
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const ClickOutsideSearch = (event) => {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target) &&
        searchIconRef.current &&
        !searchIconRef.current.contains(event.target)
      ) {
        setShowSearch(false)
        setSearch("")
      }
    };
    document.addEventListener('click', ClickOutsideSearch);

    return () => {
      document.removeEventListener('click', ClickOutsideSearch);
    };
  }, []);

// _________________________________

  // __________________________________________________________________


  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          minHeight : "65px" ,
          height: { xs: "fit-content", md: "65px" },
          mb: "5px",
          bgcolor: "#FFFFFF",
          padding: { xs: "0 5px", md: "0 70px" },
        }}
      >
{/*start view Search List  */}

{data && Search !== ""?
  
  <Box 
  ref={searchRef}
  sx={{zIndex : "10" ,width : {xs : "70%" , md : "300px"} , bgcolor : "#F3F2EE" , height : "300px" , overflowY : "scroll" , position : "absolute" , right : {xs :"16%" , md : "20%"} , top : {xs : "90px" , md : "120px"} }}>
            
            {Searchdata().map((product) => (
             <Box  key={product.id} onClick={() => {navigate(`/prodetails/${product.id}`) 
                                                    setSearch("")}}>
               <Box sx={{cursor : "pointer" ,display : "flex" , justifyContent : "space-between" ,m : "5px"}}>
                 <Box sx={{width : "25%" , height : "80px" , bgcolor:"#FFF"}}>
                   <img style={{width : "100%" , height : "100%"}} src={product.imageLink} loading='lazy' alt="product Photo2" />
                 </Box>
              
               <Box sx={{width : "50%"}}>
                 <Typography variant="h6" color="black" fontWeight="600" sx={{fontSize : "17px"}} >{product.Name}</Typography>
               
                 <Typography variant="h6" color="gray" sx={{fontSize : "14px"}}>Category : {product.category}</Typography>
              
               </Box>
               </Box>
               <Box sx={{borderTop : "1px solid gray" , width : "85%" , mx : "auto" , my : "10px" }} />

             </Box>

            ))}
            {Searchdata().length === 0 &&
            <Box sx={{textAlign:"center",color:"black"}}> 
            <SentimentVeryDissatisfiedIcon sx={{fontSize : "35px" , color : "gray" ,  mt :"10px"}} />
            <Typography variant="h6" >No Products Found!</Typography>  
            <Typography mb="10px" >Please search in another way to get results</Typography>  
            </Box>
            }


</Box>:null

}



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
                loading='lazy'
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
          {/* _____|||||||||| */}
          <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" ,alignItems : "center" , justifyContent : "space-between" }}>
<IconButton 
  ref={searchIconRef}
onClick={() => {setShowSearch(true)}}
size="large" aria-label="Favorite" color="inherit" >
<SearchIcon sx={{ color: "black"}}/>
</IconButton>
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
        {decodedToken ? (
             <Box 
             sx={{mx : "5px"}}>
                 <Button size="large" aria-label="profile" color="inherit"  border="2px solid black" >
                 <AccountCircleOutlinedIcon
                 onClick={() => {
                  navigate("/profile")
                }}
                 className="profileIcon" sx={{ fontSize: "30px", color: "black" }}/>
                 <Typography color="black">Hi {decodedToken.firstName}</Typography>
                 </Button>
             </Box>
        ) : (
         <Box sx={{mx : "5px"}}>
           <Button  size="large" aria-label="profile" color="inherit"  border="2px solid black" >
           <FormDialog/>
           </Button>
         </Box>

        )}


      {decodedToken &&  <Button  onClick={handleSignout} >
          <LogoutIcon sx={{color : "#92764E"}} />
          <Typography sx={{fontSize : "12px" ,color : "#92764E"}}>Logout</Typography>
          </Button> }



            </Box>
          </Box>

          
        </Container>


  {ShowSearch && 
        <Box 
        ref={searchbarRef}
      sx={{ width : "300px" ,position: "absolute" , top : "70px" ,right :"20%" , display : {xs : "none" ,md : "block"} }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" , width : "100%" }}>
              <TextField sx={{bgcolor : "#FFF" , width : "100%" , borderRadius : "20px" }} value={Search}  onChange={(e) => {
                setSearch(e.target.value);  
                    }} label="Search" variant="outlined" />
             
            </Box>
          </Box>
  
  
  }



        {/* ___________________________________________________________________________ */}
        {/* For Mopile  */}

        <Container
          className="ForMopile"
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" , alignItems : "center" }}>
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
                  loading='lazy'
                />
              </Box>
            </Toolbar>


            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {decodedToken ? (
             <Box sx={{mx : "5px"}}>
                 <Button  size="large" aria-label="profile" color="inherit"  border="2px solid black" >
                 <AccountCircleOutlinedIcon
                  onClick={() => {navigate("/profile")}}
                 className="profileIcon"  sx={{ fontSize: "30px", color: "black" }}/>
                 <Typography color="black">Hi {decodedToken.firstName}</Typography>
                 </Button>
             </Box>
        ) : (
         <Box sx={{mx : "5px"}}>
           <Button size="large" aria-label="profile" color="inherit"  border="2px solid black" >
           <FormDialog/>
           </Button>
         </Box>

        )} 

              {/* _______________________________________________________________ */}
              {/* For shown and hide up and down buttons */}

  <IconButton 
   onClick={
    () => {
      setarrowview(arrowview ? false : true)
      setviewlist(viewlist ? false : true)
    }
   }
   >
    <MenuIcon/>
   </IconButton>
              {/* ____________________________________________________________________________ */}
            </Box>
          </Box>


<Box sx={{display : "flex" , justifyContent : "center" , mb : "10px"}} >
            <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    width : "70%"
                  }}
                >
                  <Input value={Search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Search" label="Search" sx={{ width : "100%" ,border : "none" , borderBottom :"1px solid black"  , bgcolor : "#FFF"}} />
                  <SearchIcon
                    sx={{cursor :"pointer"  ,color: "black", position: "absolute", right: "5px" }}
                  />
               


                </Box>
</Box>



          {/* _________________________________________________________________ */}
          {/* To view The List and the icon */}
          {viewlist && (
            <Box  
            className="fade-in"
            sx={{display : {xs : "block" , md : "none"}}}
            >
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


                {decodedToken &&  <Button  onClick={handleSignout} >
          <LogoutIcon sx={{color : "#92764E"}} />
          <Typography sx={{fontSize : "12px" ,color : "#92764E"}}>Logout</Typography>
          </Button> }
                
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
