import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function LaundryMachine() {
    return(
        <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">How many times do you do your laundry per MONTH?</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="1"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="3"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="4"
                        control={<Radio color="primary" />}
                        label="4"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="5"
                        control={<Radio color="primary" />}
                        label="5"
                        labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>

        </div>

    )
}