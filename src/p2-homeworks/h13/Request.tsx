import React, {ChangeEvent, useState} from 'react';
import {requestsAPI} from './api/RequestsAPI';
import {Button, Checkbox} from '@material-ui/core';
import style from '../h11/common/HW11.module.css'


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const onClickButton = () => {
        requestsAPI.createCheckbox(checked)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message)
            })
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return <div>
        <hr/>

        <span className={style.homework}>
                homeworks 13
            </span>

        <Checkbox
            checked={checked}
            color="primary"
            onChange={onChangeHandler}
        />

        <div style={{paddingTop: '10px',paddingLeft: '30px'}}>
            <Button variant={'outlined'}
                    onClick={onClickButton}
                    color={'secondary'}>Send
            </Button>
        </div>

        <hr/>
    </div>
};
