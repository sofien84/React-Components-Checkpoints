import React from "react";
import geologyimg from "./geologyimg.jpg"; 

const ProfilePhoto = () => {
 return (
   <>
   <img src={geologyimg} alt="Profile Photo" style={{  width:"200px", height:"300px"}}  />
  
   </>
 );
};
export default ProfilePhoto;