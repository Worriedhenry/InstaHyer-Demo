import React, { Component } from "react";
import {Grid, Typography} from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function (){
    return(
        <Grid mb={5} container justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography variant="h5"> InstaHyre</Typography>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center'>
                <Grid item>
                    <TwitterIcon/>
                </Grid>
                <Grid item>
                    <FacebookIcon/>
                </Grid>
                <Grid item>
                    <LinkedInIcon/>
                </Grid>
            </Grid>
        </Grid>
    )
}