import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import jwtDecode from 'jwt-decode';


const Commentsec = ({data , CommentSecWidth , CommentSecName}) => {
    const [comment, setcomment] = React.useState("");
    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [itemId, setitemId] = useState([]);
    const [TheComment, setTheComment] = useState(sessionStorage.getItem(CommentSecName) ? JSON.parse(sessionStorage.getItem(CommentSecName)) : [] );
    const [error, setError] = useState(false)
  


let decodedToken;
const token = localStorage.getItem('token')

if (token) {
  decodedToken = jwtDecode(token);
}


    const commentDetails  = {
      UniqeId : Math.floor(Math.random() * 1000) , 
        Id : data.id ,
        Name : decodedToken ? decodedToken.firstName : Name ,
        Email : decodedToken ? decodedToken.Email : Email , 
        date : new Date().toLocaleDateString(),
        Comment : comment , 
    }


    return (
        <Box sx={{m : "20px 0"}}>
    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : {xs : "85%" , md : `${CommentSecWidth}%`} , mb:"20px" }}>
    
        <Typography variant='h6' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>Comments</Typography>
        {/* {map} */}
        {data.comments.map((comment , index) => (
            <Box key={index} sx={{ width:"95%", my : "10px",mx:"auto",bgcolor:"#F3F2EE",borderRadius : "15px",display:"flex" }}>
            <Avatar sx={{m: "20px",  width: 56, height: 56 }} alt={comment.Name} src="/broken-image.jpg" />
            <Box  sx={{flexGrow : 1}}>
                <Typography sx={{mt: "20px",fontWeight:"800"}}>{comment.Name}</Typography>
                <Typography sx={{color: "gray", fontSize:"10px"}}>{comment.date}</Typography>
                <Typography  sx={{color: "gray", fontSize:"14px"  , mb : "20px", width : "100%"}}>{comment.Comment}</Typography>
            </Box>
        </Box>
        ))}

          {TheComment.filter((comment) => comment.Id === data.id ).map((comment , index) => (
            <Box key={comment.UniqeId} sx={{ width:"95%", my : "10px",mx:"auto",bgcolor:"#F3F2EE", minheight : "300px",borderRadius : "15px",display:"flex" }}>
            <Avatar sx={{m: "20px",  width: 56, height: 56 }} alt={comment.Name} src="/broken-image.jpg" />
            <Box
            sx={{flexGrow : 1}} >
                <Typography sx={{mt: "20px", fontWeight:"800"}}>{comment.Name}</Typography>
                <Typography sx={{color: "gray", fontSize:"10px"}}>{comment.date}</Typography>
                <Typography sx={{color: "gray", fontSize:"14px"  , mb : "20px", width : "95%"}}>{comment.Comment}</Typography>
            </Box>

            

        <IconButton  
    onMouseEnter={() => {
      if (!itemId.includes(comment.UniqeId)) {
        setitemId([...itemId , comment.UniqeId ])
      }
   }}
   onMouseLeave={() => {
    setitemId([])
   }}
   onClick={()=> {
    const NewTheComment = TheComment.filter((item) => {
      return item.UniqeId !== comment.UniqeId;
    });
    const NewItemid = itemId.filter((item) => {
        return item.UniqeId !== comment.UniqeId ;})

      setitemId(NewItemid)
      setTheComment(NewTheComment)

      sessionStorage.setItem(CommentSecName , JSON.stringify(NewTheComment) )


   }}

       sx={{mr : "20px"}}>
    {itemId.includes(comment.UniqeId) ?   < DeleteIcon sx={{color : "red"}}/> : < DeleteOutlineIcon sx={{color : "gray"}}/> }
       </IconButton>
        </Box>
         ))}

    </Box>




    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : {xs : "85%" , md : `${CommentSecWidth}%`} }}>
    
    <Typography variant='h5' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>Write your Comment</Typography>
          {error && <Typography sx={{color:"red",fontSize:"12px",textAlign:"center"}}>Please ,Fill all the Form inputs</Typography>}
    <Box sx={{width:"100%",mx:"auto",borderRadius : "15px",display:"flex" }}>
       <form style={{width:"100%"}}>
          {decodedToken ? (
              <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                         <TextField 
                         disabled
                    value={decodedToken.firstName}
                    sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Name" />
                      <TextField 
                      disabled
                    value={decodedToken.Email}
                    sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Email" />
              </Box>
          ) : (
            <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
            <TextField required
                    value={Name}
                    onChange={(e) => {setName(e.target.value)}}
                    sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Name" />
            <TextField required
                    value={Email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Email" />
        </Box>
          )}
        <TextField required
        value={comment}
        onChange={(e) => {setcomment(e.target.value)}}
               sx={{width :"97%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                size="small"
                multiline
                rows={4}
                label="your comment" />


        <Button       

        onClick={() => {
            if (decodedToken) {
          if (comment !== "") {
            setTheComment([...TheComment , commentDetails])
            if (TheComment !== []) {
            sessionStorage.setItem(CommentSecName , JSON.stringify([...TheComment , commentDetails]) )}
            setEmail("")
            setName("")
            setcomment("")
          }
            
            } else {
              if (Name !== "" && Email !== "" && Email.includes("@") && comment !== "") {
                setTheComment([...TheComment , commentDetails])
                if (TheComment !== []) {
                sessionStorage.setItem(CommentSecName , JSON.stringify([...TheComment , commentDetails]) )}
                setError(false)
               } else {
                setError(true)
               }
               setEmail("")
               setName("")
               setcomment("")
            }
          }}
            sx={{
              my : "10px" ,
              backgroundColor: "#92764E",
              cursor: "pointer",
              color: "#FFF",
              padding: "5px 16px",
              borderRadius: "20px",
              width : "fit-content",
              ":hover": {
                color: "#92764E",
                outline: "1px solid #92764E",
              },
            }}
           
              >
               Submit Comment
              </Button>


       </form>
    </Box>

</Box>









            
        </Box>

    );
}

export default Commentsec;
