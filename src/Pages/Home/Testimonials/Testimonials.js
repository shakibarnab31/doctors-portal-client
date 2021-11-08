import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import Grid from '@mui/material/Grid';

import Testimonial from '../Testimonial/Testimonial';
import { Container } from '@mui/material';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi voluptate pariatur, odit excepturi necessitatibus rem harum dolor quae minus modi doloribus nobis molestiae sapiente totam itaque accusantium error laborum quam",
            name: 'Winson Harry',

            address: 'California'
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi voluptate pariatur, odit excepturi necessitatibus rem harum dolor quae minus modi doloribus nobis molestiae sapiente totam itaque accusantium error laborum quam",
            name: 'Winson Harry',

            address: 'California'
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi voluptate pariatur, odit excepturi necessitatibus rem harum dolor quae minus modi doloribus nobis molestiae sapiente totam itaque accusantium error laborum quam",
            name: 'Winson Harry',

            address: 'California'
        },
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} columns={{ xs: 12, md: 12 }}>
                    {testimonials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;