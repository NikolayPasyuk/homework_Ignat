import React from 'react'
import {Box, Slider} from '@material-ui/core';


type SuperDoubleRangePropsType = {
    onChangeDoubleRange: (value: Array<number>) => void
    // value?: [number, number]
    value2: Array<number>
    // min, max, step, disable, ...
}

const minDistance = 10;

const valuetext = (value: number) => {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange,
        value2
    }
) => {

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeDoubleRange([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        } else {
            onChangeDoubleRange([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        }
    };


    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    );
}

export default SuperDoubleRange
