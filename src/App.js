import React from 'react';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import SearchDetail from './components/SearchDetail';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import {Box} from '@mui/material';
function App() {
  return (
  
   <Box sx={{backgroundColor:"#000"}}>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Feed/>}/>
        <Route path ="/video/:id" element={<VideoDetail/>}/>
        <Route path ="/channel/:id" element={<ChannelDetail/>}/>
        <Route path ="/search/searchTerm" element={<SearchDetail/>}/>
       

      </Routes>

   </Box>
  )
}

export default App