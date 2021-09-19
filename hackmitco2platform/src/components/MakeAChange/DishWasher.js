import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
  });
export default function DishWasher() {
    const classes = useStyles();
    const [value, setValue] = React.useState(5);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
        setValue(0);
        } else if (value > 60) {
        setValue(60);
        }
    };
    return(
        <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Do you have a dishwasher?</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                        value="Yes"
                        control={<Radio color="primary" />}
                        label="Yes"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="No"
                        control={<Radio color="primary" />}
                        label="No"
                        labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
                <Typography id="input-slider" gutterBottom>
                    If selected that you take have a dishwasher for the previous question, how many times do you use it?
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                    </Grid>
                    <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                    </Grid>
                    <Grid item>
                    <Input
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                        step: 1,
                        min: 0,
                        max: 20,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                        }}
                    />
                    </Grid>
                </Grid>
                
        </div>

    )
}