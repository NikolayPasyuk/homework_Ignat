import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Box, Slider} from '@material-ui/core';


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number) => void
    value1: number
};

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange, value1,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    // const finalRangeClassName = `${s.range} ${className ? className : ''}`

    const handleChange1 = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            onChangeRange(newValue);
        }
    }


    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
        </>
    )
}

export default SuperRange
