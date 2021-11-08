import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import mission from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';
const Mission = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={mission} style={{ width: '100%', height: '80%' }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                        <Container>
                            <Typography variant="h3" sx={{ mb: 5, fontWeight: 'bold' }}>
                                Exceptional Dental
                                <br /> Care, on Your Terms
                            </Typography>
                            <Typography variant="caption" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quisquam voluptas dolorum nisi nobis sit architecto quae nam eum, cumque beatae repellat quam. Quos similique sequi expedita dolorem voluptates voluptatum laboriosam quisquam maxime nam provident veniam ut excepturi maiores sed ipsa voluptas corporis tenetur laudantium culpa, alias molestiae repellendus!
                            </Typography>
                            <br />
                            <Button sx={{ mt: 5 }} variant="contained">Learn more</Button>
                        </Container>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Mission;