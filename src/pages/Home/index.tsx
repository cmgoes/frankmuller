import React, { useState } from "react";
import {
  AppBar,
  Typography,  
  Box,
  Button,  
  Container,  
  Card,   
  CardContent,
  CardMedia,
} from "@mui/material";

import BannerImage from "../../assets/images/banner.jpg";
import SliderImage from "../../assets/images/slider2.png";

const Home = () => {  
  return (
    <AppBar
      position="static"
      className="appbar"
      sx={{ backgroundColor: "common.black", pt: '0', pb: '40px' }}
    >
      <Container maxWidth="xl" sx={{pt: {xs: '24px', sm: '40px'}}}>               
        <Box sx={{backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center center', border: 1, borderColor: 'white', borderRadius: {xs: '24px', sm: '36px'}, height: {xs: '200px', sm: '240px'}}}/>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{fontSize: '32px', pt: {xs: '32px', md: '48px'}, pb: '20px'}}>
                Alexium #34022    
            </Typography>                    
            <Typography sx={{color: '#E1E1E1', pb: '20px', fontSize: '13px'}}>
                All collectables of the opened Mystery Box are listed under the ‘’Items’’ tab. 
                For easy access, add your prefered Items to the Favorites section.
            </Typography>            
            <Typography sx={{py: '16px', borderBottom: 1, width: 'fit-content', borderColor: '#fff'}}>
                Items
            </Typography>            
        </Box>        
      </Container>
      <Container maxWidth="xl" sx={{display: 'flex', justifyConent: 'space-between', alignItems: 'center', py: {xs: '24px', sm: '36px'}, backgroundColor: '#141414'}}>
        <Card sx={{ maxWidth: 200, padding: '12px', backgroundColor: 'black', borderRadius: '16px' }}>
            <CardMedia
                component="img"
                height="176"
                image={SliderImage}
                alt="green i"
                sx={{borderRadius: '12px'}}
            />
            <CardContent sx={{px: '0'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#BABABA', fontSize: '13px' }}>
                    Watch faces
                </Typography>
                <Typography variant="body2" sx={{color: '#BABABA', fontSize: '13px' }}>
                    Nakamoto Watchface #3042
                </Typography>
            </CardContent>            
        </Card>    
      </Container>
    </AppBar>
  );
};
export default Home;
