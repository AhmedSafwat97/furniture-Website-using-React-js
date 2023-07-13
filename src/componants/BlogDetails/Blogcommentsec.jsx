import { Avatar, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React from 'react';
import { useCommentMutation } from '../../services/productApi';

const Blogcommentsec = ({data}) => {
    const [comment, setcomment] = React.useState("");
    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");


    const commentDetails  = {
        Name : Name ,
        Email : Email , 
        date : new Date().toLocaleDateString(),
        Comment : comment , 
    }

console.log(commentDetails.Comment);




console.log(data.comments);


    const [Comment , { isLoading : CommentLoading} ] = useCommentMutation();
 
    const blogId = data.id

  console.log(blogId);

    const handlecomments = async () => {
        const result = await Comment({ blogId , commentDetails });
        if (result.error) {
          console.log('comment failed:', result.error);
        } else {
          console.log('Sign up successful:', result.data);
        }};




    return (
        <>
            
    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : "90%", mb:"20px" }}>
    
        <Typography variant='h6' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>Comments {data.comments.length}</Typography>
        {/* {map} */}
        {data.comments.map((comment , index) => (
            <Box key={index} sx={{width:"95%", my : "10px",mx:"auto",bgcolor:"#F3F2EE",borderRadius : "15px",display:"flex" }}>
            <Avatar sx={{m: "20px",  width: 56, height: 56 }} alt={comment.Name} src="/broken-image.jpg" />
            <Box >
                <Typography sx={{mt: "20px", fontWeight:"800"}}>{comment.Name}</Typography>
                <Typography sx={{color: "gray", fontSize:"10px"}}>{comment.date}</Typography>
                <Typography sx={{color: "gray", fontSize:"10px" ,mt:'10px'}}>{comment.Comment}</Typography>

            </Box>
        </Box>
        ))}

    </Box>

    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : "90%"}}>
    
    <Typography variant='h5' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>Write your Comment</Typography>
    <Box sx={{width:"95%",mx:"auto",borderRadius : "15px",display:"flex" }}>
       <form style={{width:"100%"}}>
        <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
            <TextField required
                    onChange={(e) => {setName(e.target.value)}}
                    sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Name" />
            <TextField required
                    onChange={(e) => {setEmail(e.target.value)}}
                    sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Email" />
        </Box>
        <TextField required
        onChange={(e) => {setcomment(e.target.value)}}
                sx={{width :"97%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                size="small"
                multiline
                rows={4}
                label="your comment" />


        <Button       

        onClick={handlecomments}

                sx={{
                  bgcolor:'#AF8E60',
                  color: "#fff",
                  fontSize:"14px",
                  borderRadius : "30px",
                  m : "10px",
                  px:"10px",
                }}
              >
               {CommentLoading  ? <CircularProgress/> : "Submit Comment"}
                 
              </Button>


       </form>
    </Box>

</Box>









            
        </>

    );
}

export default Blogcommentsec;
