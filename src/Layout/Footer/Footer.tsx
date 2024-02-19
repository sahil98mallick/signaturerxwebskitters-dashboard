import React from 'react'
import { Typography, Container, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <>
      <footer style={{ marginTop: 'auto', backgroundColor: '#f0f0f0', padding: '16px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="primary">
            Signature Rx
            </Typography>
            <Typography variant="body2" color="inherit">
              Best platform to increase your Pharmacy Business.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="primary">
              Connect with Us
            </Typography>
            <Link href="#" color="inherit" style={{ marginRight: '16px' }}>
              Twitter
            </Link>
            <Link href="#" color="inherit" style={{ marginRight: '16px' }}>
              Facebook
            </Link>
            <Link href="#" color="inherit" style={{ marginRight: '16px' }}>
              LinkedIn
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>





    </>
  )
}
