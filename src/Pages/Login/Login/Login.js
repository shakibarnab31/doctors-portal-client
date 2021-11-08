import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, authError, loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
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
                        <Button sx={{ width: '75%', m: 2 }} variant='contained' type="submit">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register"><Button variant="text">New User? Please Register</Button></NavLink>


                    </form>
                    <Button onClick={handleGoogleSignIn} sx={{ width: '75%', m: 2, backgroundColor: 'salmon' }} variant='contained'>Google SignIn</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congrats..Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}




                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;