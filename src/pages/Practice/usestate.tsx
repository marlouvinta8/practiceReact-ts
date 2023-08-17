import React, {useState} from 'react';
import { PageProps } from '../../router/route';  // Correct import statement
import { Typography, Button } from '@mui/material';
import { AppliBar } from '../../components';






 const UsePage: React.FC = () => {
    const handleOnShowAlert = () => {
        alert("Hello world");
    };

    const [count,setCount] = useState (4)
   

    
    function decrementCount(){
    setCount(prevCount => prevCount -1 ) 
        
    
}
    function incrementCount(){
        setCount(prevCount => prevCount  + 1)
    }


 

    return (
        <>
            <AppliBar
                link={PageProps.homepage}  // Use pageProps.aboutus instead of homepage
                text='Go to HomePage'
                title='Practice Page' 
                handleOnShowAlert={handleOnShowAlert}

             
                />
                <div className='buttonContainer' style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100%'}}>
                <Button variant ='contained' onClick={decrementCount}> - </Button>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'50px', height:'50px'}}>
                <span> {count} </span>
                </div>
                <Button variant ='contained' onClick={incrementCount} > + </Button>
                </div>
                
        </>


    );
};

    export default UsePage;