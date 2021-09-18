import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function Transportation() {
    return(
        <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">What is your main source of transportation</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                        value="Bus"
                        control={<Radio color="primary" />}
                        label="Bus"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="Metro"
                        control={<Radio color="primary" />}
                        label="Metro"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="Car"
                        control={<Radio color="primary" />}
                        label="Car"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="Walk"
                        control={<Radio color="primary" />}
                        label="Walk"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="Bicycle"
                        control={<Radio color="primary" />}
                        label="Bicycle"
                        labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>

        </div>

    )
}