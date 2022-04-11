import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from './images/spinner.gif'
import style from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <span className={style.homework}>homeworks 10</span>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img className={style.img} src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
