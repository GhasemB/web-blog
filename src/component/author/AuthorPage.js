import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import sanitizeHtml from 'sanitize-html';
import CardEL from '../share/CardEL';
import Loader from '../share/Loader';

const AuthorPage = () => {

  const {slug} = useParams();
  const {loading, data, errors} = useQuery(GET_AUTHOR_INFO, {
    variables:{slug},
  }); 

  
  
  if (loading) return <Loader/>
  if (errors) return <h3>Error ...</h3>
  const {author: {name, field, avatar, description, posts}} = data
  return (
    <Container maxWidth='lg'>
      <Grid container mt={10}>
        <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
          <Avatar sx={{width:250, height:250 }} src={avatar.url}/>
          <Typography component='h3' fontWeight={700} mt={4} variant='h5'>{name}</Typography>
          <Typography component='h3' variant='h5' color='text.secondary' mt={2}>{field}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHtml(description.html),}}></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component='h3' variant='h5' fontWeight={700}>مقالات {name}</Typography>
        </Grid>
        <Grid container spacing={2} mt={2}>
          {
            posts.map((post) =>(
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
              </Grid>
            ))
          }
        </Grid>
      </Grid>      
    </Container>
  )
}

export default AuthorPage
