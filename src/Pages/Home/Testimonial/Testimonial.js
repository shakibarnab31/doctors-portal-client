import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Testimonial = (props) => {
    const { name, description, img } = props.testimonial;
    return (



        <Grid xs={4} md={4} >
            <Card sx={{ maxWidth: 345, mt: 8, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    src={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', fontSize: 14, mt: 1 }} component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ m: 2 }} variant="body2" color="text.secondary" >
                        {description}
                    </Typography>
                </CardContent>
            </Card>

        </Grid >



    );
};

export default Testimonial;