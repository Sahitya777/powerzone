import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
const ExerciseVideo = ({exerciseVideos,name}) => {
  if (!exerciseVideos.length) return "laoding";
  return (
    <Box sx={{marginTop:{lg:'220px',xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise vidoes
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'20px'}}}
      >
        {exerciseVideos.slice(0,4).map((item,index)=>(
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            
            target="_blank"
            rel="noreferrer noopener"
          >
            <img style={{ borderTopLeftRadius: '20px',marginTop:'10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="16px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo