import React from 'react';
import { ApplicationBar } from '../../components';
import { PageProps } from '../../router/route';  // Correct import statement
import { Typography } from '@mui/material';


const AboutPage: React.FC = () => {
    const handleOnShowAlert = () => {
        alert("Hello world");
    };
    return (
        <>
            <ApplicationBar 
                link={PageProps.homepage}  
                text='Go back to HomePage'
                title='About Page' 
                handleOnShowAlert={handleOnShowAlert} />
                
    
        </>
    );
};

export default AboutPage;