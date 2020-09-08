import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Components
import { Grid, TextField, makeStyles, Button, Typography, Box, Link } from '@material-ui/core';
import { env } from '@config';
import { useForm, Form } from '@src/Components/Common/useForm';

// constants
import avatar from '@src/Assets/lifeline.jpg';

import './login.css';

const useStyle = makeStyles(() => ({
  submit: {
    // marginTop: theme.spacing(3),
    'backgroundColor': '#211b4e !important',
    '&:hover': {
      backgroundColor: '#151039 !important',
    },
    'textTransform': 'initial',
    'marginTop': '5px',
  },
  link: {
    '&:hover': {
      backgroundColor: '#fff !important',
    },
    'fontSize': '18px',
    'textTransform': 'initial',
    'marginLeft': '10%',
  },
  sideImg: {
    // bottom: '360px',
    top: '-360px',
    left: '50%',
    width: '50%',
    position: 'relative',
    height: '100vh',
  },
}));

const initialValues = {
  email: '',
  password: '',
};

const Login: React.FC<{}> = () => {
  const history = useHistory();

  const { values, handleInputChange } = useForm(initialValues);
  const classes = useStyle();

  // use for API call on submit
  const handleSubmit = () => {
    // API call
    const url = `${env.API_URL}signin`;

    axios
      .post(url, values)
      .then(() => {
        return history.push('/dashboard');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Box m={10}>
        <span>
          <Typography component='h5' variant='h5'>
            Enter Login Details below...
          </Typography>
        </span>
        <Form>
          <Grid container>
            <TextField
              // variant='filled' // for diff varient like outline etc
              label='Email'
              name='email'
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid container>
            <TextField
              // variant='outlined' // for diff varient like outline etc
              label='Password'
              name='password'
              value={values.password}
              onChange={handleInputChange}
            />
          </Grid>
        </Form>
        <Button
          className={classes.submit}
          color='primary'
          // className={classes.addButton}
          // style={'margin:'}
          type='submit'
          variant='contained'
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Link
          className={classes.link}
          href='/forgot'
          // onClick={() => {
          //   this.setState({ showForgetPass: true });
          // }}
          // className={classes.forgetPassword}
        >
          Forgot Password?
        </Link>
      </Box>
      {/* <Box m={10}> */}
      {/* <Grid> */}
      <img className={classes.sideImg} src={avatar} alt='' />
      {/* </Box> */}
      {/* </Grid> */}
    </>
  );
};

export default Login;