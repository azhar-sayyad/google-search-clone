 import { Search } from "@mui/icons-material";
import React from "react";
 import './searchPage.css'
 import { useStateValue } from "./StateProvider";

 function seaechPage(){
 const azhar=22;


 
 return (
     <div className="seachPage">
         <div className="seachPage_header"></div>
         <h1>{term}</h1>

<div className="searchPage_results"></div>

         </div>
 )
 }
 export default SearchPage