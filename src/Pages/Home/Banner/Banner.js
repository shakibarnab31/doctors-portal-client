import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import { Button, Container, Typography } from '@mui/material';
import './Banner.css'

const Banner = () => {
    return (

        <Box className="banner" sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: 'left' }}>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, color: 'gray', my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse quidem labore voluptas quo at reiciendis deleniti excepturi unde eius.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>


    );
};

export default Banner;