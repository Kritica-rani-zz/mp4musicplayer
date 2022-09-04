import React from "react";
import { useNavigate } from "react-router-dom";
import { paper, IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
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
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={"hii"}
        onChange={() => console.log("hii")}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
