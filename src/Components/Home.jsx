import React, { Component } from "react";
import { Divider, Grid, Typography,styled } from '@mui/material'
import Filters from "./Filters";
import Header from "./header";
import SearchBar from "./SearchBar";
import OpportunityCard from "./OpportunityCard";
import Footer from "./Footer";
const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5rem", 
      padding:"1px",
      MaxWidth:"100%",
      flexDirection:"column-reverse"
    },
  }));
const Coursify = {
    imageSource: 'Cousrsify.png',
    heading: 'Coursify',
    foundation: 'Founded in 2013',
    location: 'San Francisco, United States',
    description: ". Host as many online courses as you want without paying anything for it. Created with Avocode. ... Enter your logo, images, colors and style"
}
const Google = {
    imageSource: 'Google.png',
    heading: 'Google',
    foundation: 'Founded in 1959',
    location: 'California, United States',
    description: "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, q"
}
const Meta = {
    imageSource: 'Meta.png',
    heading: 'Meta',
    foundation: 'Founded in 2004',
    location: 'California, United States',
    description: "Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook,"
}
const Amazon = {
    imageSource: 'Amazon.png',
    heading: 'Amazon',
    foundation: 'Founded in 1979',
    location: 'California, United States',
    description: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence"
}
const Opportunities=[Coursify,Google,Meta,Amazon]
export default function Home() {
    return (
        <>
            <Grid md={12} xs={12} alignItems='flex-start'>
                <Grid item md={12}>
                    <Header />
                </Grid>
                <StyledGrid item container justifyContent='space-between ' md={12} pl={16} pt={5}>
                    <Grid item md={2.75} xs={9} sm={6}>
                        <Filters />
                    </Grid>
                    <Grid item container md={9} xs={12} height='fit-content'>
                        <Grid item md={11} xs={12} >
                            <SearchBar />
                        </Grid>
                        <Grid item container md={12} >
                            {Opportunities.map((e)=>
                            <Grid item md={11} xs={12} mt={2}>
                                <OpportunityCard {...e} />
                            </Grid>
                            )
                            }
                        </Grid>
                    </Grid>
                </StyledGrid>
                <Grid item mt={5} mb={5} p={3} md={12}>
                    <Divider />
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        </>
    )
}