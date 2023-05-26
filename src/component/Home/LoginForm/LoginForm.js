import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setToken}) => {

  const URL = 'http://localhost:8080/auth/authenticate';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit =  (event) => {
    event.preventDefault();
     axios.post(URL, {
        email: email,
        password: password 
    })
    .then(response => {
        const {access_token} = response.data;
        setToken(access_token);
        navigate("/admin")
    })
    .catch(error => {
        console.error('Login error', error);
    })
  };
    return (
        <section className="contact-form-section section-padding websitePadding">
            <Grid container spacing={3} className="">
                <Grid item xl={12} md={12} xs={12} className="">
                    <Grid
                        className="contact-form-main wow animated fadeInUp"
                        data-wow-duration="2s">
                        <form onSubmit={handleSubmit} >
                            <Grid container spacing={3} >
                                <Grid item lg={12} xs={12} md={12} className="form-group">
                                <FaRegEnvelope className="text-gray-400 mx-3" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="esempio@mail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={12} xs={12} md={12} className="form-group">
                                <MdLockOutline className="text-gray-400 mx-3" />
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="Password"
                                        id="Password"
                                        placeholder="••••••••••"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>

                            </Grid>

                            <Grid className="send-message mt-35 text-center">
                                <button type="submit" className="btn-send">
                                    send
                                </button>
                            </Grid>
                            <span className="form-message"></span>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}

export default LoginForm