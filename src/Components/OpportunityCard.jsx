import { Button, Grid, Typography, Paper, Chip } from "@mui/material";
import React, { Component } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import {styled} from "@mui/material"
const StyledHeading = styled(Typography)(({ theme }) => ({
    fontSize:'1.25rem',
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.9rem", 
      padding:"1px",
      MaxWidth:"100%"
    },
  }));
const StyledBody = styled(Typography)(({ theme }) => ({
    fontSize:'0.9rem',
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5rem", 
      padding:"1px",
      MaxWidth:"100%"
    },
  }));
export default function OpportunityCard(props) {
    return (
        <Paper
        style={{
            maxWidth:'100%',
            maxHeight:'100%'
        }}
        >
            <Grid container p={3} height='fit-content'>
                <Grid item md={2} xs={3} maxWidth='100%' maxHeight='100%' >
                    <img style={{ maxWidth: '100%', maxHeight: "100%" }} src={props.imageSource} />
                </Grid>
                <Grid item container ml={1} xs={7.5} md={7.5}>
                    <Grid item md={12} xs={12} >
                        <StyledHeading variant="h5" component='h1.heading'>
                            {props.heading}
                        </StyledHeading>
                    </Grid>
                    <Grid item md={12} xs={12} container alignItems='center' >
                        <Grid item xs={2} md={0.5}>
                            <Typography>
                                <LocationOnIcon fontSize="1.2rem"   style={{color:"#EC8A52"}} />
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                        <StyledBody  fontSize='0.9rem'>
                            {props.location}
                        </StyledBody>
                        </Grid>
                    </Grid>
                    <Grid item md={12} container >
                        <Grid item xs={2} md={0.5} >
                            <Typography>
                                <GroupsIcon fontSize="1.2rem" color='primary' />
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                        <StyledBody variant="subtitle" fontSize='0.8rem'>
                            {props.foundation}
                        </StyledBody>         
                        </Grid>           
                    </Grid>
                    <Grid item md={12} mt={1} mb={1} xs={12} >
                        <StyledBody  fontSize='0.9rem' style={{whiteSpace:'nowrap' ,overflow:'hidden' ,textOverflow:'ellipsis',width: '100%'}}>
                            {props.description}
                        </StyledBody>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item><Chip label="JavaScript"  /></Grid> 
                        <Grid item><Chip label="CSS"  /></Grid> 
                        <Grid item><Chip label="HTML"  /></Grid> 
                    </Grid>
                </Grid>
                <Grid item md={2} m p>
                    

                    <Button variant="contained" ><StyledBody>View</StyledBody></Button>
                    
                </Grid>
            </Grid>
        </Paper>
    )
}