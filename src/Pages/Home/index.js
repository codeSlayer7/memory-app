import React,{useEffect, useState} from 'react'
import { Container, Grow, Grid} from '@material-ui/core';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import useStyles from '../../styles'
import  {useDispatch} from 'react-redux'
import { getPost } from '../../actions/posts';


const Home = () => {


    const [currentId, setCurrentId] = useState(null)

    console.log(' set Current id', currentId);
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost())
    }, [currentId, dispatch])



    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;