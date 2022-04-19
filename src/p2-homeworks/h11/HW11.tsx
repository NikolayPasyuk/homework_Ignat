import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './common/HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number[]>([0, 100]);

    return (
        <div className={style.body}>
            <span className={style.homework}>homeworks 11</span>

            <span className={style.spanOne}>{value1}</span>
            <SuperRange
                // сделать так чтоб value1 изменялось
                value1={value1}
                onChangeRange={(value) => setValue1(value)}
            />

            <span className={style.spanTwo}>{value2[0]}</span>
            <SuperDoubleRange
                // сделать так чтоб value1 и value2 изменялось
                value2={value2}
                onChangeDoubleRange={(value: Array<number>) => setValue2(value)}
            />
            <span>{value2[1]}</span>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
