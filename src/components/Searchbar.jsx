import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { paper, IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";


function SearchBar() {
  const [searchTerm,setSearchTerm]= useState("");
  const navigate = useNavigate();
  const handleSubmit=()=>{
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm("")
    }
  }

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 1,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onClick={handleSubmit}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
