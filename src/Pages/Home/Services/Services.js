import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';



const services = [
    {
        name: 'Fluride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae modi officiis. Assumenda natus, officiis repellat cupiditate placeat est eligendi tempora explicabo ducimus nostrum",
        img: 'https://i.ibb.co/ck6Vtsv/fluoride.png'
    },
    {
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae modi officiis. Assumenda natus, officiis repellat cupiditate placeat est eligendi tempora explicabo ducimus nostrum",
        img: 'https://i.ibb.co/WHPD32W/cavity.png'
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae modi officiis. Assumenda natus, officiis repellat cupiditate placeat est eligendi tempora explicabo ducimus nostrum",
        img: 'https://i.ibb.co/Jc6ZBRd/whitening.png'
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;