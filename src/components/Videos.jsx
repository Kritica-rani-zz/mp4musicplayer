import React from 'react';
import {Box} from "@mui/material";
import VideoCard from './VideoCard';
import ChanelCard from './ChanelCard';
import { Stack } from '@mui/system';


function Videos({videos}) {
 
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
  {videos?.map((item)=>(
    <Box key={item.id}>
{item.id.videoId && <VideoCard video={item}/>}
{item.id.channelId && <ChanelCard video={item}/>}
    </Box>
  ))}
   </Stack>
  )
}

export default Videos