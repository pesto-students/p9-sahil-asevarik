import axios from "axios";
import { useState } from "react";
import "../assets/styles/Home.css";
import BottomContainer from "../components/BottomContainer";
import NavBar from "../components/NavBar";
import TopContainer from "../components/TopContainer";
import { Button } from "@mui/material";
function Home(params) {
    const [shortendUrls,setShortendUrls] = useState([
        {
        id:1,
        isShortend:true,
        shoternedUrl:"Shorterned Url 1",
    },
        {
            id:2,
        isShortend:true,
        shoternedUrl:"Shorterned Url 2",
    },
        {
            id:3,
        isShortend:true,
        shoternedUrl:"Shorterned Url 3",
    },


]);
   async function handleCopyBtnClick(value){
       
      await  navigator.clipboard.writeText(value);
      console.log(value);
    }
    function handleSearchBtnClick(value){
       
       axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`).then(res=>{
        setShortendUrls(prevurls=>{
            return [...prevurls,{id:prevurls.length+1,isShortend:true,shoternedUrl:res.data.result.short_link}]
        }) 
       })
       
      
    }
    return (
       <div className="main-container">
       <NavBar/>
       <TopContainer/>
       <BottomContainer data={shortendUrls} handleCopyBtnClick={handleCopyBtnClick} handleSearchBtnClick={handleSearchBtnClick}/>  
       <Button variant="outlined" onClick={() =>{
        throw new Error("this is a custom error")
       }} sx={{gridColumn:'2/3',marginTop:'2rem'}}>Destory the world</Button>   
       
       </div>
    )
}
export default Home;