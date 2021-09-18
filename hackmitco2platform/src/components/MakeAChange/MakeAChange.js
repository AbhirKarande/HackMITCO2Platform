import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Transportation from './Transportation';
import Water from './Water';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';




export default function MakeAChange() {
    return(
        <div>
        <div>Want to make a change to your lifestyle?</div>
            <Box component="span" m={1}>
                <Transportation/>
            </Box>
            <Box component="span" m={1}>
                <Water/>
            </Box>
            
        </div>

    )
}