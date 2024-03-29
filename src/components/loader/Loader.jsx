import React from 'react';
import { Box, Grow, LinearProgress } from '@mui/material';
import figure1 from '../../assets/logo/Polygon 1.svg';
import figure2 from '../../assets/logo/Polygon 2.svg';
import figure3 from '../../assets/logo/Polygon 3.svg';

const Loader = () => {
    return (
        <Grow in={true} timeout={{ enter: 500, exit: 500}} style={{ transformOrigin: 'center'}}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} className='app__loader'>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'4rem'} width={'40%'} className='app__loader-container'>
                    <Box display={'flex'} justifyContent={'center'} gap={'0.3rem'}>
                        <Grow in={true} timeout={{ enter:1000 }} style={{ transformOrigin: 'center'}}>
                            <img width={'30px'} src={figure1} alt='logo figure' loading='lazy' />
                        </Grow>
                        <Grow in={true} timeout={{ enter: 1000 }} style={{ transformOrigin: 'center'}}>
                            <img width={'30px'} src={figure2} alt='logo figure' loading='lazy' />
                        </Grow>
                        <Grow in={true} timeout={{ enter: 1000 }} style={{ transformOrigin: 'center'}}>
                            <img width={'30px'} src={figure3} alt='logo figure' loading='lazy' />
                        </Grow>
                    </Box>
                    <LinearProgress/>
                </Box>
            </Box>
        </Grow>
    );
};

export default Loader;