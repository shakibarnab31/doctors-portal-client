import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'

import { Button, Container, Typography } from '@mui/material';
import './AppointmentBanner.css'

const AppointmentBanner = () => {
    return (
        <Box className="appointment" sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} md={5}>
                        <img style={{ width: '100%', marginTop: '-110px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid xs={12} md={7} >
                        <Container sx={{ display: 'flex', height: '100%', alignItems: "center", textAlign: 'left' }}>
                            <Box>
                                <Typography variant='h6' sx={{ color: 'aquamarine', mb: 4 }}>
                                    Appointment
                                </Typography>
                                <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', my: 3 }}>
                                    Make an Appointment Today
                                </Typography>
                                <Typography variant='h6' sx={{ color: 'white', fontSize: '14px', mb: 3 }}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ullam voluptatem nisi, obcaecati alias perferendis explicabo aliquid quia tempora.
                                </Typography>
                                <Button variant="contained">Learn More</Button>


                            </Box>
                        </Container>


                    </Grid>

                </Grid>
            </Container>

        </Box >
    );
};

export default AppointmentBanner;