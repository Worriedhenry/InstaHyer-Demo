import React, { useState,useEffect } from "react";
import { Grid, Typography, styled, IconButton, Menu, MenuItem, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const HoverGridItem = styled(Grid)`
height: 100%;
display: flex;
align-items: center;
cursor:pointer;
justify-content: center;
  &:hover {
    background-color: grey;
    color:white;

  }
`;
const menuItems = ['Activity']
export default function Header() {
    console.log(window.innerWidth > 800)
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    const handleDrawerOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <>
            <Grid
                md={12}
                xs={12}
                bgcolor="#242424"
                justifyContent="space-around"
                color="#D7DADC"
                container
                position='fixed'
                zIndex='1'
                height="7vh"
                alignItems="center"
            >
                <Grid item md={3} xs={3} sm={3} textAlign="center">
                    <Typography fontSize="1.5rem" fontWeight='bold'>InstaHyer</Typography>
                </Grid>
                {window.innerWidth < 800 && (
                    <Grid item>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                            aria-haspopup="true"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor='right'
                            sx={{ width: '15vw', paddingLeft: '5vw' }}
                            open={anchorEl}
                            onClose={() => setAnchorEl(false)}
                        >
                            <Grid container>
                                <HoverGridItem md={12} item>Activity</HoverGridItem>
                                <HoverGridItem md={12} item>Opportunity</HoverGridItem>
                                <HoverGridItem md={12} item>Inbox</HoverGridItem>
                                <HoverGridItem md={12} item>Profile</HoverGridItem>
                                <HoverGridItem md={12} item>Setting</HoverGridItem>
                                <HoverGridItem md={12} item>SignOut</HoverGridItem>
                            </Grid>
                        </Drawer>
                    </Grid>
                )}

                {window.innerWidth > 800 && (
                    <Grid item container justifyContent="space-between" height='100%' md={6}>
                        <HoverGridItem md={2} item>Activity</HoverGridItem>
                        <HoverGridItem md={2} item>Opportunity</HoverGridItem>
                        <HoverGridItem md={2} item>Inbox</HoverGridItem>
                        <HoverGridItem md={2} item>Profile</HoverGridItem>
                        <HoverGridItem md={2} item>Setting</HoverGridItem>
                        <HoverGridItem md={2} item>SignOut</HoverGridItem>
                    </Grid>
                )}
            </Grid>
            <Grid item container bgcolor='#4C5365' height='22vh' padding='9vh' color='white'>
                <Grid item textAlign='center' md={12}>
                    <Typography fontSize='1.5rem' >Showing 1 - 4 out of 4</Typography>
                </Grid>
                <Grid item textAlign='center' md={12}>
                    <Typography fontSize='0.9rem' >recommended jobs for you</Typography>
                </Grid>
            </Grid>
        </>
    );
}
