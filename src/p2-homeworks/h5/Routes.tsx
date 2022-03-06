import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./Junior";
import JuniorPlus from "./JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PlUS: '/junior-plus'
}


const Rou = () => {

    return (
        <div>
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PlUS} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Rou
