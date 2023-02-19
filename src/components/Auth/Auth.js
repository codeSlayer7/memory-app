import React, { useState } from "react";
import { Avatar, Paper, Grid, Typography, Container, Button } from "@material-ui/core";
import useStyles from './styles';
import { LockOpenOutlined } from "@material-ui/icons";
import Input from "../Auth/Input";
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch} from "react-redux";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const [formData, setFormData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
  
   

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // if(isSignup) {
        //     dispatch(signup(formData, history))
        // }else{
        //     dispatch(signin(formData, history))
        // }
        console.log(formData);
    }       

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})

    }

    const switchMode = () => {
        setIsSignup((prev) => !prev)
    }

    const googleSuccess = async (res) => {

        try {
            const token  = await res.credential;
            const decodeToken = jwt_decode(token)
            console.log(decodeToken);
            dispatch({type:'AUTH', data: {decodeToken, token}})
            history.push('/')
        } catch (error) {
            console.log(error);
        }
        console.log(res);
    }

    // const googleFailure = (err) => {
    //     console.log('fail', err)
    // }



    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlined />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? "password" : 'text'} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}

                    </Grid>
                    <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}> {isSignup ? 'Sign Up' : 'Sign In'} </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <GoogleLogin
                                onSuccess={googleSuccess}
                                onError={(err) => {
                                    console.log('Login Failed', err);
                                }}
                            />;
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;