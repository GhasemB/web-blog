import { useQuery } from '@apollo/client'
import { Avatar, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries'
import Loader from '../share/Loader'

const Authors = () => {
  const {loading, data, errors} = useQuery(GET_AUTHORS_INFO)

  if (loading) return <Loader/>
  if (errors) return <h3>Error</h3>
  console.log(data)

  const {authors} = data;

  return (
    <Grid container 
      sx={{boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:4}}
      >
      {
        authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2} >
              <a
                href={`/authors/${author.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}  
                >
                <Avatar src={author.avatar.url} sx={{marginLeft:2}}/>
                <Typography component='p' variant='p' color='text.secondary'>{author.name}</Typography>
              </a>
            </Grid>
            {
              <Grid item xs={12}>
                <Divider variant='middle'/>
              </Grid>

            }
          </React.Fragment >
        ))
      }
    </Grid>
  )
}

export default Authors
