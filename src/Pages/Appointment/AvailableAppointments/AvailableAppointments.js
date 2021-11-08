import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import { Alert, Container } from '@mui/material';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';
const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8.00 AM - 9.00 AM',
            space: 10

        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10.00 AM - 11.00 AM',
            space: 10

        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '11.00 AM - 12.00 PM',
            space: 10

        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '6.00 PM - 8.00MM',
            space: 10

        },
        {
            id: 5,
            name: 'Oral Surgery',
            time: '8.00 AM - 9.00AM',
            space: 10

        },
        {
            id: 6,
            name: 'Pediatric Dental',
            time: '11.00 AM - 12.00AM',
            space: 10

        }
    ]
    return (

        <Container>
            <Typography variant="h4" sx={{ my: 6 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Congrats Booking Successful</Alert>}

            <Grid container spacing={2}>
                {bookings.map(booking => <Booking
                    booking={booking}
                    key={booking.id}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                ></Booking>)}
            </Grid>
        </Container>


    );
};

export default AvailableAppointments;