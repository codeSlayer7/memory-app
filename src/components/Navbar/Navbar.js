import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography, } from '@material-ui/core';
import useStyles from './styles'
import { memories } from '../images/index';
import { Link, useHistory, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';


const Navbar = () => {

    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')) )
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null)
    }


    useEffect(()=>{
     setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return (
        <>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <div className={classes.brandContainer}>
                    <Link to='/'>  <Typography variant='h2' className={classes.heading} align='center'> Memories</Typography> </Link>
                    <img className={classes.image} src={memories} alt='memories' height='60' />
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.decodeToken?.name} src={user.decodeToken?.picture} />
                            <Typography variant='h6' color='black' className={classes.userName}> {user.decodeToken?.name}</Typography>
                            <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}> Log out </Button>

                        </div>
                    )
                        :
                        (
                            <Link to='/auth'> Log in </Link>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>

    );
}

export default Navbar;