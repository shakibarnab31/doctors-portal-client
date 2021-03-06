import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, user, authError, isLoading } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match');
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Re-enter your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 2 }} variant='contained' type="submit">Register</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login"><Button variant="text">Already Registered? Please Login</Button></NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congrats..Registered Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}



                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;