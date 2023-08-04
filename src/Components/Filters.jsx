import React from "react";
import { Grid, Paper, Typography, styled } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
const SmallFormControlLabel = styled(FormControlLabel)`
  font-size: 12px; /* Adjust the font size as per your preference */
`;
const StyledBody = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: "0.75rem",
        padding: "1px",
        MaxWidth: "100%"
    },
}));
export default function Filters() {
    return (
        <>
            <Paper

            >
                <Grid item container
                    mb={5}
                    height='fit-content'
                    padding={2}
                    bgcolor='white'>
                    <Grid item xs={12}><Typography fontWeight='bold'> Quick tip</Typography> </Grid>
                    <Grid item color='#8A8A8A'><StyledBody variant="subtitle"> Since not all companies will go ahead, we encourage you to apply to several companies.</StyledBody> </Grid>
                    <Grid item color='#8A8A8A'><StyledBody variant="subtitle">

                        However, avoid applying if you don't want to interview, as any interview backouts will be shown to other companies!
                    </StyledBody> </Grid>
                </Grid>
            </Paper>
            <Paper>
                <Grid item container

                    mb={5}
                    height='fit-content'
                    padding={2}
                    bgcolor='white'>
                    <Grid item><Typography fontWeight='bold' fontSize='0.8rem'> Filter By Status  </Typography> </Grid>
                    <Grid item md={12} xs={12} fontSize='0.8rem' textAlign='left'>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"

                            >
                                <SmallFormControlLabel style={{ fontSize: "12px" }} value="female" control={<Radio size="small" />} label="Undecided (4)" />
                                <SmallFormControlLabel value="male" control={<Radio size="small" />} label="Interested (0)" />
                                <FormControlLabel value="other" control={<Radio size="small" />} label="Not Interested (0)" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                </Grid>
            </Paper>
            <Paper>
                <Grid item container
                    justifyContent='left'
                    mb={5}
                    height='fit-content'
                    padding={2}
                    bgcolor='white'>
                    <Grid item><Typography fontWeight='bold' fontSize='0.8rem'> Filter By size  </Typography> </Grid>
                    <Grid item md={12} xs={12} container fontSize='0.8rem'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                            <FormControlLabel control={<Checkbox />} label="Small" />
                            <FormControlLabel control={<Checkbox />} label="Large" />
                        </FormGroup>
                    </Grid>

                </Grid>
            </Paper>

        </>
    );
}
