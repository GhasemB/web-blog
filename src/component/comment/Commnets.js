import { useQuery } from '@apollo/client'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_POST_COMMENTS } from '../../graphql/queries'
import Loader from '../share/Loader'

const Commnets = ({slug}) => {

  const {loading, data , errors} = useQuery(GET_POST_COMMENTS, {variables: {slug}},)
  
  if (loading) return <Loader/>
  if (errors) return <h3>Error</h3>
  console.log(data)


  return (
    <Grid container sx={{boxShadow: 'rgb(0,0,0,0.1) 0px 4px 12px', borderRadius:4, py: 1, mt: 8}}>
      <Grid item xs={12} m={2}>
        <Typography component='p' variant='h6' fontWeight={700} color='text.primary'>
          کامنت ها
        </Typography>
        {
          data.comments.map(comment => (
            <Grid item xs={12} key={comment.id} m={2} p={2} border='1px solid silver' borderRadius={1}>
              <Box component='div' display='flex' alignItems='center'>
                <Avatar>{comment.name[0]}</Avatar>
                <Typography component='span' variant='p'  fontWeight={700} mr={1}>{comment.name}</Typography>
              </Box>
              <Typography component='p' variant='p' mt={3} mr={6}>{comment.text}</Typography>
            </Grid>
          ))
        }
      </Grid>
      
    </Grid>
  )
}

export default Commnets
