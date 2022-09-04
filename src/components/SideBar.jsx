import React from "react";
import { Stack} from "@mui/material";
import { categories } from "./utils/constants";

function SideBar({ setSelectedCategory, selectedCategory }) {
const handleSetCategory=(item)=>{
 setSelectedCategory(item.name)
}
 console.log("insidebar", selectedCategory)
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button 
        className="category-btn" style={{background:item.name===selectedCategory && "#FC1503",color:"white"}}
         key={item.name}
         onClick={()=>handleSetCategory(item)}>
          <span style ={{color:item.name===selectedCategory ? "white":"red", marginRight:"15px"}}>{item.icon}</span>
          <span style={{opacity:item.name===selectedCategory?"1":"0.8"}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
