import React from 'react';
import { ApplicationBar } from '../../components';
import { PageProps } from '../../router/route';  // Correct import statement
import { Typography } from '@mui/material';
// import { useState} from 'react';

const HomePage: React.FC = () => {
    const handleOnShowAlert = () => {
        alert("Hello world");
    };
    return (
        <>
            <ApplicationBar 
                link={PageProps.aboutus}  // Use pageProps.aboutus instead of homepage
                text='Go to About Page'
                title='Home Page' 
                handleOnShowAlert={handleOnShowAlert}
                
                
                
                />
                
                
                
        </>
    );
};

export default HomePage;

