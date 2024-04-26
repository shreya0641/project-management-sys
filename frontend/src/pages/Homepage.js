import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {

    const StyledContainer = styled(Container)`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    `;

    const StyledPaper = styled.div`
    padding: 24px;
    `;

    const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 16px;
    padding: 24px;
    `;

    const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #252525;
    /* font-family: "Manrope"; */
    font-weight: bold;
    padding-top: 0;
    letter-spacing: normal;
    line-height: normal;
    `;



    return (
        <StyledContainer>
            <Grid container spacing={5} style={{ width: '100%', height: '100vh'}}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%'}} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <StyledPaper elevation={2}>
                        <h1>
                            Welcome to
                            Project Management
                            System
                        </h1>
                        <StyledText>
                            Streamline Project management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view Project, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            {/* <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink> */}
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
